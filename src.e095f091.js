parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
const t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e=(t,e)=>Math.floor(Math.random()*(e-t+1)+t),n=document.querySelector('[data-action="start"]'),o=document.querySelector('[data-action="stop"]'),r=document.querySelector("body");let c=null;const a=()=>(c=setInterval(()=>{const n=t[e(0,t.length)];return r.style.backgroundColor=n},1e3),n.setAttribute("disabled","true"),c);n.addEventListener("click",a);const l=function(){clearInterval(c),n.removeAttribute("disabled")};o.addEventListener("click",l);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-10-food-service/src.e095f091.js.map