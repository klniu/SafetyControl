(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointCheck/pointCheck"],{"0927":function(t,a,e){"use strict";e.r(a);var i=e("0ad6"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=s.a},"0ad6":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=s(e("6cfe"));function s(t){return t&&t.__esModule?t:{default:t}}var n={components:{uniDrawer:i.default},data:function(){return{showDrawer:!1}},onLoad:function(){var t={name:"当月未检查",id:"/mobile/xhsdywjclb.do"};this.saveTabInfo("消火栓",t);var a={name:"本周未检查",id:"/mobile/fzzwjclb.do"};this.saveTabInfo("阀组",a);var e={name:"当天未检查",id:"/mobile/jtwjclb.do"};this.saveTabInfo("高位水箱",e),this.saveTabInfo("消防泵",e)},onNavigationBarButtonTap:function(){var t=this;1==t.showDrawer?t.showDrawer=!1:t.showDrawer=!0},methods:{jumpListPage:function(a){this.saveTabInfo("currentLx",a),t.navigateTo({url:"../pointList/uni-tabs"})},saveTabInfo:function(a,e){t.setStorage({key:a,data:e,success:function(){console.log("保存成功")}})}}};a.default=n}).call(this,e("649d")["default"])},"2dc8":function(t,a,e){},a2d8:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"part2"},[e("swiper",{staticClass:"banner-box",attrs:{"indicator-dots":"",autoplay:"","indicator-active-color":"#169bd5",circular:"",interval:5e3,duration:300,"indicator-color":"rgba(0,0,0,.3)"}},[e("swiper-item",{attrs:{mpcomid:"10bbdf1a-0"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})]),e("swiper-item",{attrs:{mpcomid:"10bbdf1a-1"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})]),e("swiper-item",{attrs:{mpcomid:"10bbdf1a-2"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})]),e("swiper-item",{attrs:{mpcomid:"10bbdf1a-3"}},[e("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])],1),e("view",{staticClass:"userinfo"},[e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-0"},on:{tap:function(a){t.jumpListPage("所有记录")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_all.png",mode:"widthFix"}}),t._m(0)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-1"},on:{tap:function(a){t.jumpListPage("消火栓")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xhs.png",mode:"widthFix"}}),t._m(1)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-2"},on:{tap:function(a){t.jumpListPage("阀组")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_fz.png",mode:"widthFix"}}),t._m(2)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-3"},on:{tap:function(a){t.jumpListPage("高位水箱")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_sx.png",mode:"widthFix"}}),t._m(3)]),e("view",{staticClass:"dangerView",attrs:{eventid:"10bbdf1a-4"},on:{tap:function(a){t.jumpListPage("消防泵")}}},[e("image",{staticClass:"dangerIcon",attrs:{src:"../../static/img/point_xfb.png",mode:"widthFix"}}),t._m(4)]),e("view",{staticClass:"dangerView"})]),e("uni-drawer",{attrs:{visible:t.showDrawer,mpcomid:"10bbdf1a-4"}},[e("view",{staticStyle:{padding:"30rpx"}},[e("view",{staticClass:"uni-title"},[t._v("抽屉式导航")])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("所有记录")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("消火栓")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("阀组")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("高位水箱")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"subView"},[e("text",{staticClass:"dangerText"},[t._v("消防泵")])])}];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return s})},a36f:function(t,a,e){"use strict";var i=e("2dc8"),s=e.n(i);s.a},ab69:function(t,a,e){"use strict";e.r(a);var i=e("a2d8"),s=e("0927");for(var n in s)"default"!==n&&function(t){e.d(a,t,function(){return s[t]})}(n);e("a36f");var r=e("2877"),c=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,null,null);c.options.__file="pointCheck.vue",a["default"]=c.exports},be2a:function(t,a,e){"use strict";e("de83");var i=n(e("b0ce")),s=n(e("ab69"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))}},[["be2a","common/runtime","common/vendor"]]]);