(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/danger/addDanger"],{7058:function(t,e,i){"use strict";i.r(e);var n=i("8e79"),a=i("c5e3");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("712e");var o=i("2877"),l=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},"712e":function(t,e,i){"use strict";var n=i("b60b"),a=i.n(n);a.a},"728d":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("7c03")),a=r(i("ba08")),s=r(i("4b9c")),o=r(i("17f7")),l=r(i("3731")),u=(r(i("59a9")),i("2f62"));function r(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){c(t,e,i[e])})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={computed:(0,u.mapState)(["sublistItem","sublistIndex","userInfo","inputPageText","key"]),components:{uniList:n.default,uniListItem:s.default,uniIcon:a.default},data:function(){return{needGetInputOnShow:!1,item:"",itemIndex:0,imageViewHeight:100,imageList:[],littleImageWidth:0,id:"",yhdj:"",yhhg:"",bhgys:"",wfflfgjtk:"",gsyqjjy:"",zrbm:"",fqr:"",fj:"",yhdjData:["一般隐患","重大隐患"],yhhgData:["人员伤害","财产损失","其他"],zrbmData:["从隐患库选择/检索","自行输入问题","从部门库选择"]}},onLoad:function(){var e=this;e.littleImageWidth=(t.getSystemInfoSync().windowWidth-50)/4,e.fqr=e.userInfo.fullname,l.default.requestLoadingNew(o.default.getUserDeptName,{userid:e.userInfo.userid},"正在加载",function(t){e.zrbm=t.dept},function(){},function(){})},onNavigationBarButtonTap:function(){},onShow:function(){1==this.needGetInputOnShow&&(this.$data[this.key]=this.inputPageText,this.needGetInputOnShow=!1,this.removeInputItem())},methods:d({},(0,u.mapMutations)(["removeInputItem","setSublistItem"]),{selectedyhdj:function(e){var i=this;t.showActionSheet({itemList:i.yhdjData,success:function(t){i.yhdj=i.yhdjData[t.tapIndex]},fail:function(t){console.log(t.errMsg)}})},selectedyhhg:function(e){var i=this;t.showActionSheet({itemList:i.yhhgData,success:function(t){i.yhhg=i.yhhgData[t.tapIndex]},fail:function(t){console.log(t.errMsg)}})},checkDateChange:function(t){this.checkDate=t.target.value},deadLineChange:function(t){this.deadLine=t.target.value},saveItem:function(e){for(var i=this,n=o.default.uploadImage+"?from=flowyh&yyid="+i.id+"&fjlx=fj1&userid="+i.userInfo.userid,a=[],s=0;s<i.imageList.length;s++){var u=i.imageList[s];1!=u.type||u.src.startsWith("http:")||a.push(u.src)}if(0==a.length)return i.saveLocalItem(),void t.navigateBack({delta:1});t.showLoading({title:"正在上传图片"}),l.default.uploadImage(n,a,0,0,0,a.length,function(t){var e=JSON.parse(t.data),n=e.fj;i.fj=n},function(e){t.hideLoading(),"200"==e&&(i.saveLocalItem(),t.showToast({title:"上传成功",complete:setTimeout(function(){t.navigateBack({delta:1})},1500)}))})},saveLocalItem:function(){var t={item:this.item,index:this.itemIndex};this.setSublistItem(t)},saveClick:function(){var e=this,i={refid:e.id,yhdj:e.yhdj,yhhg:e.yhhg,bhgys:e.bhgys,wfflfgjtk:e.wfflfgjtk,gsyqjjy:e.gsyqjjy,zrbm:e.zrbm,fqr:e.fqr,userid:e.userInfo.userid};l.default.requestLoadingNew(o.default.addYhzgToFlow,i,"正在加载",function(i){t.showToast({icon:"none",title:"保存成功",duration:1e3}),console.log(""+JSON.stringify(i)),e.id=i.id,console.log(e.id),e.saveItem()},function(){t.showToast({icon:"none",title:"保存失败"})},function(){})},jumpInput:function(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"请输入描述";this.needGetInputOnShow=!0,t.navigateTo({url:"../common/inputPage?text="+e+"&key="+i+"&placeholder="+n})},addPhoto:function(){var e=this;t.chooseImage({count:9,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(JSON.stringify(t.tempFilePaths));for(var i=0;i<t.tempFilePaths.length;i++){var n={fileid:"",src:t.tempFilePaths[i],type:1};e.imageList.push(n)}}})},deleteImage:function(e,i){var n=this;if(e.src.startsWith("http:")){var a={item:n.item,index:n.itemIndex};n.setSublistItem(a);var s={from:"jc",yyid:n.item.id,fileid:e.fileid,userid:n.userInfo.userid};l.default.requestLoading(o.default.deleteImage,s,"正在删除图片",function(t){console.log("删除成功："+JSON.stringify(t)),n.item.fj=t.fj,n.imageList.splice(i,1)},function(){t.showToast({icon:"none",title:"删除失败"})},function(){})}else n.imageList.splice(i,1)},viewPhoto:function(){for(var e=this,i=[],n=0;n<e.imageList.length;n++){var a=e.imageList[n];i.push(a.src)}t.previewImage({urls:i})}})};e.default=f}).call(this,i("649d")["default"])},"8e79":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"baseView"},[i("view",{staticClass:"cellInfoView"},[i("uni-list-item",{attrs:{title:"发现人",subnote:t.fqr,"show-arrow":"false",mpcomid:"72ed35ad-0"}}),i("uni-list-item",{attrs:{title:"责任部门",subnote:t.zrbm,"show-arrow":"false",mpcomid:"72ed35ad-1"}}),i("uni-list",{attrs:{mpcomid:"72ed35ad-7"}},[i("uni-list-item",{attrs:{title:"隐患描述",subnote:t.bhgys,"show-arrow":"true",eventid:"72ed35ad-0",mpcomid:"72ed35ad-2"},on:{click:function(e){t.jumpInput(t.bhgys,"bhgys","请输入隐患描述")}}}),i("uni-list-item",{attrs:{title:"隐患级别",subnote:t.yhdj,"show-arrow":"true",eventid:"72ed35ad-1",mpcomid:"72ed35ad-3"},on:{click:t.selectedyhdj}}),i("uni-list-item",{attrs:{title:"隐患分类",subnote:t.yhhg,"show-arrow":"true",eventid:"72ed35ad-2",mpcomid:"72ed35ad-4"},on:{click:t.selectedyhhg}}),i("uni-list-item",{attrs:{title:"对应条款",subnote:t.wfflfgjtk,"show-arrow":"true",eventid:"72ed35ad-3",mpcomid:"72ed35ad-5"},on:{click:function(e){t.jumpInput(t.wfflfgjtk,"wfflfgjtk","请输入对应条款")}}}),i("uni-list-item",{attrs:{title:"整改建议",subnote:t.gsyqjjy,"show-arrow":"true",eventid:"72ed35ad-4",mpcomid:"72ed35ad-6"},on:{click:function(e){t.jumpInput(t.gsyqjjy,"gsyqjjy","请输入整改要求及建议")}}})],1),i("view",{staticClass:"imageBaseView"},[i("view",{staticClass:"cellSubViewRow"},[i("text",{staticClass:"leftTextRow"},[t._v("隐患照片")]),i("text",{staticClass:"rightTextRow"},[t._v(t._s(t.imageList.length))])]),i("view",{staticClass:"imageView",attrs:{id:"imageView"}},[t._l(t.imageList,function(e,n){return i("block",{key:n},[i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"}},[i("image",{staticClass:"littleImage",attrs:{id:n,src:e.src,mode:"aspectFit",eventid:"72ed35ad-5-"+n},on:{click:t.viewPhoto}}),i("image",{staticClass:"littleImageDelete",attrs:{src:"../../static/img/delete.png",id:n,mode:"aspectFit",eventid:"72ed35ad-6-"+n},on:{click:function(i){t.deleteImage(e,n)}}})])])}),i("view",{staticClass:"littleImageView",style:{width:t.littleImageWidth+"px",height:t.littleImageWidth+"px"},attrs:{eventid:"72ed35ad-7"},on:{click:t.addPhoto}},[i("image",{staticClass:"littleImage",attrs:{src:"../../static/img/addImage.png"}})])],2)])],1),i("view",{staticClass:"btnView"},[i("button",{staticClass:"saveBtn",attrs:{eventid:"72ed35ad-8"},on:{tap:t.saveClick}},[t._v("保存")])],1)])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},a35e:function(t,e,i){"use strict";i("de83");var n=s(i("b0ce")),a=s(i("7058"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},b60b:function(t,e,i){},c5e3:function(t,e,i){"use strict";i.r(e);var n=i("728d"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a}},[["a35e","common/runtime","common/vendor"]]]);