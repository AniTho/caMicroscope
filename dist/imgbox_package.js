parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"WDG/":[function(require,module,exports) {
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function t(){function t(e,t){return JSON.parse(window.localStorage.getItem(e)).filter(function(e){var n=!0;for(i in t)n=n&&Object.byString(e,i)==t[i];return n})}function n(e,t){return JSON.parse(window.localStorage.getItem(e)).filter(function(e){return e._id==t})[0]}function r(e,t){var n=JSON.parse(window.localStorage.getItem(e));return n.push(t),window.localStorage.setItem(e,JSON.stringify(n)),t}function o(e,t){console.error("Delete operation currently unsupported"),window.alert("Delete operation currently unsupported")}console.warn("{localstore mods enabled}"),Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),r=0,o=n.length;r<o;++r){var i=n[r];if(!(i in e))return;e=e[i]}return e},Store.prototype.findMarkTypes=function(n,r){return new Promise(function(o,i){var a={};r&&(a["provenance.image.slide"]=n),n&&(a["provenance.analysis.execution_id"]=r);var p=t("mark",a);o([].concat(e(new Set(p.map(function(e){return Object.byString(e,"provenance.analysis.execution_id")})))))})},Store.prototype.findMark=function(e,n,r,o,i,a,p,u,c,s){return new Promise(function(i,p){var u={};n&&(u["provenance.image.slide"]=e),e&&(u["provenance.analysis.execution_id"]=n),a&&(u["provenance.analysis.source"]=a),r&&(u["provenance.image.specimen"]=r),o&&(u["provenance.image.study"]=o),i(t("mark",u))})},Store.prototype.getMarkByIds=function(n,r,o,a,p,u,c,s,l,m){return new Promise(function(r,o){for(i in data=[],n){var a;(a=data).push.apply(a,e(t("mark",{"provenance.analysis.execution_id":n[i]})))}r(data)})},Store.prototype.getMark=function(e){return new Promise(function(t,r){t(n("mark",e))})},Store.prototype.addMark=function(e){return new Promise(function(t,n){e._id=e._id||Date.now(),t(r("mark",e))})},Store.prototype.deleteMark=function(e,t){return new Promise(function(e,t){e(o())})},Store.prototype.findHeatmap=function(e,n){return new Promise(function(r,o){var i={};n&&(i["provenance.image.slide"]=e),e&&(i["provenance.analysis.execution_id"]=n),r(t("heatmap",i))})},Store.prototype.getHeatmap=function(e){return new Promise(function(t,r){t(n("heatmap",e))})},Store.prototype.addHeatmap=function(e){return e._id=e._id||Date.now(),new Promise(function(t,n){t(r("heatmap",e))})},Store.prototype.deleteHeatmap=function(e,t){return new Promise(function(e,t){e(o())})},Store.prototype.export=function(e){return new Promise(function(t,n){t(window.localStorage.getItem(e))})},Store.prototype.import=function(e,t){return new Promise(function(n,r){n(window.localStorage.setItem(e,t))})},Store.prototype.findSlide=function(e,t,n,r){return new Promise(function(e,t){e([{id:"local",mpp:0,study:"",specimen:""}])})},Store.prototype.getSlide=function(e){return new Promise(function(e,t){e({id:"local",mpp:0,study:"",specimen:""})})},Store.prototype.findTemplate=function(e,n){var r={};return e&&(r.name=e),n&&(r.type=n),new Promise(function(e,n){e(t("template",r))})},Store.prototype.getTemplate=function(e){return new Promise(function(t,r){t(n("template",e))})}}Object.defineProperty(exports,"__esModule",{value:!0});var n={_id:"0",type:"object",id:"annotation-form",name:"AnnotSchema",description:"",links:[],additionalProperties:!1,properties:{name:{id:"a0",title:"Identity Name",type:"string",required:!0,description:"note name"},notes:{id:"a1",title:"Notes: ",type:"textarea",maxLength:128}}},r=JSON.parse(window.localStorage.getItem("template"));r||((r=[]).push(n),window.localStorage.setItem("template",JSON.stringify(r))),exports.default=t;
},{}],"5g62":[function(require,module,exports) {
"use strict";function e(){console.warn("{imgbox mods enabled}"),CaMic.prototype.default_loadImg=CaMic.prototype.loadImg,CaMic.prototype.loadImg=function(e){var i=this,t=new URLSearchParams(window.location.search).get("id");console.log("image ID : "+t);var o=t;this.slideId=o,this.slideName="local",this.study="",this.specimen="",fetch(t+"/info.json").then(function(e){return e.json()}).then(function(o){var n={"@context":"http://iiif.io/api/image/2/context.json","@id":t,height:o.height,width:o.width,profile:["http://iiif.io/api/image/2/level2.json"],protocol:"http://iiif.io/api/image",tiles:[{scaleFactors:[1,2,4,8,16,32],width:256}]};i.viewer.open(n),new OpenSeadragonImaging.ImagingHelper({viewer:i.viewer}).setMaxZoom(1);var a={};a._id,a.name=i.slideName,a.study=i.study,a.specimen=i.specimen,a.mpp=0,a.location=ibmox_url,a.url=ibmox_url,e&&"function"==typeof e&&e.call(null,[a]),Loading.text.textContent="loading slide's tiles...",i.mpp=0})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"lM4v":[function(require,module,exports) {
"use strict";var e=require("./LocalStore.js"),r=t(e),o=require("./ImgBoxMods.js"),s=t(o);function t(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(),(0,s.default)(),console.warn("This setup is intended for imagebox");
},{"./LocalStore.js":"WDG/","./ImgBoxMods.js":"5g62"}]},{},["lM4v"], null)
//# sourceMappingURL=/imgbox_package.map