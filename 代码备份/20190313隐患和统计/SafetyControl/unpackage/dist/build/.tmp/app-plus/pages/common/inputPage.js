(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/inputPage"],{"0f7c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"baseView"},[n("textarea",{staticClass:"myText",attrs:{placeholder:t.placeholder,value:t.text,eventid:"5fee3cb0-0"},on:{input:t.descInput}}),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"5fee3cb0-1"},on:{tap:t.saveText}},[t._v("确定")])],1)])},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},"43e8":function(t,e,n){},4930:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{placeholder:"请输入内容",text:"",key:""}},onLoad:function(t){this.placeholder=t.placeholder,this.text=t.text,this.key=t.key},methods:r({},(0,a.mapMutations)(["setInputPageText"]),{saveText:function(){var e={text:this.text,key:this.key};this.setInputPageText(e),t.navigateBack({delta:1})},descInput:function(t){this.text=t.detail.value}})};e.default=c}).call(this,n("649d")["default"])},"8f08":function(t,e,n){"use strict";var a=n("43e8"),r=n.n(a);r.a},df38:function(t,e,n){"use strict";n.r(e);var a=n("4930"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},ec61:function(t,e,n){"use strict";n.r(e);var a=n("0f7c"),r=n("df38");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("8f08");var c=n("2877"),o=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},f9fa:function(t,e,n){"use strict";n("835e");var a=u(n("b0ce")),r=u(n("ec61"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(r.default))}},[["f9fa","common/runtime","common/vendor"]]]);