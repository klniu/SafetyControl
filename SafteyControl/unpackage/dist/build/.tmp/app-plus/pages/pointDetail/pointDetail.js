(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointDetail/pointDetail"],{"1f55":function(t,e,i){},"39fd":function(t,e,i){"use strict";i.r(e);var n=i("ed6e"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=o.a},"77a6":function(t,e,i){"use strict";var n=i("1f55"),o=i.n(n);o.a},9513:function(t,e,i){"use strict";i("de83");var n=s(i("b0ce")),o=s(i("d353"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},d353:function(t,e,i){"use strict";i.r(e);var n=i("f9d1"),o=i("39fd");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("77a6");var l=i("2877"),a=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a.options.__file="pointDetail.vue",e["default"]=a.exports},ed6e:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("7c03")),o=r(i("ba08")),s=r(i("4b9c")),l=r(i("17f7")),a=r(i("3731")),c=r(i("59a9")),u=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}var d={computed:(0,u.mapState)(["sublistItem","sublistIndex","userInfo"]),components:{uniList:n.default,uniListItem:s.default,uniIcon:o.default},data:function(){return{needGetItemOnShow:!1,obj:"",normal:{color:"#24BE41",size:"22",type:"checkbox-filled"},undetected:{color:"#FFDE52",size:"22",type:"info-filled"},abnormal:{color:"#C11E1E",size:"22",type:"clear"}}},onLoad:function(t){this.obj=JSON.parse(t.obj)},onNavigationBarButtonTap:function(){var e=this;t.showModal({title:"提示",content:"确认要设置所有的检查点都正常吗？",success:function(t){if(t.confirm)for(var i=0;i<e.obj.sublist.length;i++){var n=e.obj.sublist[i];n["jcjl"]="正常",n["jcwtms"]="",n["zgfs"]=""}else t.cancel}})},onShow:function(){1==this.needGetItemOnShow&&null!=this.sublistIndex&&null!=this.sublistItem&&(console.log(""+JSON.stringify(this.sublistItem)),this.obj.sublist[this.sublistIndex]=this.sublistItem),this.needGetItemOnShow=!1},methods:{bindDateChange:function(t){this.obj.jcrq=t.target.value},jumpEdit:function(t,e){},getIcon:function(t){return"正常"==t.jcjl?this.normal:"异常"==t.jcjl?this.abnormal:this.undetected},submit:function(){var e=this,i=c.default.copyObj(e.obj);i["userid"]=e.userInfo.userid,i["sublist"]=JSON.stringify(i["sublist"]),a.default.requestLoading(l.default.UpdatePoint,i,"正在加载",function(e){t.showToast({icon:"none",title:"新建检查成功",duration:2e3,complete:function(){t.navigateBack({delta:1})}})},function(){t.showToast({icon:"none",title:"新建检查失败"})},function(){})}}};e.default=d}).call(this,i("649d")["default"])},f9d1:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[t._m(0),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"21b694de-6"}},[i("uni-list-item",{attrs:{title:"点位编号",subnote:t.obj.dwbh,"show-arrow":"false","show-badge":"true",mpcomid:"21b694de-0"}}),i("uni-list-item",{attrs:{title:"检查人",subnote:t.obj.zrrmc,"show-arrow":"false",mpcomid:"21b694de-1"}}),i("picker",{attrs:{mode:"date",value:t.obj.jcrq,eventid:"21b694de-0"},on:{change:t.bindDateChange}},[i("uni-list-item",{attrs:{title:"检查日期",subnote:t.obj.jcrq,mpcomid:"21b694de-2"}})],1),i("uni-list-item",{attrs:{title:"责任部门",subnote:t.obj.zrbm,"show-arrow":"false",mpcomid:"21b694de-3"}}),i("uni-list-item",{attrs:{title:"楼层",subnote:t.obj.lc,"show-arrow":"false",mpcomid:"21b694de-4"}}),i("uni-list-item",{attrs:{title:"位置",subnote:t.obj.wz,"show-arrow":"false",mpcomid:"21b694de-5"}})],1)],1),i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("检查信息")]),i("text",{staticClass:"cellTitle"},[t._v("正常-")]),i("uni-icon",{attrs:{type:"checkbox-filled",size:"22",color:"#24BE41",mpcomid:"21b694de-7"}}),i("text",{staticClass:"cellTitle"},[t._v("未检-")]),i("uni-icon",{attrs:{type:"info-filled",size:"22",color:"#FFDE52",mpcomid:"21b694de-8"}}),i("text",{staticClass:"cellTitle"},[t._v("异常-")]),i("uni-icon",{attrs:{type:"clear",size:"22",color:"#C11E1E",mpcomid:"21b694de-9"}})],1),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"21b694de-11"}},t._l(t.obj.sublist,function(e,n){return i("uni-list-item",{key:n,attrs:{title:e.jcbz,note:e.jcwtms,"show-extra-icon":"true","extra-icon":t.getIcon(e),eventid:"21b694de-1-"+n,mpcomid:"21b694de-10-"+n},on:{click:function(i){t.jumpEdit(e,n)}}})}))],1),i("view",{staticClass:"btn-row"})])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("基础信息")])])}];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})}},[["9513","common/runtime","common/vendor"]]]);