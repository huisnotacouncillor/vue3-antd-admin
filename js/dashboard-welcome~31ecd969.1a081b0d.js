(window.webpackJsonp=window.webpackJsonp||[]).push([["dashboard-welcome~31ecd969"],{"112a":function(t,e,n){t.exports=n.p+"img/analysis.d9040b65.svg"},"8cba":function(t,e,n){"use strict";n("c9ea")},c9ea:function(t,e,n){},d6cc:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),r=n("112a"),a=n.n(r),c=Object(o.withScopeId)("data-v-64630b3a");Object(o.pushScopeId)("data-v-64630b3a");var i={class:"box"},s=Object(o.createVNode)("img",{src:a.a},null,-1);Object(o.popScopeId)();var u=c((function(t,e,n,r,a,u){var l=Object(o.resolveComponent)("a-descriptions-item"),d=Object(o.resolveComponent)("a-badge"),b=Object(o.resolveComponent)("a-descriptions");return Object(o.openBlock)(),Object(o.createBlock)("div",null,[Object(o.createVNode)("div",i,[s,Object(o.createVNode)(b,{title:"系统信息",bordered:""},{default:c((function(){return[Object(o.createVNode)(l,{label:"IP",key:"IP"},{default:c((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(t.userInfo.IP),1)]})),_:1}),(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(t.browserInfo,(function(t,e){return Object(o.openBlock)(),Object(o.createBlock)(l,{label:e,key:e},{default:c((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(t),1)]})),_:2},1032,["label"])})),128)),Object(o.createVNode)(l,{label:"网络状态"},{default:c((function(){return[Object(o.createVNode)(d,{status:t.online?"processing":"default",text:t.online?"在线":"离线"},null,8,["status","text"])]})),_:1})]})),_:1})])])})),l=(n("b0c0"),n("a9e3"),n("f00c"),n("ade3")),d=n("4d91"),b=n("1d19"),f=n("b488"),p=n("0464"),m=n("7b05"),g=n("4df5");function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function O(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!Object(o.isVNode)(t)}function v(t){return t?t.toString().split("").reverse().map((function(t){var e=Number(t);return isNaN(e)?t:e})):[]}var j={prefixCls:d.a.string,count:d.a.any,component:d.a.string,title:d.a.oneOfType([d.a.number,d.a.string,null]),displayComponent:d.a.any,onAnimated:d.a.func},y=Object(o.defineComponent)({name:"ScrollNumber",mixins:[f.a],inheritAttrs:!1,props:j,emits:["animated"],setup:function(){return{configProvider:Object(o.inject)("configProvider",g.b),lastCount:void 0,timeout:void 0}},data:function(){return{animateStarted:!0,sCount:this.count}},watch:{count:function(){this.lastCount=this.sCount,this.setState({animateStarted:!0})}},updated:function(){var t=this,e=this.animateStarted,n=this.count;e&&(this.clearTimeout(),this.timeout=setTimeout((function(){t.setState({animateStarted:!1,sCount:n},t.handleAnimated)})))},beforeUnmount:function(){this.clearTimeout()},methods:{clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0)})),getPositionByNum:function(t,e){var n=this.sCount,o=Math.abs(Number(n)),r=Math.abs(Number(this.lastCount)),a=Math.abs(v(n)[e]),c=Math.abs(v(this.lastCount)[e]);return this.animateStarted?10+t:o>r?a>=c?10+t:20+t:a<=c?10+t:t},handleAnimated:function(){this.$emit("animated")},renderNumberList:function(t,e){for(var n=[],r=0;r<30;r++)n.push(Object(o.createVNode)("p",{key:r.toString(),class:Object(b.a)(e,{current:t===r})},[r%10]));return n},renderCurrentNumber:function(t,e,n){if("number"==typeof e){var r=this.getPositionByNum(e,n),a={transition:this.animateStarted||void 0===v(this.lastCount)[n]?"none":void 0,msTransform:"translateY(".concat(100*-r,"%)"),WebkitTransform:"translateY(".concat(100*-r,"%)"),transform:"translateY(".concat(100*-r,"%)")};return Object(o.createVNode)("span",{class:"".concat(t,"-only"),style:a,key:n},[this.renderNumberList(r,"".concat(t,"-only-unit"))])}return Object(o.createVNode)("span",{key:"symbol",class:"".concat(t,"-symbol")},O(e)?e:{default:function(){return[e]}})},renderNumberElement:function(t){var e=this,n=this.sCount;return n&&Number(n)%1==0?v(n).map((function(n,o){return e.renderCurrentNumber(t,n,o)})).reverse():n}},render:function(){var t,e=this.prefixCls,n=this.title,r=this.component,a=void 0===r?"sup":r,c=this.displayComponent,i=(0,this.configProvider.getPrefixCls)("scroll-number",e),s=this.$attrs,u=s.class,l=s.style,d=void 0===l?{}:l;if(c)return Object(m.a)(c,{class:Object(b.a)("".concat(i,"-custom-component"),c.props&&c.props.class)});var f=Object(p.a)(h(h({},this.$props),this.$attrs),["count","onAnimated","component","prefixCls","displayComponent"]),g=h({},d),v=h(h({},f),{title:n,style:g,class:Object(b.a)(i,u)});return d&&d.borderColor&&(v.style.boxShadow="0 0 0 1px ".concat(d.borderColor," inset")),Object(o.createVNode)(a,v,O(t=this.renderNumberElement(i))?t:{default:function(){return[t]}})}}),w=n("9ff2"),N=n("1d6f"),C=n("af88"),x=n("dd3d"),S=n("46b7");function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function P(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!Object(o.isVNode)(t)}var T={count:d.a.VNodeChild,showZero:d.a.looseBool,overflowCount:d.a.number,dot:d.a.looseBool,prefixCls:d.a.string,scrollNumberPrefixCls:d.a.string,status:d.a.oneOf(Object(S.a)("success","processing","default","error","warning")),color:d.a.string,text:d.a.VNodeChild,offset:d.a.arrayOf(d.a.oneOfType([String,Number])),numberStyle:d.a.style,title:d.a.string};function D(t){return-1!==w.a.indexOf(t)}var B=Object(o.defineComponent)({name:"ABadge",props:Object(N.o)(T,{showZero:!1,dot:!1,overflowCount:99}),setup:function(){return{configProvider:Object(o.inject)("configProvider",g.b),badgeCount:void 0}},methods:{getNumberedDispayCount:function(){var t=this.$props.overflowCount,e=this.badgeCount;return e>t?"".concat(t,"+"):e},getDispayCount:function(){return this.isDot()?"":this.getNumberedDispayCount()},getScrollNumberTitle:function(){var t=this.$props.title,e=this.badgeCount;return t||("string"==typeof e||"number"==typeof e?e:void 0)},getStyleWithOffset:function(){var t=this.$props,e=t.offset,n=t.numberStyle;return _(e?{right:"".concat(-parseInt(e[0],10),"px"),marginTop:Object(x.a)(e[1])?"".concat(e[1],"px"):e[1]}:{},n)},getBadgeClassName:function(t,e){var n,o=this.hasStatus();return Object(b.a)(t,(k(n={},"".concat(t,"-status"),o),k(n,"".concat(t,"-dot-status"),o&&this.dot&&!this.isZero()),k(n,"".concat(t,"-not-a-wrapper"),!e.length),n))},hasStatus:function(){var t=this.$props,e=t.status,n=t.color;return!!e||!!n},isZero:function(){var t=this.getNumberedDispayCount();return"0"===t||0===t},isDot:function(){var t=this.$props.dot,e=this.isZero();return t&&!e||this.hasStatus()},isHidden:function(){var t=this.$props.showZero,e=this.getDispayCount(),n=this.isZero(),o=this.isDot();return(null==e||""===e||n&&!t)&&!o},renderStatusText:function(t){var e=Object(N.g)(this,"text");return this.isHidden()||!e?null:Object(o.createVNode)("span",{class:"".concat(t,"-status-text")},P(e)?e:{default:function(){return[e]}})},renderDispayComponent:function(){var t=this.badgeCount;if(t&&"object"===V(t))return Object(m.a)(t,{style:this.getStyleWithOffset()},!1)},renderBadgeNumber:function(t,e){var n,r=this.$props,a=r.status,c=r.color,i=this.badgeCount,s=this.getDispayCount(),u=this.isDot(),l=this.isHidden(),d=(k(n={},"".concat(t,"-dot"),u),k(n,"".concat(t,"-count"),!u),k(n,"".concat(t,"-multiple-words"),!u&&i&&i.toString&&i.toString().length>1),k(n,"".concat(t,"-status-").concat(a),!!a),k(n,"".concat(t,"-status-").concat(c),D(c)),n),b=this.getStyleWithOffset();return c&&!D(c)&&((b=b||{}).background=c),l?null:Object(o.withDirectives)(Object(o.createVNode)(y,{prefixCls:e,"data-show":!l,class:d,count:s,displayComponent:this.renderDispayComponent(),title:this.getScrollNumberTitle(),style:b,key:"scrollNumber"},null),[[o.vShow,!l]])}},render:function(){var t,e=this.prefixCls,n=this.scrollNumberPrefixCls,r=this.status,a=this.color,c=Object(N.g)(this,"text"),i=this.configProvider.getPrefixCls,s=i("badge",e),u=i("scroll-number",n),l=Object(N.l)(this),d=Object(N.g)(this,"count");Array.isArray(d)&&(d=d[0]),this.badgeCount=d;var f=this.renderBadgeNumber(s,u),p=this.renderStatusText(s),m=Object(b.a)((k(t={},"".concat(s,"-status-dot"),this.hasStatus()),k(t,"".concat(s,"-status-").concat(r),!!r),k(t,"".concat(s,"-status-").concat(a),D(a)),t)),g={};if(a&&!D(a)&&(g.background=a),!l.length&&this.hasStatus()){var h=this.getStyleWithOffset(),O=h&&h.color;return Object(o.createVNode)("span",{class:this.getBadgeClassName(s,l),style:h},[Object(o.createVNode)("span",{class:m,style:g},null),Object(o.createVNode)("span",{style:{color:O},class:"".concat(s,"-status-text")},P(c)?c:{default:function(){return[c]}})])}var v=Object(C.d)(l.length?"".concat(s,"-zoom"):"");return Object(o.createVNode)("span",{class:this.getBadgeClassName(s,l)},[l,Object(o.createVNode)(C.a,v,P(f)?f:{default:function(){return[f]}}),p])}}),I=Object(S.b)(B),M=n("6a21"),A=n("ae55");function $(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!Object(o.isVNode)(t)}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function z(t){return null!=t}var L=function(t){var e,n=t.itemPrefixCls,r=t.component,a=t.span,c=t.bordered,i=t.label,s=t.content,u=t.colon,l=r;return c?Object(o.createVNode)(l,{class:[(e={},q(e,"".concat(n,"-item-label"),z(i)),q(e,"".concat(n,"-item-content"),z(s)),e)],colSpan:a},{default:function(){return[z(i)?i:s]}}):Object(o.createVNode)(l,{class:["".concat(n,"-item")],colSpan:a},{default:function(){return[i&&Object(o.createVNode)("span",{class:["".concat(n,"-item-label"),q({},"".concat(n,"-item-no-colon"),!u)]},$(i)?i:{default:function(){return[i]}}),s&&Object(o.createVNode)("span",{class:"".concat(n,"-item-content")},$(s)?s:{default:function(){return[s]}})]}})},Z=function(t){var e=function(t,e,n){var r=e.colon,a=e.prefixCls,c=e.bordered,i=n.component,s=n.type,u=n.showLabel,l=n.showContent;return t.map((function(t,e){var n=Object(N.j)(t),d=n.prefixCls,b=void 0===d?a:d,f=n.span,p=void 0===f?1:f,m=Object(N.g)(t,"label"),g=Object(N.l)(t),h=Object(N.f)(t),O=Object(N.m)(t),v=t.key;return"string"==typeof i?Object(o.createVNode)(L,{key:"".concat(s,"-").concat(v||e),class:h,style:O,span:p,colon:r,component:i,itemPrefixCls:b,bordered:c,label:u?m:null,content:l?g:null},null):[Object(o.createVNode)(L,{key:"label-".concat(v||e),class:h,style:O,span:1,colon:r,component:i[0],itemPrefixCls:b,bordered:c,label:m},null),Object(o.createVNode)(L,{key:"content-".concat(v||e),class:h,style:O,span:2*p-1,component:i[1],itemPrefixCls:b,bordered:c,content:g},null)]}))},n=t.prefixCls,r=t.vertical,a=t.row,c=t.index,i=t.bordered;return r?Object(o.createVNode)(o.Fragment,null,[Object(o.createVNode)("tr",{key:"label-".concat(c),class:"".concat(n,"-row")},[e(a,t,{component:"th",type:"label",showLabel:!0})]),Object(o.createVNode)("tr",{key:"content-".concat(c),class:"".concat(n,"-row")},[e(a,t,{component:"td",type:"content",showContent:!0})])]):Object(o.createVNode)("tr",{key:c,class:"".concat(n,"-row")},[e(a,t,{component:i?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0})])};function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t){return"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!Object(o.isVNode)(t)}d.a.string,d.a.any,d.a.number;var H=Object(o.defineComponent)({name:"ADescriptionsItem",props:{prefixCls:d.a.string,label:d.a.VNodeChild,span:d.a.number.def(1)},render:function(){return null}}),Y={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function J(t,e,n){var o=t;return(void 0===e||e>n)&&(o=Object(m.a)(t,{span:n}),Object(M.a)(void 0===e,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}var U={prefixCls:d.a.string,bordered:d.a.looseBool,size:d.a.oneOf(Object(S.a)("default","middle","small")).def("default"),title:d.a.VNodeChild,extra:d.a.VNodeChild,column:{type:[Number,Object],default:function(){return Y}},layout:d.a.oneOf(Object(S.a)("horizontal","vertical")),colon:d.a.looseBool},G=Object(o.defineComponent)({name:"ADescriptions",Item:H,setup:function(t,e){var n,r=e.slots,a=Object(o.inject)("configProvider",g.b).getPrefixCls,c=Object(o.ref)({});return Object(o.onMounted)((function(){n=A.a.subscribe((function(e){"object"===W(t.column)&&(c.value=e)}))})),Object(o.onBeforeUnmount)((function(){A.a.unsubscribe(n)})),function(){var e,n,i,s,u=t.prefixCls,l=t.column,d=t.size,b=t.bordered,f=void 0!==b&&b,p=t.layout,m=void 0===p?"horizontal":p,g=t.colon,h=void 0===g||g,O=t.title,v=void 0===O?null===(n=r.title)||void 0===n?void 0:n.call(r):O,j=t.extra,y=void 0===j?null===(i=r.extra)||void 0===i?void 0:i.call(r):j,w=a("descriptions",u),C=function(t,e){if("number"==typeof t)return t;if("object"===W(t))for(var n=0;n<A.b.length;n++){var o=A.b[n];if(e[o]&&void 0!==t[o])return t[o]||Y[o]}return 3}(l,c.value),x=function(t,e){var n=Object(N.b)(t),o=[],r=[],a=e;return n.forEach((function(t,c){var i,s=null===(i=t.props)||void 0===i?void 0:i.span,u=s||1;if(c===n.length-1)return r.push(J(t,s,a)),void o.push(r);u<a?(a-=u,r.push(t)):(r.push(J(t,u,a)),o.push(r),a=e,r=[])})),o}(null===(s=r.default)||void 0===s?void 0:s.call(r),C);return Object(o.createVNode)("div",{class:[w,(e={},E(e,"".concat(w,"-").concat(d),"default"!==d),E(e,"".concat(w,"-bordered"),!!f),e)]},[(v||y)&&Object(o.createVNode)("div",{class:"".concat(w,"-header")},[Object(o.createVNode)("div",{class:"".concat(w,"-title")},F(v)?v:{default:function(){return[v]}}),Object(o.createVNode)("div",{class:"".concat(w,"-extra")},F(y)?y:{default:function(){return[y]}})]),Object(o.createVNode)("div",{class:"".concat(w,"-view")},[Object(o.createVNode)("table",null,[Object(o.createVNode)("tbody",null,[x.map((function(t,e){return Object(o.createVNode)(Z,{key:e,index:e,colon:h,prefixCls:w,vertical:"vertical"===m,bordered:f,row:t},null)}))])])])])}}});G.props=U,G.install=function(t){return t.component(G.name,G),t.component(G.Item.name,G.Item),t};var K,Q=G,R=n("f014"),X=n("ba98"),tt=n("8c5e"),et=n("8f4c"),nt=(n("4ec9"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("466d"),n("5319"),n("ddb0"),n("3835")),ot=n("a4ee"),rt=n("a9d9"),at=n("0613"),ct=Object(o.defineComponent)({name:"welcome",components:(K={HuaweiCharge:et.a},Object(l.a)(K,I.name,I),Object(l.a)(K,Q.name,Q),Object(l.a)(K,Q.Item.name,Q.Item),Object(l.a)(K,"SettingOutlined",R.a),Object(l.a)(K,"EditOutlined",X.a),Object(l.a)(K,"EllipsisOutlined",tt.a),K),setup:function(){var t=Object(at.c)().getters.userInfo,e=Object(rt.a)().online,n=Object(ot.a)(),r=n.battery,a=n.batteryStatus,c=n.calcDischargingTime,i=Object(o.ref)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",e=navigator.userAgent.toLowerCase(),n=function(t){return t.test(e)},o=function(t){var n;return null===(n=e.match(t))||void 0===n?void 0:n.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},r=new Map([[n(/windows|win32|win64|wow32|wow64/g),"windows"],[n(/macintosh|macintel/g),"macos"],[n(/x11/g),"linux"],[n(/android|adr/g),"android"],[n(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",a=new Map([["windows",new Map([[n(/windows nt 5.0|windows 2000/g),"2000"],[n(/windows nt 5.1|windows xp/g),"xp"],[n(/windows nt 5.2|windows 2003/g),"2003"],[n(/windows nt 6.0|windows vista/g),"vista"],[n(/windows nt 6.1|windows 7/g),"7"],[n(/windows nt 6.2|windows 8/g),"8"],[n(/windows nt 6.3|windows 8.1/g),"8.1"],[n(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",o(/os x [\d._]+/g)],["android",o(/android [\d._]+/g)],["ios",o(/os [\d._]+/g)]]).get(r)||"unknow",c="unknow";"windows"===r||"macos"===r||"linux"===r?c="desktop":("android"===r||"ios"===r||n(/mobile/g))&&(c="mobile");var i=new Map([[n(/applewebkit/g),["webkit",new Map([[n(/safari/g),"safari"],[n(/chrome/g),"chrome"],[n(/opr/g),"opera"],[n(/edge/g),"edge"]]).get(!0)]||!1],[n(/gecko/g)&&n(/firefox/g),["gecko","firefox"]],[n(/presto/g),["presto","opera"]],[n(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],s=Object(nt.a)(i,2),u=s[0],l=void 0===u?"unknow":u,d=s[1],b=void 0===d?"unknow":d,f=new Map([["webkit",o(/applewebkit\/[\d._]+/g)],["gecko",o(/gecko\/[\d._]+/g)],["presto",o(/presto\/[\d._]+/g)],["trident",o(/trident\/[\d._]+/g)]]).get(l)||"unknow",p=new Map([["firefox",o(/firefox\/[\d._]+/g)],["opera",o(/opr\/[\d._]+/g)],["iexplore",o(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",o(/edge\/[\d._]+/g)],["safari",o(/version\/[\d._]+/g)],["chrome",o(/chrome\/[\d._]+/g)]]).get(b)||"unknow",m=new Map([[n(/micromessenger/g),["wechat",o(/micromessenger\/[\d._]+/g)]],[n(/qqbrowser/g),["qq",o(/qqbrowser\/[\d._]+/g)]],[n(/ucbrowser/g),["uc",o(/ucbrowser\/[\d._]+/g)]],[n(/qihu 360se/g),["360","unknow"]],[n(/2345explorer/g),["2345",o(/2345explorer\/[\d._]+/g)]],[n(/metasr/g),["sougou","unknow"]],[n(/lbbrowser/g),["liebao","unknow"]],[n(/maxthon/g),["maxthon",o(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"],g=Object(nt.a)(m,2),h=g[0],O=void 0===h?"none":h,v=g[1],j=void 0===v?"unknow":v;return{"zh-cn":Object.assign({"内核":l,"内核版本":f,"平台":c,"载体":b,"载体版本":p,"系统":r,"系统版本":a},"none"===O?{}:{"外壳":O,"外壳版本":j}),en:Object.assign({engine:l,engineVs:f,platform:c,supporter:b,supporterVs:p,system:r,systemVs:a},"none"===O?{}:{shell:O,shellVs:j})}[t]}("zh-cn"));return Object(o.watchEffect)((function(){Object.assign(i.value,{"距离电池充满需要":Number.isFinite(r.value.chargingTime)&&0!=r.value.chargingTime?c.value:"未知","剩余可使用时间":Number.isFinite(r.value.dischargingTime)&&0!=r.value.dischargingTime?c.value:"未知","电池状态":a.value,"当前电量":r.value.level+"%"})})),{userInfo:t,browserInfo:i,online:e,battery:r,batteryStatus:a,calcDischargingTime:c}}});n("8cba"),ct.render=u,ct.__scopeId="data-v-64630b3a",e.default=ct}}]);