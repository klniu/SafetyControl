(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointCheck/pointCheck"],{"0927":function(t,e,a){"use strict";a.r(e);var s=a("0ad6"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},"0ad6":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(a("6cfe")),i=a("2f62");function n(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){r(t,e,a[e])})}return t}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var d={computed:c({},(0,i.mapState)(["hasLogin","forcedLogin","userType","userInfo"])),components:{uniDrawer:s.default},data:function(){return{showDrawer:!1}},onLoad:function(){var t={name:"当月未检查",id:"/mobile/xhsdywjclb.do"};this.saveTabInfo("消火栓",t);var e={name:"本周未检查",id:"/mobile/fzzwjclb.do"};this.saveTabInfo("阀组",e);var a={name:"当天未检查",id:"/mobile/jtwjclb.do"};this.saveTabInfo("高位水箱",a),this.saveTabInfo("消防泵",a)},onNavigationBarButtonTap:function(){var t=this;1==t.showDrawer?t.showDrawer=!1:t.showDrawer=!0},methods:{jumpListPage:function(e){this.saveTabInfo("currentLx",e),t.navigateTo({url:"../pointList/uni-tabs"})},jumpPage:function(e){t.showToast({icon:"none",title:"敬请期待～"})},saveTabInfo:function(e,a){t.setStorage({key:e,data:a,success:function(){console.log("保存成功")}})}}};e.default=d}).call(this,a("649d")["default"])},"2dc8":function(t,e,a){},"30eb":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"part2"},[1!=t.userType?a("swiper",{staticClass:"banner-box",attrs:{"indicator-dots":"",autoplay:"","indicator-active-color":"#169bd5",circular:"",interval:5e3,duration:300,"indicator-color":"rgba(0,0,0,.3)"}},[a("swiper-item",{attrs:{mpcomid:"10bbdf1a-0"}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])],1):t._e(),1==t.userType?a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("数据统计")]),a("text",{staticClass:"titleSubText_pc"},[t._v("查看更多")])]):t._e(),1==t.userType?a("view",{staticClass:"topView_pc",attrs:{eventid:"10bbdf1a-0"},on:{tap:function(e){t.getCount("正在获取统计数据")}}},[t._m(0),t._m(1),t._m(2)]):t._e(),t._m(3),a("view",{staticClass:"menuBlockView"},[a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-1"},on:{tap:function(e){t.jumpListPage("所有记录")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_all.png",mode:"widthFix"}}),t._m(4)]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-2"},on:{tap:function(e){t.jumpListPage("消火栓")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xhs.png",mode:"widthFix"}}),t._m(5)]),1==t.userType?a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-3"},on:{tap:function(e){t.jumpListPage("阀组")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_fz.png",mode:"widthFix"}}),t._m(6)]):t._e(),1==t.userType?a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-4"},on:{tap:function(e){t.jumpListPage("高位水箱")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_sx.png",mode:"widthFix"}}),t._m(7)]):t._e(),1==t.userType?a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-5"},on:{tap:function(e){t.jumpListPage("消防泵")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xfb.png",mode:"widthFix"}}),t._m(8)]):t._e(),a("view",{staticClass:"dangerView"})]),1==t.userType?a("block",[a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("隐患排查")])]),a("view",{staticClass:"menuBlockView"},[a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-6"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yhsb.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("隐患上报")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-7"},on:{tap:function(e){t.jumpPage("../danger/dangerList")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/yhsp.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("隐患审批")])])]),a("view",{staticClass:"dangerView"})]),a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("事故管理")])]),a("view",{staticClass:"menuBlockView"},[a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-8"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/sgkb.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("事故快报")])])]),a("view",{staticClass:"dangerView"}),a("view",{staticClass:"dangerView"})]),a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("作业管理")])]),a("view",{staticClass:"menuBlockView"},[a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-9"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zyfxpg.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("作业风险评估")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-10"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zysp.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("作业审批")])])]),a("view",{staticClass:"dangerView"})]),a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("安全培训")])]),a("view",{staticClass:"menuBlockView"},[a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-11"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxzl.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("培训资料")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-12"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zxks.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("在线考试")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-13"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxjh.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("培训计划")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-14"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/pxkc.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("培训课程")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-15"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/zwcs.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("自我测试")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-16"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/tyks.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("统一考试")])])])]),a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("法律法规")])]),a("view",{staticClass:"menuBlockView"},[a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-17"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/fgqd.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("法规清单")])])]),a("view",{staticClass:"dangerView"}),a("view",{staticClass:"dangerView"})]),a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("环保管理")])]),a("view",{staticClass:"menuBlockView"},[a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-18"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/sfpf.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("三废排放")])])]),a("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-19"},on:{tap:function(e){t.jumpPage("../danger/addDanger")}}},[a("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/jcjl.png",mode:"widthFix"}}),a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("监测记录")])])]),a("view",{staticClass:"dangerView"})])]):t._e()],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"topItemView"},[a("text",{staticClass:"topTextTitle"},[t._v("隐患总数")]),a("text",{staticClass:"topTextNum"},[t._v("1005")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"topItemView"},[a("text",{staticClass:"topTextTitle"},[t._v("事故总数")]),a("text",{staticClass:"topTextNum"},[t._v("600")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"topItemView"},[a("text",{staticClass:"topTextTitle"},[t._v("检查次数")]),a("text",{staticClass:"topTextNum"},[t._v("2000")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"titleView_pc"},[a("text",{staticClass:"titleText_pc"},[t._v("检查管理")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("所有记录")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("消火栓")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("阀组")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("高位水箱")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"subView"},[a("text",{staticClass:"dangerText"},[t._v("消防泵")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},a36f:function(t,e,a){"use strict";var s=a("2dc8"),i=a.n(s);i.a},ab69:function(t,e,a){"use strict";a.r(e);var s=a("30eb"),i=a("0927");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("a36f");var c=a("2877"),r=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);r.options.__file="pointCheck.vue",e["default"]=r.exports},be2a:function(t,e,a){"use strict";a("de83");var s=n(a("b0ce")),i=n(a("ab69"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))}},[["be2a","common/runtime","common/vendor"]]]);