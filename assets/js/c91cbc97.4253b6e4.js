(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8292],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(h,c(c({ref:t},s),{},{components:n})):r.createElement(h,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3094:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),c=["components"],a={id:"coupons",title:"coupons"},p={unversionedId:"schema/subscriptions/coupons",id:"schema/subscriptions/coupons",isDocsHomePage:!1,title:"coupons",description:"No description",source:"@site/docs/schema/subscriptions/coupons.mdx",sourceDirName:"schema/subscriptions",slug:"/schema/subscriptions/coupons",permalink:"/tribute-contracts/docs/schema/subscriptions/coupons",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/subscriptions/coupons.mdx",version:"current",frontMatter:{id:"coupons",title:"coupons"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"coupons(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: Coupon_orderBy\n  orderDirection: OrderDirection\n  where: Coupon_filter\n  block: Block_height\n): [Coupon!]!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"skip"},(0,i.kt)("inlineCode",{parentName:"h4"},"skip")),(0,i.kt)("h4",{id:"first"},(0,i.kt)("inlineCode",{parentName:"h4"},"first")),(0,i.kt)("h4",{id:"orderby-coupon_orderby"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderBy")," (","[",(0,i.kt)("inlineCode",{parentName:"h4"},"Coupon_orderBy"),"]"),(0,i.kt)("h4",{id:"orderdirection-orderdirection"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderDirection")," (","[",(0,i.kt)("inlineCode",{parentName:"h4"},"OrderDirection"),"]"),(0,i.kt)("h4",{id:"where-coupon_filter"},(0,i.kt)("inlineCode",{parentName:"h4"},"where")," (","[",(0,i.kt)("inlineCode",{parentName:"h4"},"Coupon_filter"),"]"),(0,i.kt)("h4",{id:"block-block_height"},(0,i.kt)("inlineCode",{parentName:"h4"},"block")," (","[",(0,i.kt)("inlineCode",{parentName:"h4"},"Block_height"),"]"),(0,i.kt)("p",null,"The block at which the query should be executed. Can either be an ",(0,i.kt)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",(0,i.kt)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"coupon"},"[",(0,i.kt)("inlineCode",{parentName:"h4"},"Coupon"),"]"))}l.isMDXComponent=!0}}]);