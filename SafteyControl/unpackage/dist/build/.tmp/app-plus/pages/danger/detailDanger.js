(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/danger/detailDanger"],{1490:function(t,e,i){"use strict";i.r(e);var a=i("9d89"),s=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,function(){return a[t]})}(l);e["default"]=s.a},1965:function(t,e,i){"use strict";i("de83");var a=l(i("b0ce")),s=l(i("d4a9"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},2533:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[t._m(0),i("view",{staticClass:"cellInfoView"},[i("uni-list",{attrs:{mpcomid:"77f549ab-7"}},[i("uni-list-item",{attrs:{title:"发现人",subnote:t.fqr,"show-arrow":"false",mpcomid:"77f549ab-0"}}),i("uni-list-item",{attrs:{title:"责任部门",subnote:t.zrbm,"show-arrow":"false",mpcomid:"77f549ab-1"}}),i("uni-list-item",{attrs:{title:"隐患级别",subnote:t.yhdj,"show-arrow":"false",mpcomid:"77f549ab-2"}}),i("uni-list-item",{attrs:{title:"隐患后果",subnote:t.yhhg,"show-arrow":"false",mpcomid:"77f549ab-3"}}),i("uni-list-item",{attrs:{title:"不合格因素",subnote:t.bhgys,"show-arrow":"false",mpcomid:"77f549ab-4"}}),i("uni-list-item",{attrs:{title:"对应条款",subnote:t.wfflfgjtk,"show-arrow":"false",mpcomid:"77f549ab-5"}}),i("uni-list-item",{attrs:{title:"整改要求及建议",subnote:t.gsyqjjy,"show-arrow":"false",mpcomid:"77f549ab-6"}})],1),i("view",{staticClass:"imageBaseView"},[i("view",{staticClass:"cellSubViewRow"},[i("text",{staticClass:"leftTextRow"},[t._v("隐患照片")]),i("text",{staticClass:"rightTextRow"},[t._v(t._s(t.imageList.length))])]),i("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.imageList,function(e,a){return i("block",{key:a},[i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[i("image",{staticClass:"littleImage",attrs:{id:a,src:e.src,mode:"aspectFit",eventid:"77f549ab-0-"+a},on:{click:t.viewPhoto}}),i("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/img/delete.png",id:a,mode:"aspectFit",eventid:"77f549ab-1-"+a},on:{click:function(i){t.deleteImage(e,a)}}})])])}),i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"77f549ab-2"},on:{click:t.addPhoto}},[i("image",{staticClass:"littleImage",attrs:{src:"../../static/img/addImage.png"}})])],2)])],1),i("view",{staticClass:"cellTitleView",attrs:{hidden:t.spReadFlag}},[i("text",{staticClass:"cellTitle"},[t._v("审批信息")])]),i("view",{staticClass:"cellInfoView",attrs:{hidden:t.spReadFlag}},[i("uni-list",{attrs:{mpcomid:"77f549ab-12"}},[i("uni-list-item",{attrs:{title:"填报人",subnote:t.tbr,"show-arrow":"false",mpcomid:"77f549ab-8"}}),i("picker",{attrs:{mode:"date",value:t.zgqx,eventid:"77f549ab-3"},on:{change:t.bindDateZgqx}},[i("uni-list-item",{attrs:{title:"整改期限",subnote:t.zgqx,"show-arrow":t.spFlag,mpcomid:"77f549ab-9"}})],1),i("picker",{attrs:{mode:"date",value:t.txrq,eventid:"77f549ab-4"},on:{change:t.bindDateTxrq}},[i("uni-list-item",{attrs:{title:"填写日期",subnote:t.txrq,"show-arrow":t.spFlag,mpcomid:"77f549ab-10"}})],1),i("uni-list-item",{attrs:{title:"整改意见",subnote:t.zgyj,"show-arrow":t.spFlag,eventid:"77f549ab-5",mpcomid:"77f549ab-11"},on:{click:t.selectedzgyj}})],1)],1),i("view",{staticClass:"cellTitleView",attrs:{hidden:t.zgReadFlag}},[i("text",{staticClass:"cellTitle"},[t._v("整改信息")])]),i("view",{staticClass:"cellInfoView",attrs:{hidden:t.zgReadFlag}},[i("uni-list",{attrs:{mpcomid:"77f549ab-18"}},[i("uni-list-item",{attrs:{title:"整改人",subnote:t.zgr,"show-arrow":"false",mpcomid:"77f549ab-13"}}),i("picker",{attrs:{mode:"date",value:t.zgwcrq,eventid:"77f549ab-6"},on:{change:t.bindDateZgwcrq}},[i("uni-list-item",{attrs:{title:"整改完成日期",subnote:t.zgwcrq,"show-arrow":t.zgFlag,mpcomid:"77f549ab-14"}})],1),i("picker",{attrs:{mode:"date",value:t.tbrq,eventid:"77f549ab-7"},on:{change:t.bindDateTbrq}},[i("uni-list-item",{attrs:{title:"填报日期",subnote:t.tbrq,"show-arrow":t.zgFlag,mpcomid:"77f549ab-15"}})],1),i("uni-list-item",{attrs:{title:"治理资金",subnote:t.zlzj,"show-arrow":t.zgFlag,eventid:"77f549ab-8",mpcomid:"77f549ab-16"},on:{click:t.selectedzlzj}}),i("uni-list-item",{attrs:{title:"整改情况",subnote:t.zgqk,"show-arrow":t.zgFlag,eventid:"77f549ab-9",mpcomid:"77f549ab-17"},on:{click:t.selectedzgqk}})],1),i("view",{staticClass:"imageBaseView"},[i("view",{staticClass:"cellSubViewRow"},[i("text",{staticClass:"leftTextRow"},[t._v("隐患整改附件")]),i("text",{staticClass:"rightTextRow"},[t._v(t._s(t.imageList2.length))])]),i("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.imageList2,function(e,a){return i("block",{key:a},[i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[i("image",{staticClass:"littleImage",attrs:{id:a,src:e.src,mode:"aspectFit",eventid:"77f549ab-10-"+a},on:{click:t.viewPhoto}}),i("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/img/delete.png",id:a,mode:"aspectFit",eventid:"77f549ab-11-"+a},on:{click:function(i){t.deleteImage(e,a)}}})])])}),i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"77f549ab-12"},on:{click:t.addPhoto}},[i("image",{staticClass:"littleImage",attrs:{src:"../../static/img/addImage.png"}})])],2)])],1),i("view",{staticClass:"cellTitleView",attrs:{hidden:t.yzReadFlag}},[i("text",{staticClass:"cellTitle"},[t._v("复核信息")])]),i("view",{staticClass:"cellInfoView",attrs:{hidden:t.yzReadFlag}},[i("uni-list",{attrs:{mpcomid:"77f549ab-23"}},[i("uni-list-item",{attrs:{title:"验证人",subnote:t.yzr,"show-arrow":"false",mpcomid:"77f549ab-19"}}),i("picker",{attrs:{mode:"date",value:t.tbrq2,eventid:"77f549ab-13"},on:{change:t.bindDateTbrq2}},[i("uni-list-item",{attrs:{title:"填报日期",subnote:t.tbrq2,"show-arrow":t.yzFlag,mpcomid:"77f549ab-20"}})],1),i("uni-list-item",{attrs:{title:"原因分析",subnote:t.yyfx,"show-arrow":t.yzFlag,eventid:"77f549ab-14",mpcomid:"77f549ab-21"},on:{click:t.selectedyyfx}}),i("uni-list-item",{attrs:{title:"验证情况",subnote:t.yzqk,"show-arrow":t.yzFlag,eventid:"77f549ab-15",mpcomid:"77f549ab-22"},on:{click:t.selectedyzqk}})],1),i("view",{staticClass:"imageBaseView"},[i("view",{staticClass:"cellSubViewRow"},[i("text",{staticClass:"leftTextRow"},[t._v("复核附件")]),i("text",{staticClass:"rightTextRow"},[t._v(t._s(t.imageList3.length))])]),i("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.imageList3,function(e,a){return i("block",{key:a},[i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[i("image",{staticClass:"littleImage",attrs:{id:a,src:e.src,mode:"aspectFit",eventid:"77f549ab-16-"+a},on:{click:t.viewPhoto}}),i("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/img/delete.png",id:a,mode:"aspectFit",eventid:"77f549ab-17-"+a},on:{click:function(i){t.deleteImage(e,a)}}})])])}),i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"77f549ab-18"},on:{click:t.addPhoto}},[i("image",{staticClass:"littleImage",attrs:{src:"../../static/img/addImage.png"}})])],2)])],1),i("view",{staticClass:"cellInfoView",attrs:{hidden:t.nodeFlag}},[i("uni-list",{attrs:{mpcomid:"77f549ab-25"}},[i("uni-list-item",{attrs:{title:"请选择即将跳转节点",subnote:t.destNode,"show-arrow":"true",eventid:"77f549ab-19",mpcomid:"77f549ab-24"},on:{click:t.selecteddestNode}})],1)],1),i("view",{staticClass:"btnView"},[i("button",{staticClass:"saveBtn",attrs:{hidden:t.showFlow,eventid:"77f549ab-20"},on:{tap:t.agreeFlowClick}},[t._v("同意")]),i("button",{staticClass:"saveBtn",attrs:{hidden:t.commonFlow,eventid:"77f549ab-21"},on:{tap:t.historyClick}},[t._v("审批历史")]),i("button",{staticClass:"saveBtn",attrs:{hidden:t.commonFlow,eventid:"77f549ab-22"},on:{tap:t.flowPicClick}},[t._v("流程图")]),i("button",{staticClass:"saveBtn",attrs:{hidden:t.showFlow,eventid:"77f549ab-23"},on:{tap:t.backFlowClick}},[t._v("驳回")])],1)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cellTitleView"},[i("text",{staticClass:"cellTitle"},[t._v("基础信息")])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},3463:function(t,e,i){},"520a":function(t,e,i){"use strict";var a=i("3463"),s=i.n(a);s.a},"9d89":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=d(i("7c03")),s=d(i("ba08")),l=d(i("4b9c")),n=d(i("17f7")),o=d(i("3731")),r=(d(i("59a9")),i("2f62"));function d(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){f(t,e,i[e])})}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g={computed:(0,r.mapState)(["sublistItem","sublistIndex","userInfo","inputPageText","key"]),components:{uniList:a.default,uniListItem:l.default,uniIcon:s.default},data:function(){return{needGetInputOnShow:!1,imageViewHeight:100,imageList:[],imageList2:[],imageList3:[],littleImageWidth:0,fjflag:"",id:"",yhdj:"",yhhg:"",bhgys:"",wfflfgjtk:"",gsyqjjy:"",zrbm:"",fqr:"",zgwcrq:"",zlzj:"",zgr:"",tbrq:"",zgqk:"",tbr:"",zgyj:"",zgqx:"",txrq:"",yyfx:"",yzqk:"",yzr:"",tbrq2:"",taskDefKey:"",instId:"",nodeName:"",actDefId:"",obj:null,taskId:"",zgFlag:!1,spFlag:!1,yzFlag:!1,zgReadFlag:!0,spReadFlag:!0,yzReadFlag:!0,commonFlow:!0,owner:"",showFlow:"",destNodeData:[],destNodeParam:[],nodeParam:"",destNode:"",zgqkData:["点击输入整改情况"],zlzjData:["点击输入治理资金"],yzqkData:["点击输入验证情况"],yyfxData:["人","物","环","管"],zgyjData:["点击输入整改意见"],nodeFlag:!0}},onLoad:function(e){console.log("加载页面...");var i=this,a=JSON.parse(e.params);i.taskDefKey=a.taskDefKey,i.instId=a.instId,i.nodeName=a.name,i.actDefId=a.actDefId,i.taskId=a.taskId,i.owner=a.owner,i.showFlow=a.showFlow,i.commonFlow=a.commonFlow,o.default.requestLoadingNew(n.default.getYhzgDetail,a,"正在加载详情",function(t){var e=t.data;i.nodeFlag=!t.lx;var a,s,l=t.destNodeUserList,o=[],r=[];for(var d in l)a=l[d],s=a.taskNodeUser,r.push(s.userIds+":"+s.userFullnames+"@"+a.nodeId+":"+a.nodeText),o.push(a.nodeText+(s.userFullnames?"【"+s.userFullnames+"】":""));i.destNodeParam=r,i.destNodeData=o;var c=i.taskDefKey;if(i.id=e.id,i.yhdj=e.yhdj,i.yhhg=e.yhhg,i.bhgys=e.bhgys,i.wfflfgjtk=e.wfflfgjtk,i.gsyqjjy=e.gsyqjjy,i.zrbm=e.zrbm,i.fqr=e.fqr,e.fj){var f=JSON.parse(e.fj);for(d=0;d<f.length;d++){var g=f[d],u=n.default.host+n.default.loadImage+g.fileId+"&userid="+i.userInfo.userid,m={fileid:g.fileId,src:u,type:2};i.imageList.push(m)}}if("sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4"===c);else if("sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE"===c){if(i.zgReadFlag=!1,i.spReadFlag=!1,i.yzReadFlag=!1,i.zgqx=e.zgqx,i.tbr=e.tbr,i.txrq=e.txrq,i.zgyj=e.zgyj,i.zgwcrq=e.zgwcrq,i.zlzj=e.zlzj,i.zgr=e.zgr,i.tbrq=e.tbrq,i.zgqk=e.zgqk,e.fj2){console.log("FJ2:"+e.fj2);var h=JSON.parse(e.fj2);for(d=0;d<h.length;d++){var w=h[d],p=n.default.host+n.default.loadImage+w.fileId+"&userid="+i.userInfo.userid,b={fileid:w.fileId,src:p,type:2};i.imageList2.push(b)}}if(i.yyfx=e.yyfx,i.yzqk=e.yzqk,i.yzr=e.yzr,i.tbrq2=e.tbrq2,e.fj3){console.log("FJ3:"+e.fj3);var v=JSON.parse(e.fj3);for(d=0;d<v.length;d++){var y=v[d],z=n.default.host+n.default.loadImage+y.fileId+"&userid="+i.userInfo.userid,I={fileid:y.fileId,src:z,type:2};i.imageList3.push(I)}}}else if("sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C"===c)i.zgr=i.userInfo.fullname,i.zgFlag=!0,i.zgReadFlag=!1,i.spReadFlag=!1,i.zgqx=e.zgqx,i.tbr=e.tbr,i.txrq=e.txrq,i.zgyj=e.zgyj,i.fjflag="fj2";else if("sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8"===c){if(i.yzr=i.userInfo.fullname,i.yzFlag=!0,i.zgReadFlag=!1,i.spReadFlag=!1,i.yzReadFlag=!1,i.fjflag="fj3",i.zgqx=e.zgqx,i.tbr=e.tbr,i.txrq=e.txrq,i.zgyj=e.zgyj,i.zgwcrq=e.zgwcrq,i.zlzj=e.zlzj,i.zgr=e.zgr,i.tbrq=e.tbrq,i.zgqk=e.zgqk,e.fj2){console.log("FJ2:"+e.fj2);var C=JSON.parse(e.fj2);for(d=0;d<C.length;d++){var q=C[d],j=n.default.host+n.default.loadImage+q.fileId+"&userid="+i.userInfo.userid,F={fileid:q.fileId,src:j,type:2};i.imageList2.push(F)}}}else"sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205"!==c&&"sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8"!==c||(i.tbr=i.userInfo.fullname,i.spFlag=!0,i.zgReadFlag=!1,i.spReadFlag=!1)},function(){t.showToast({icon:"none",title:"请求失败"})},function(){}),this.littleImageWidth=(t.getSystemInfoSync().windowWidth-50)/4,this.checkPeople=this.userInfo.fullname},onNavigationBarButtonTap:function(){},onShow:function(){1==this.needGetInputOnShow&&(this.$data[this.key]=this.inputPageText,this.needGetInputOnShow=!1,this.removeInputItem())},methods:c({},(0,r.mapMutations)(["removeInputItem","setSublistItem"]),{deadLineChange:function(t){this.deadLine=t.target.value},bindDateZgwcrq:function(t){this.zgwcrq=t.target.value},bindDateTbrq:function(t){this.tbrq=t.target.value},bindDateZgqx:function(t){this.zgqx=t.target.value},bindDateTxrq:function(t){this.txrq=t.target.value},bindDateTbrq2:function(t){this.tbrq2=t.target.value},selecteddestNode:function(e){var i=this;t.showActionSheet({itemList:i.destNodeData,success:function(t){i.nodeParam=i.destNodeParam[t.tapIndex],i.destNode=i.destNodeData[t.tapIndex]},fail:function(t){console.log(t.errMsg)}})},selectedzlzj:function(e){var i=this;t.showActionSheet({itemList:i.zlzjData,success:function(t){0==t.tapIndex&&(this.needGetInputOnShow=!0,i.jumpInput(i.zlzj,"zlzj","请输入治理资金"))},fail:function(t){console.log(t.errMsg)}})},selectedzgyj:function(e){var i=this;t.showActionSheet({itemList:i.zgyjData,success:function(t){0==t.tapIndex&&(this.needGetInputOnShow=!0,i.jumpInput(i.zgyj,"zgyj","请输入整改意见"))},fail:function(t){console.log(t.errMsg)}})},selectedzgqk:function(e){var i=this;t.showActionSheet({itemList:i.zgqkData,success:function(t){0==t.tapIndex&&(this.needGetInputOnShow=!0,i.jumpInput(i.zgqk,"zgqk","请输入整改情况"))},fail:function(t){console.log(t.errMsg)}})},selectedyyfx:function(e){var i=this;t.showActionSheet({itemList:i.yyfxData,success:function(t){i.yyfx=i.yyfxData[t.tapIndex]},fail:function(t){console.log(t.errMsg)}})},selectedyzqk:function(e){var i=this;t.showActionSheet({itemList:i.yzqkData,success:function(t){0==t.tapIndex&&(this.needGetInputOnShow=!0,i.jumpInput(i.yzqk,"yzqk","请输入验证情况"))},fail:function(t){console.log(t.errMsg)}})},historyClick:function(){var e=this,i={instId:e.instId,actDefId:e.actDefId};t.setStorageSync("params",JSON.stringify(i)),t.navigateTo({url:"../danger/readHistory"})},flowPicClick:function(){var t=this;plus.runtime.openWeb(n.default.host+n.default.showFlowPic+"?actInstId="+t.instId+"&host="+n.default.host)},backFlowClick:function(){this.jumpType="BACK",this.saveClick()},agreeFlowClick:function(){this.jumpType="AGREE",this.nodeParam?this.saveClick():t.showToast({icon:"none",title:"请选择操作节点"})},saveItem:function(e){var i=this,a=i.fjflag;if(console.log("flag:::"+a),a){for(var s=n.default.uploadImage+"?from=flowyh&yyid="+i.id+"&fjlx="+a+"&userid="+i.userInfo.userid,l="fj2"===a?i.imageList2:"fj3"===a?i.imageList3:[],r=[],d=0;d<l.length;d++){var c=l[d];1!=c.type||c.src.startsWith("http:")||r.push(c.src)}if(0==r.length)return i.saveLocalItem(),void t.navigateBack({delta:1});t.showLoading({title:"正在上传图片"}),o.default.uploadImage(s,r,0,0,0,r.length,function(t){var e=JSON.parse(t.data),a=e.fj;i.fj=a},function(e){t.hideLoading(),"200"==e&&(i.saveLocalItem(),t.showToast({title:"上传成功",complete:setTimeout(function(){t.navigateBack({delta:1})},1500)}))})}else i.saveLocalItem()},saveLocalItem:function(){var t={item:0,index:0};this.setSublistItem(t)},saveClick:function(){var e=this,i={refid:e.id,id:e.id,userid:e.userInfo.userid,owner:e.owner,destNode:e.nodeParam,taskDefKey:e.taskDefKey,jumpType:e.jumpType,actDefId:e.actDefId,taskId:e.taskId};console.log(JSON.stringify(i));var a=e.taskDefKey;"sid-A0CE4647-CCC3-4A9A-81BF-09FCAB7CDCA4"===a||"sid-3785D27C-9B73-4C6D-9C1C-6A4ECA6B8FFE"===a||("sid-41BC6E14-5C85-42A1-8E1B-3246FDEA682C"===a?(i.zgwcrq=e.zgwcrq,i.zlzj=e.zlzj,i.zgr=e.zgr,i.tbrq=e.tbrq,i.zgqk=e.zgqk):"sid-F7A5E243-31D1-42DE-9D74-0C7323EFFAF8"===a?(i.yyfx=e.yyfx,i.yzqk=e.yzqk,i.yzr=e.yzr,i.tbrq2=e.tbrq2):"sid-987522D1-34D6-45A4-8D16-CE1F2ACA0205"!==a&&"sid-29BBC59F-F04B-47BF-9DE1-7C3299318DB8"!==a||(i.zgqx=e.zgqx,i.tbr=e.tbr,i.txrq=e.txrq,i.zgyj=e.zgyj)),o.default.requestLoadingNew(n.default.updateAndSendFlowForMobile,i,"正在加载",function(i){t.showToast({icon:"none",title:"操作成功！",duration:1e3}),e.saveItem()},function(){t.showToast({icon:"none",title:"保存失败"})},function(){setTimeout(function(){t.navigateBack({delta:1})},1500)})},jumpInput:function(e,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"请输入描述";this.needGetInputOnShow=!0,t.navigateTo({url:"../common/inputPage?text="+e+"&key="+i+"&placeholder="+a})},addPhoto:function(){var e=this;t.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(JSON.stringify(t.tempFilePaths));var i=e.fjflag;if(i)for(var a="fj2"===i?e.imageList2:"fj3"===i?e.imageList3:[],s=0;s<t.tempFilePaths.length;s++){var l={fileid:"",src:t.tempFilePaths[s],type:1};a.push(l)}}})},deleteImage:function(e,i){var a=this;if(e.src.startsWith("http:")){var s={item:a.item,index:a.itemIndex};a.setSublistItem(s);var l={from:"jc",yyid:a.item.id,fileid:e.fileid,userid:a.userInfo.userid};o.default.requestLoading(n.default.deleteImage,l,"正在删除图片",function(t){var e=a.fjflag;if(e){var s="fj2"===e?a.imageList2:"fj3"===e?a.imageList3:[];console.log("删除成功："+JSON.stringify(t)),a.item.fj=t.fj,s.splice(i,1)}},function(){t.showToast({icon:"none",title:"删除失败"})},function(){})}else{var r=a.fjflag;if(r){var d="fj2"===r?a.imageList2:"fj3"===r?a.imageList3:[];d.splice(i,1)}}},viewPhoto:function(){var e=this,i=[],a=e.imageList.length>0?e.imageList:e.imageList2.length>0?e.imageList2:e.imageList3;console.log(JSON.stringify(a));for(var s=0;s<a.length;s++){var l=a[s];i.push(l.src)}t.previewImage({urls:i})}})};e.default=g}).call(this,i("649d")["default"])},d4a9:function(t,e,i){"use strict";i.r(e);var a=i("2533"),s=i("1490");for(var l in s)"default"!==l&&function(t){i.d(e,t,function(){return s[t]})}(l);i("520a");var n=i("2877"),o=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports}},[["1965","common/runtime","common/vendor"]]]);