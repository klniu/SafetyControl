(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pointAdd/pointAdd"],{"13cb":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[t._m(0),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"7be27b0c-6"}},[i("uni-list-item",{attrs:{title:"点位编号",subnote:t.obj.dwbh,"show-arrow":"false","show-badge":"true",mpcomid:"7be27b0c-0"}}),i("uni-list-item",{attrs:{title:"检查人",subnote:t.obj.zrrmc,"show-arrow":"false",mpcomid:"7be27b0c-1"}}),i("picker",{attrs:{mode:"date",value:t.obj.jcrq,eventid:"7be27b0c-0"},on:{change:t.bindDateChange}},[i("uni-list-item",{attrs:{title:"检查日期",subnote:t.obj.jcrq,mpcomid:"7be27b0c-2"}})],1),i("uni-list-item",{attrs:{title:"责任部门",subnote:t.obj.zrbm,"show-arrow":"false",mpcomid:"7be27b0c-3"}}),i("uni-list-item",{attrs:{title:"楼层",subnote:t.obj.lc,"show-arrow":"false",mpcomid:"7be27b0c-4"}}),i("uni-list-item",{attrs:{title:"位置",subnote:t.obj.wz,"show-arrow":"false",mpcomid:"7be27b0c-5"}})],1)],1),i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("检查信息")]),i("text",{staticClass:"cellTitle"},[t._v("正常-")]),i("uni-icon",{attrs:{type:"checkbox-filled",size:"22",color:"#24BE41",mpcomid:"7be27b0c-7"}}),i("text",{staticClass:"cellTitle"},[t._v("未检-")]),i("uni-icon",{attrs:{type:"info-filled",size:"22",color:"#FFDE52",mpcomid:"7be27b0c-8"}}),i("text",{staticClass:"cellTitle"},[t._v("异常-")]),i("uni-icon",{attrs:{type:"clear",size:"22",color:"#C11E1E",mpcomid:"7be27b0c-9"}})],1),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"7be27b0c-11"}},t._l(t.obj.sublist,function(e,s){return i("uni-list-item",{key:s,attrs:{title:e.jcbz,note:e.jcwtms,"show-extra-icon":"true","show-arrow":t.editable,"extra-icon":t.getIcon(e),eventid:"7be27b0c-1-"+s,mpcomid:"7be27b0c-10-"+s},on:{click:function(i){t.jumpEdit(e,s)}}})}))],1),i("view",{staticClass:"btnView"},[t.showSave?i("button",{staticClass:"saveBtn",attrs:{eventid:"7be27b0c-2"},on:{tap:t.saveClick}},[t._v("保存")]):t._e(),t.showClose?i("button",{staticClass:"closeBtn",attrs:{eventid:"7be27b0c-3"},on:{tap:t.closeClick}},[t._v("关单")]):t._e()],1)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("基础信息")])])}];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return o})},"16c2":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(i("7c03")),o=r(i("ba08")),n=r(i("4b9c")),l=r(i("17f7")),c=r(i("3731")),a=r(i("59a9")),u=i("2f62");function r(t){return t&&t.__esModule?t:{default:t}}var b={computed:(0,u.mapState)(["sublistItem","sublistIndex","userInfo"]),components:{uniList:s.default,uniListItem:n.default,uniIcon:o.default},data:function(){return{needGetItemOnShow:!1,showClose:!1,showSave:!1,editable:!1,obj:"",normal:{color:"#24BE41",size:"22",type:"checkbox-filled"},undetected:{color:"#FFDE52",size:"22",type:"info-filled"},abnormal:{color:"#C11E1E",size:"22",type:"clear"}}},onLoad:function(t){this.obj=JSON.parse(t.obj),this.checkShowClose()},onNavigationBarButtonTap:function(){var e=this;0!=e.editable?t.showModal({title:"提示",content:"确认要设置所有的检查点都正常吗？",success:function(t){if(t.confirm)for(var i=0;i<e.obj.sublist.length;i++){var s=e.obj.sublist[i];s["jcjl"]="正常",s["jcwtms"]="",s["zgfs"]=""}else t.cancel}}):t.showToast({icon:"none",title:"已关单 无法编辑",duration:1e3})},onShow:function(){1==this.needGetItemOnShow&&null!=this.sublistIndex&&null!=this.sublistItem&&(console.log(""+JSON.stringify(this.sublistItem)),this.obj.sublist[this.sublistIndex]=this.sublistItem),this.needGetItemOnShow=!1},methods:{bindDateChange:function(t){this.obj.jcrq=t.target.value},jumpEdit:function(e,i){0!=this.editable&&(this.needGetItemOnShow=!0,t.navigateTo({url:"./pointCheckInfo?item="+JSON.stringify(e)+"&index="+i}))},getIcon:function(t){return"正常"==t.jcjl?this.normal:"异常"==t.jcjl?this.abnormal:this.undetected},saveClick:function(){var e=this,i=a.default.copyObj(e.obj);i["userid"]=e.userInfo.userid,i["sublist"]=JSON.stringify(i["sublist"]),c.default.requestLoading(l.default.UpdatePoint,i,"正在加载",function(i){t.showToast({icon:"none",title:"保存成功",duration:1e3}),e.obj.id=i.id,e.checkShowClose()},function(){t.showToast({icon:"none",title:"保存失败"})},function(){})},closeClick:function(){var e=this,i=a.default.copyObj(e.obj);i["userid"]=e.userInfo.userid,i["sublist"]=JSON.stringify(i["sublist"]),i["status"]="2",c.default.requestLoading(l.default.UpdatePoint,i,"正在加载",function(i){t.showToast({icon:"none",title:"关单成功",duration:1e3}),e.obj.status=i.status,e.obj.id=i.id,e.checkShowClose()},function(){t.showToast({icon:"none",title:"关单失败"})},function(){})},checkShowClose:function(){"1"==this.obj.status&&null!=this.obj.id&&""!=this.obj.id?this.showClose=!0:this.showClose=!1,"2"==this.obj.status?(this.showSave=!1,this.editable=!1):(this.showSave=!0,this.editable=!0)}}};e.default=b}).call(this,i("649d")["default"])},"7d51":function(t,e,i){"use strict";i("de83");var s=n(i("b0ce")),o=n(i("e51e"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(o.default))},"7f6f":function(t,e,i){"use strict";var s=i("c07b"),o=i.n(s);o.a},bafa:function(t,e,i){"use strict";i.r(e);var s=i("16c2"),o=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=o.a},c07b:function(t,e,i){},e51e:function(t,e,i){"use strict";i.r(e);var s=i("13cb"),o=i("bafa");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("7f6f");var l=i("2877"),c=Object(l["a"])(o["default"],s["a"],s["b"],!1,null,null,null);c.options.__file="pointAdd.vue",e["default"]=c.exports}},[["7d51","common/runtime","common/vendor"]]]);