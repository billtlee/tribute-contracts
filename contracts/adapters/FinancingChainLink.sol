pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

import "./interfaces/IFinancing.sol";
import "../core/DaoConstants.sol";
import "../core/DaoRegistry.sol";
import "../extensions/bank/Bank.sol";
import "../adapters/interfaces/IVoting.sol";
import "../guards/MemberGuard.sol";
import "../guards/AdapterGuard.sol";
import "./interfaces/chainlink/AggregatorV3Interface.sol";

/**
MIT License

Copyright (c) 2020 Openlaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

contract FinancingChainLinkContract is
    IFinancing,
    DaoConstants,
    MemberGuard,
    AdapterGuard
{
    AggregatorV3Interface internal _priceFeed;

    /**
     * 	@notice choose a priceFeed contract, see https://docs.chain.link/docs/ethereum-addresses
     * Aggregator: ETH/USD
     *	contract address of the price feed from Chainlink
     * Rinkeby Contract Address: 0x8A753747A1Fa494EC906cE90E9f37563A8AF630e
     * Mainnet Contract Address:  0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
     */

    constructor() {
        _priceFeed = AggregatorV3Interface(
            0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
        );
    }

    struct ProposalDetails {
        address applicant; // the proposal applicant address, can not be a reserved address
        uint256 amount; // the amount requested for funding
        address token; // the token address in which the funding must be sent to
    }

    // keeps track of all financing proposals handled by each dao
    mapping(address => mapping(bytes32 => ProposalDetails)) public proposals;

    /**
     * @notice default fallback function to prevent from sending ether to the contract.
     */
    receive() external payable {
        revert("fallback revert");
    }

    /**
     * @notice Creates and sponsors a financing proposal.
     * @dev Applicant address must not be reserved.
     * @dev Token address must be allowed/supported by the DAO Bank.
     * @dev Requested amount must be greater than zero.
     * @dev Only members of the DAO can sponsor a financing proposal.
     * @param dao The DAO Address.
     * @param proposalId The proposal id.
     * @param applicant The applicant address.
     * @param token The token to receive the funds.
     * @param amount The desired amount.
     * @param data Additional details about the financing proposal.
     */
    function submitProposal(
        DaoRegistry dao,
        bytes32 proposalId,
        address applicant,
        address token,
        uint256 amount,
        bytes memory data
    ) external override reentrancyGuard(dao) {
        require(amount > 0, "invalid requested amount");
        BankExtension bank = BankExtension(dao.getExtensionAddress(BANK));
        require(bank.isTokenAllowed(token), "token not allowed");
        require(
            isNotReservedAddress(applicant),
            "applicant using reserved address"
        );

        dao.submitProposal(proposalId);

        ProposalDetails storage proposal = proposals[address(dao)][proposalId];
        proposal.applicant = applicant;
        proposal.amount = amount;
        proposal.token = token;

        IVoting votingContract = IVoting(dao.getAdapterAddress(VOTING));
        address sponsoredBy =
            votingContract.getSenderAddress(
                dao,
                address(this),
                data,
                msg.sender
            );

        dao.sponsorProposal(proposalId, sponsoredBy, address(votingContract));
        votingContract.startNewVotingForProposal(dao, proposalId, data);
    }

    /**
     * @notice Processing a financing proposal to grant the requested funds.
     * @dev Only proposals that were not processed are accepted.
     * @dev Only proposals that were sponsored are accepted.
     * @dev Only proposals that passed can get processed and have the funds released.
     * @param dao The DAO Address.
     * @param proposalId The proposal id.
     */
    function processProposal(DaoRegistry dao, bytes32 proposalId)
        external
        override
        reentrancyGuard(dao)
    {
        ProposalDetails memory details = proposals[address(dao)][proposalId];

        IVoting votingContract = IVoting(dao.votingAdapter(proposalId));
        require(address(votingContract) != address(0), "adapter not found");

        require(
            votingContract.voteResult(dao, proposalId) ==
                IVoting.VotingState.PASS,
            "proposal needs to pass"
        );
        dao.processProposal(proposalId);
        BankExtension bank = BankExtension(dao.getExtensionAddress(BANK));

        //enter US Dollar = details.amount to convert it into ETH
        uint256 amount = usdToEth(details.amount);

        bank.subtractFromBalance(GUILD, details.token, amount);
        bank.addToBalance(details.applicant, details.token, amount);
    }

    /**
     *  Returns the latest price from AggregatorV3Interface.sol
        Chainlink returns the latest price to 5 decimials 
        e.g. 176471000000 = $1,764.71
     */
    function getLatestPrice() public view returns (int256) {
        (
            uint80 roundId,
            int256 answer,
            uint256 startedAt,
            uint256 updatedAt,
            uint80 answeredInRound
        ) = _priceFeed.latestRoundData();
        return answer;
    }

    /* 
        @param _amount = the amount in US Dollars to convert to ETH
        multipliers are needed in numerator (usd to wei) and denominator 
        (convert result from chainlink to wei) 
     */
    function usdToEth(uint256 _amount) public view returns (uint256) {
        //convert int to uint
        uint256 denominator = uint256(getLatestPrice());
        //multipliers to ensure values calculated in wei
        uint256 ethInUsdAmount =
            ((_amount * 1000000000000000000000) / denominator) * 100000;
        return ethInUsdAmount;
    }
}
