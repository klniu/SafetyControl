(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointList/pointList"],{"0319":function(t,e,a){},"0d0f":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"baseView",attrs:{eventid:"58792338-12"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.moveHandle(e)}}},[a("view",{staticClass:"tabView"},t._l(t.tabBars,function(e,i){return a("view",{key:i,staticClass:"tabItemView",style:{color:i==t.tabIndex?"#2D68AA":"#898989"},attrs:{eventid:"58792338-0-"+i},on:{tap:function(e){t.changeTab(i)}}},[t._v(t._s(e.name))])})),a("view",{staticClass:"rowLine"}),a("scroll-view",{staticClass:"scrollView",attrs:{"scroll-y":"true",eventid:"58792338-11"},on:{scroll:t.isScrolling}},[a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-1"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-0-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-2"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-1-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-3"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-2-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-4"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-3-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-5"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-4-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-6"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-5-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-7"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-6-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-8"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-7-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-9"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-8-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("swiper",{staticClass:"tableView",attrs:{"indicator-dots":"",eventid:"58792338-10"},on:{change:t.swiperChange}},t._l(t.newsitems,function(t,e){return a("swiper-item",{key:e,attrs:{mpcomid:"58792338-9-"+e}},[a("image",{staticClass:"banner-image",attrs:{src:"../../static/img/fgBG.png",mode:"aspectFill","lazy-load":""}})])})),a("uni-drawer",{attrs:{visible:t.showDrawer,mpcomid:"58792338-10"}},[a("view",{staticStyle:{padding:"30rpx"}},[a("view",{staticClass:"uni-title"},[t._v("抽屉式导航")])])])],1)],1)},s=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return s})},"44ed":function(t,e,a){"use strict";a("de83");var i=n(a("b0ce")),s=n(a("de09"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},8370:function(t,e,a){"use strict";a.r(e);var i=a("a88b"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a},a88b:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("6cfe")),s=(r(a("59a9")),r(a("17f7"))),n=r(a("3731"));function r(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniDrawer:i.default},data:function(){return{userid:"",pageRows:15,lx:"点位检查",refreshing:!1,refreshText:"下拉可以刷新",tabIndex:0,tabType:0,newsitems:[],showDrawer:!1,tabBars:[{name:"待整改",id:"/mobile/dzglb.do"},{name:"已完成",id:"/mobile/ywclb.do"},{name:"未检查",id:"/mobile/wjclb.do"}]}},onLoad:function(e){console.log("新建pointList");var a=this;a.lx=e.lx,t.setNavigationBarTitle({title:a.lx}),t.getStorage({key:"userInfo",success:function(e){console.log(""+JSON.stringify(e.data.userid)),a.userid=e.data.userid,a.newsitems=a.randomfn(),t.getStorage({key:a.lx,success:function(t){a.tabBars.push(t.data)},complete:function(){a.getTabCounts()}})}})},onUnload:function(){console.log("销毁pointList")},onNavigationBarButtonTap:function(){var t=this;1==t.showDrawer?t.showDrawer=!1:t.showDrawer=!0},methods:{isScrolling:function(t){console.log("正在滚动....")},randomfn:function(){for(var t=[],e=0,a=this.tabBars.length;e<a;e++){var i={loadingText:"加载更多...",data:[],pageNum:1};t.push(i)}return t},changeTab:function(t){console.log("Tab页切换"+t),this.tabIndex=t},getTabCounts:function(){var e=this;n.default.requestLoading(s.default.getTabCounts,{lx:e.lx,userid:e.userid},"正在加载",function(t){console.log("Tab页数量："+JSON.stringify(t));for(var a=0;a<e.tabBars.length;a++){var i=e.tabBars[a];"待整改"==i.name?i.name="待整改("+t.dzgsl+")":"已完成"==i.name?i.name="已完成("+t.ywcsl+")":"未检查"==i.name?i.name="未检查("+t.wjcsl+")":"当月未检查"==i.name?i.name="当月未检查("+t.dywjcsl+")":"本周未检查"==i.name?i.name="本周未检查("+t.bzwjcsl+")":"当天未检查"==i.name&&(i.name="当天未检查("+t.dtwjcsl+")")}},function(){t.showToast({icon:"none",title:"请求失败"})},function(){})},swiperChange:function(t){this.tabIndex=t.detail.current},moveHandle:function(t){}}};e.default=o}).call(this,a("649d")["default"])},d1dd:function(t,e,a){"use strict";var i=a("0319"),s=a.n(i);s.a},de09:function(t,e,a){"use strict";a.r(e);var i=a("0d0f"),s=a("8370");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("d1dd");var r=a("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,null,null);o.options.__file="pointList.vue",e["default"]=o.exports}},[["44ed","common/runtime","common/vendor"]]]);