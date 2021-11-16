"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3922],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(d,".").concat(u)]||h[u]||l[u]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"creating-an-adapter",title:"How to create an Adapter"},d=void 0,p={unversionedId:"tutorial/adapters/creating-an-adapter",id:"tutorial/adapters/creating-an-adapter",isDocsHomePage:!1,title:"How to create an Adapter",description:"Introduction",source:"@site/docs/tutorial/adapters/HowToCreateAnAdapter.md",sourceDirName:"tutorial/adapters",slug:"/tutorial/adapters/creating-an-adapter",permalink:"/docs/tutorial/adapters/creating-an-adapter",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/tutorial/adapters/HowToCreateAnAdapter.md",tags:[],version:"current",frontMatter:{id:"creating-an-adapter",title:"How to create an Adapter"},sidebar:"docs",previous:{title:"Tribute UI",permalink:"/docs/tutorial/dao/interacting"},next:{title:"How to create an Extension",permalink:"/docs/tutorial/extensions/creating-an-extension"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Defining the Interface",id:"defining-the-interface",children:[]},{value:"Pick the right Adapter type",id:"pick-the-right-adapter-type",children:[]},{value:"Identifying the Modifiers",id:"identifying-the-modifiers",children:[]},{value:"Map out the proper Access Flags",id:"map-out-the-proper-access-flags",children:[]},{value:"Set up the DAO custom configurations",id:"set-up-the-dao-custom-configurations",children:[]},{value:"Be mindful of the storage costs",id:"be-mindful-of-the-storage-costs",children:[]},{value:"Conventions &amp; Implementation",id:"conventions--implementation",children:[]},{value:"Testing the new Adapter",id:"testing-the-new-adapter",children:[]},{value:"Adding documentation",id:"adding-documentation",children:[]},{value:"Done",id:"done",children:[]}],l={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/intro/design/adapters/introduction"},"Adapters"))," are well defined, tested and extensible smart contracts that are created with a unique purpose. One Adapter is responsible for performing one or a set of tasks in a given context. With this approach we can develop adapters targeting specific use-cases, and update the DAO configurations to use these new adapters."),(0,o.kt)("p",null,"When a new adapter is created, one needs to submit a Managing proposal to add the new adapter to the DAO. Once the proposal passes, the new adapter is added and becomes available for use."),(0,o.kt)("p",null,"Each adapter needs to be configured with the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/core/dao-registry#access-flags"},"Access Flags"))," in order to access the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/intro/design/core/introduction"},"Core Contracts")),", and/or use the existing ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/intro/design/extensions/introduction#existing-extensions"},"Extensions")),". Otherwise the Adapter will not able to interact with the DAO."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The adapter must follow the rules defined by the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tutorial/adapters/adapter-template"},"Template Adapter")),"."))),(0,o.kt)("h3",{id:"defining-the-interface"},"Defining the Interface"),(0,o.kt)("p",null,"The adapter must implement one or more of the available interfaces at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/tree/master/contracts/adapters/interfaces"},"contracts/adapters/interfaces"),". If none of these interfaces match the use-case of your adapter, feel free to suggest a new interface."),(0,o.kt)("h3",{id:"pick-the-right-adapter-type"},"Pick the right Adapter type"),(0,o.kt)("p",null,"There are two main types of adapters that serve different purposes."),(0,o.kt)("h4",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,"Writes/reads to/from the DAO state based on a proposal, and the proposal needs to pass, otherwise the DAO state changes are not applied, e.g: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/adapters/exiting/guild-kick-adapter"},"GuildKick.sol")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of a Proposal Adapter")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'      contract SampleContract is\n        IFinancing, // Some interface\n        DaoConstants,\n        MemberGuard, // Guards to check if the call is coming from a member address\n        AdapterGuard // Guards to prevent reentrancy\n        {\n\n        /**\n         * @notice Explain what the function does in addition to the proposal submission.\n         * @dev Describe any required states/checks/parameters that are necessary to execute the function.\n         * @param dao The DAO address.\n         * @param proposalId The proposal id that is managed by the client.\n         * @param param1 Description of the parameter 1.\n         * @param param2 Description of the parameter 2.\n         * @param paramN Description of the parameter n.\n         */\n        function submitProposal(\n          DaoRegistry dao,\n          bytes32 proposalId,\n          type1 param1,\n          type2 param2,\n          typeN paramN\n        ) external override reentrancyGuard(dao) {\n          // If the submission needs to be restricted by DAO members/advisors\n          // it is a good practice to use the helper function from the IVoting interface.\n          // Mainly because if you have an offchain voting Adapter enabled, the sender address may vary.\n          IVoting votingContract = IVoting(dao.getAdapterAddress(VOTING));\n          address submittedBy =\n            votingContract.getSenderAddress(dao, address(this), data, msg.sender);\n\n          // Add any `required` checks here before starting the proposal submission process.\n          required(pre - condition, "error message");\n\n          // Starts the submission\n          _submitXProposal(dao, proposalId, param1, param2, paramN);\n        }\n\n        /**\n         * @notice Explain what the submission function does, what kind of checks/validations are performed. Sometimes you may want to sponsor the proposal\n         * right away in the same transaction, so you can do that at the end of the submission process, by calling the dao.sponsorProposal.\n         * @dev Describe any additional checks that the function performs, e.g: only members are allowed, etc.\n         * @param dao The dao address.\n         * @param proposalId The guild kick proposal id.\n         * @param param1 Description of the parameter 1.\n         * @param param2 Description of the parameter 2.\n         * @param paramN Description of the parameter n.\n         */\n        function _submitProposal(\n          DaoRegistry dao,\n          bytes32 proposalId,\n          type1 param1,\n          type2 param2,\n          typeN paramN\n        ) internal onlyMember2(dao, submittedBy) {\n          // onlyMember2 in this case we are restricting the access to members/advisors only\n\n          // Make sure you create the proposal in the DAO.\n          // The DAO already checks if the proposal id is not a duplicate.\n          dao.submitProposal(proposalId);\n\n          // Performing any additional checks or logic you may need.\n\n          // If you want to sponsor the proposal right away, you need to start the voting process.\n          IVoting votingContract = IVoting(dao.getAdapterAddress(VOTING));\n          votingContract.startNewVotingForProposal(dao, proposalId, data);\n\n          // Finally sponsor the x proposal.\n          // The DAO already checks if the proposal exists and is being sent by a member/advisor.\n          dao.sponsorProposal(proposalId, submittedBy);\n\n          // If you do want to start the voting and sponsor the proposal in the same transaction,\n          // just include these 2 last calls into a new function that must be triggered in another transaction.\n        }\n\n        /**\n         * @notice Explain what happens during the processProposal execution.\n         * @dev Describe additional validations that are performed in the function.\n         * @param dao The dao address.\n         * @param proposalId The guild kick proposal id.\n         */\n        function processProposal(DaoRegistry dao, bytes32 proposalId)\n            external\n            override\n            reentrancyGuard(dao)\n        {\n            // Update the DAO state to ensure the proposal is processed\n            // The DAO already checks if the proposal id exists, or was already processed,\n            dao.processProposal(proposalId);\n\n            // Checks if the proposal has passed, otherwise it should not be processed.\n            IVoting votingContract = IVoting(dao.getAdapterAddress(VOTING));\n            require(\n                votingContract.voteResult(dao, proposalId) ==\n                    IVoting.VotingState.PASS,\n                "proposal did not pass"\n            );\n\n            // Here you can update any Adapter state that you may need\n            ...\n        }\n    }\n')),(0,o.kt)("h4",{id:"generic"},"Generic"),(0,o.kt)("p",null,"Writes/reads to/from the DAO state without a proposal, e.g: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/adapters/utils/bank-adapter"},"Bank Adapter")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of a Generic Adapter")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'contract Sample2Contract is\n  IX, // Some interface\n  DaoConstants,\n  MemberGuard, // Guards to check if the call is coming from a member address\n  AdapterGuard // Guards to prevent reentrancy\n{\n  /**\n   * @notice Explain what the function does, if it changes the DAO state or just reads, etc.\n   * @dev Describe any additional requirements/checks/configurations.\n   * @param dao The DAO address.\n   * @param param1 The description of the parameter 1.\n   */\n  function myFunction(DaoRegistry dao, type1 param1)\n    external\n    reentrancyGuard(dao)\n  {\n    // Add any checks / validation you may need\n    require(pre - condition, "error message");\n\n    // Instantiate any Extension that you may want to use, e.g:\n    BankExtension bank = BankExtension(dao.getExtensionAddress(BANK));\n\n    // Using the extension\n    uint256 balance = bank.balanceOf(account, token);\n\n    // Executing a transaction that changes the Extension state.\n    bank.functionToCall(param1);\n\n    // Emit an event if needed.\n    emit MyEvent(address(dao), param1);\n  }\n}\n\n')),(0,o.kt)("h3",{id:"identifying-the-modifiers"},"Identifying the Modifiers"),(0,o.kt)("p",null,"We have adapters that are accessible only to members and/or advisors of the DAO (e.g: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/adapters/exiting/rage-quit-adapter"},"Ragequit.sol")),"), and adapters that are open to any individual or organization, e.g: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/adapters/funding/financing-adapter"},"Financing.sol")),"."),(0,o.kt)("p",null,"While creating the adapter try to identify which sort of users you want to grant access to. Remember that the adapters are the only way we have to alter the DAO state, so be careful with the access modifiers you use. We already have some of them implemented, take a look at the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/guards/adapter-guards"},"Adapter Guards")),", and feel free to suggest new ones if needed."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In addition to that, every external function in the adapter must contain the guard ",(0,o.kt)("inlineCode",{parentName:"p"},"reentrancyGuard")," to prevent the reentrancy attack."))),(0,o.kt)("h3",{id:"map-out-the-proper-access-flags"},"Map out the proper Access Flags"),(0,o.kt)("p",null,"Another important point is to map out which sort of permissions your adapter needs in order to write/read data to/from the DAO. If your adapter interacts with an ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/intro/design/extensions/introduction"},"Extension")),", you will also need to provide the correct Access Flags to access that extension."),(0,o.kt)("h3",{id:"set-up-the-dao-custom-configurations"},"Set up the DAO custom configurations"),(0,o.kt)("p",null,"Some adapters might need customized/additional configurations to make decisions on the fly. These configurations can and should be set per DAO. In order to do that you need to identify what sort of parameters that you want to keep customizable and set them up through the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/contracts/adapters/configuration/configuration-adapter"},"Configuration Adapter")),"."),(0,o.kt)("h3",{id:"be-mindful-of-the-storage-costs"},"Be mindful of the storage costs"),(0,o.kt)("p",null,"The key advantage of the adapters is to make them very small and suitable to a very specific use-case. With that in mind we try to not use the storage that much. We prefer efficient and cheap adapters that can be easily deployable and maintainable. The less state it maintains and operations it executes, the better."),(0,o.kt)("h3",{id:"conventions--implementation"},"Conventions & Implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Function names (public)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Adapter that is a Proposal type",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"submitProposal"),(0,o.kt)("li",{parentName:"ul"},"processProposal"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Function names (private)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"_","myFunction"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Revert as early as possible")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If your adapter needs configurations, please add the ",(0,o.kt)("inlineCode",{parentName:"p"},"configureDao")," function to receive the parameters.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure you add the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," checks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"reentrancyGuard(dao)")," for external functions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Usually the adapter needs to perform some verifications before executing the calls that may change the DAO state. Double check if the DAORegistry functions that your adapter uses already implement some checks, so you do not need to repeat them in the adapter."))),(0,o.kt)("h3",{id:"testing-the-new-adapter"},"Testing the new Adapter"),(0,o.kt)("p",null,"In order to verify if the new adapter works properly, one needs to implement the basic test suite, so we can ensure it is actually doing what it was supposed to do."),(0,o.kt)("p",null,"There are several examples of tests that you can check to start building your own. Take a look at the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/tree/master/test/adapters"},"tests/adapters"))," folder."),(0,o.kt)("p",null,"The general idea is to create one test suite per adapter/contract. And try to cover all the happy paths first, and then add more complex test cases after that."),(0,o.kt)("p",null,"You need to declare the new adapter contract in ",(0,o.kt)("inlineCode",{parentName:"p"},"migration/configs/contracts.config.js")," file, so it can be accessed in the deploy/test environment. Make sure you use following the structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},' {\n    id: adaptersIdsMap.SAMPLE2_ADAPTER,\n    name: "Sample2Contract",\n    alias: "sample2Adapter",\n    path: "../../contracts/adapters/Sample2Contract",\n    enabled: true,\n    version: "1.0.0",\n    type: ContractType.Adapter,\n    acls: {\n      // Set the Flags your adapter needs to work with the DAO\n      dao: [\n        daoAccessFlagsMap.SUBMIT_PROPOSAL,\n        daoAccessFlagsMap.SET_CONFIGURATION,\n      ],\n      extensions: {\n        // Set the Flags your adapter needs to work with the extension\n        [extensionsIdsMap.BANK_EXT]: [\n          bankExtensionAclFlagsMap.ADD_TO_BALANCE,\n          bankExtensionAclFlagsMap.SUB_FROM_BALANCE,\n          bankExtensionAclFlagsMap.INTERNAL_TRANSFER,\n        ],\n      },\n    },\n  },\n')),(0,o.kt)("p",null,"The attributes of the contract configuration are defined below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Each contract contains different configurations that will be required by the deployment\n * script. This type helps you to define these configs.\n */\nexport type ContractConfig = {\n  /**\n   * The id of the contract, usually it is imported from dao-ids-util.ts.\n   */\n  id: string;\n  /**\n   *  The name of the solidity contract, not the file name, but the contract itself.\n   */\n  name: string;\n  /**\n   * The javascript variable name that will be named\n   * to access the contract. This is useful for variables\n   * that are created during the deployment such as\n   * adapters and extension. Using this alias you will be\n   * able to access it in the test context,\n   * e.g: adapters.<alias> will return the deployed contract.\n   */\n  alias?: string;\n  /**\n   * The path to the solidity contract.\n   */\n  path: string;\n  /**\n   * If true indicates that the contract must be deployed.\n   */\n  enabled: boolean;\n  /**\n   * Optional\n   * skip auto deploy true indicates that the contract do need to be\n   * automatically deployed during the migration script execution.\n   * It is useful to skip the auto deploy for contracts that are not required\n   * to launch a DAO, but that you manually configure them after the DAO is created,\n   * but not finalized, e.g: Offchain Voting.\n   */\n  skipAutoDeploy?: boolean;\n  /**\n   * Version of the solidity contract.\n   * It needs to be the name of the contract, and not the name of the .sol file.\n   */\n  version: string;\n  /**\n   * Type of the contract based on the ContractType enum.\n   */\n  type: ContractType;\n  /**\n   * The Access Control Layer flags selected to be granted to this contract in the DAO.\n   */\n  acls: SelectedACLs;\n  /**\n   * Optional\n   * The function that computes the correct ACL value based on the selected ACL flags.\n   */\n  buildAclFlag?: ACLBuilder;\n  /**\n   * Optional\n   * A contract may need custom arguments during the deployment time,\n   * declare here all the arguments that are read from the env,\n   * and passed to the configuration/deployment functions.\n   * The names of the arguments must match the arguments provided\n   * in the deployment script 2_deploy_contracts.js\n   */\n  deploymentArgs?: Array<string>;\n  /**\n   * Optional\n   * Set of arguments to be passed to the `configureDao` call\n   * after the contract has been deployment.\n   */\n  daoConfigs?: Array<Array<string>>;\n  /**\n   * Optional\n   * The id of the extension generated by the factory, usually you will import that from extensionsIdsMap.\n   * e.g: a BankFactory generates instances of contract BankContract, so the BankFactory config needs to\n   * set the extensionsIdsMap.BANK_EXT in this attribute to indicate it generates bank contracts.\n   */\n  generatesExtensionId?: string;\n};\n")),(0,o.kt)("p",null,"After adding the config the file, next time you run the tests or the migration script, your new adapter will be auto deployed."),(0,o.kt)("p",null,"In order to speed up the test suites we usually don't create one DAO per test function, but we create the DAO during the suite initialization, and then only reset the chain after each test case using the evm snapshot feature. For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'describe("Adapter - AdapterName", () => {\n  /**\n   * Using the utility function `deployDefaultDao` * to create the DAO before all tests are\n   * executed.\n   * Once the DAO is created you can access the\n   * adapters, extensions, factories, testContracts\n   * and votingHelpers contracts. Use the test global scope\n   * to store them and access it later in the test functions.\n   */\n  before("deploy dao", async () => {\n    const {\n      dao,\n      adapters,\n      extensions,\n      factories,\n      testContracts,\n      votingHelpers,\n    } = await deployDefaultDao({ owner });\n    this.dao = dao;\n    this.adapters = adapters;\n    this.extensions = extensions;\n  });\n\n  /**\n   * Before each test function we take a chain snapshot, which\n   * contains the fresh DAO configurations with zero\n   * modifications.\n   */\n  beforeEach(async () => {\n    this.snapshotId = await takeChainSnapshot();\n  });\n\n  /**\n   * After the test function is executed we revert to the\n   * latest chain snapshot took when the DAO was fresh\n   * installed.\n   * With this approach we save time in the DAO creation,\n   * and the test suite runs 10x faster.\n   */\n  afterEach(async () => {\n    await revertChainSnapshot(this.snapshotId);\n  });\n\n  /**\n   * Add a descriptive name to your test function that\n   * covers the use case that you are testing.\n   */\n  it("should be possible to set a single configuration parameter", async () => {\n    // Access the global scope to read the contracts you may need.\n    const dao = this.dao;\n    const configuration = this.adapters.configuration;\n    const voting = this.adapters.voting;\n\n    // Use openzeppelin test-env to assert results, events,and failures, e.g:\n    expect(value1.toString()).equal("1");\n    expectEvent(tx.receipt, "EventName", {\n      eventArg1: value1,\n      eventArg2: toBN("2"), //value 2\n    });\n    await expectRevert(\n      // Calling the contract function that returns promise\n      configuration.submitProposal(dao.address, "0x1", [key], [], [], {\n        from: owner,\n        gasPrice: toBN("0"),\n      }),\n      "must be an equal number of config keys and values"\n    );\n  });\n});\n')),(0,o.kt)("h3",{id:"adding-documentation"},"Adding documentation"),(0,o.kt)("p",null,"Each adapter must provide its own documentation describing what is the use-case it solves, what are the functions and interactions it contains. There is a template that you can use to create the docs for your new adapter, check out the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/tutorial/adapters/adapter-template"},"Adapter Template")),"."),(0,o.kt)("h3",{id:"done"},"Done"),(0,o.kt)("p",null,"If you have followed all the steps above and created a well tested, documented Adapter, please submit a Pull Request to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/pulls"},"Tribute Contracts")),", so we can review it and provide additional feedback. Thank you!"))}h.isMDXComponent=!0}}]);