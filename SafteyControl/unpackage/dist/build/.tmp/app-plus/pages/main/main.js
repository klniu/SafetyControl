(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"0071":function(t,e,n){"use strict";n("de83");var s=a(n("b0ce")),i=a(n("e02f"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},5822:function(t,e,n){"use strict";n.r(e);var s=n("f1c0"),i=n.n(s);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);e["default"]=i.a},9660:function(t,e,n){},"9b87":function(t,e,n){"use strict";var s=n("9660"),i=n.n(s);i.a},e02f:function(t,e,n){"use strict";n.r(e);var s=n("f7f1"),i=n("5822");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("9b87");var o=n("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},f1c0:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(n("59a9")),i=c(n("17f7")),a=c(n("3731")),o=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={computed:(0,o.mapState)(["forcedLogin","hasLogin","userType","userInfo"]),data:function(){return{bzwjcsl:"正在读取...",dthjs:"正在读取...",dywjcsl:"正在读取..."}},methods:r({},(0,o.mapMutations)(["login"]),{openScan:function(){var e=this;t.scanCode({success:function(n){var s={userid:e.userInfo.userid,dwbh:n.result};a.default.requestLoading(i.default.scan,s,"正在加载",function(e){t.navigateTo({url:"../pointAdd/pointAdd?obj="+JSON.stringify(e)})},function(){t.showToast({icon:"none",title:"请求失败"})},function(){})}})},openCharts:function(){t.navigateTo({url:"../mpvue-echarts/chartList"})},getCount:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this,n={userid:e.userInfo.userid};a.default.requestLoading(i.default.getMainPageCount,n,t,function(t){console.log(""+JSON.stringify(t)),e.bzwjcsl=t.bzwjcsl,e.dthjs=t.dthjs,e.dywjcsl=t.dywjcsl},function(){e.bzwjcsl="获取失败，点击重新获取",e.dthjs="获取失败，点击重新获取",e.dywjcsl="获取失败，点击重新获取"},function(){})}}),onShow:function(){var e=this;this.login(s.default.getUsers()),this.hasLogin?1==this.userType&&this.getCount():t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(n){n.confirm&&(e.forcedLogin?t.reLaunch({url:"../login/login"}):t.navigateTo({url:"../login/login"}))}})}};e.default=l}).call(this,n("649d")["default"])},f7f1:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"baseView"},[1==t.userType?n("view",{staticClass:"topView",attrs:{eventid:"00cb397a-0"},on:{tap:function(e){t.getCount("正在获取统计数据")}}},[n("view",{staticClass:"topItemView"},[n("text",{staticClass:"topTextTitle"},[t._v("阀组本周未检")]),n("text",{staticClass:"topTextNum"},[t._v(t._s(t.bzwjcsl))])]),n("view",{staticClass:"topItemView"},[n("text",{staticClass:"topTextTitle"},[t._v("当天火警")]),n("text",{staticClass:"topTextNum"},[t._v(t._s(t.dthjs))])]),n("view",{staticClass:"topItemView"},[n("text",{staticClass:"topTextTitle"},[t._v("已整改")]),n("text",{staticClass:"topTextNum"},[t._v(t._s(t.dywjcsl))])])]):t._e(),1!=t.userType?n("swiper",{staticClass:"banner-box",attrs:{"indicator-dots":"",autoplay:"","indicator-active-color":"#169bd5",circular:"",interval:5e3,duration:300,"indicator-color":"rgba(0,0,0,.3)"}},[n("swiper-item",{attrs:{mpcomid:"00cb397a-0"}},[n("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])],1):t._e(),n("view",{staticClass:"middleView"},[n("view",{staticClass:"btnView",attrs:{eventid:"00cb397a-1"},on:{tap:function(e){t.openScan()}}},[n("image",{staticClass:"btnImage",attrs:{src:"../../static/img/scan.png"}}),n("text",{staticClass:"btnText"},[t._v("添加检查")])]),1==t.userType?n("view",{staticClass:"vLine"}):t._e(),1==t.userType?n("view",{staticClass:"btnView",attrs:{eventid:"00cb397a-2"},on:{tap:function(e){t.openCharts()}}},[n("image",{staticClass:"btnImage",attrs:{src:"../../static/img/chart.png"}}),n("text",{staticClass:"btnText"},[t._v("数据统计")])]):t._e()]),n("view",{staticClass:"hLine"})],1)},i=[];n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i})}},[["0071","common/runtime","common/vendor"]]]);