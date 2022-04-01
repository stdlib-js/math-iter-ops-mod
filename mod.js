// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,d=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},x="function"==typeof Symbol?Symbol.toStringTag:"",O=_,S=x,T=w;var V=j,k=function(r){var e,t,n;if(null==r)return T.call(r);t=r[S],e=O(r,S);try{r[S]=void 0}catch(e){return T.call(r)}return n=T.call(r),e?r[S]=t:delete r[S],n},I=y()?k:V,A=Boolean.prototype.toString;var M=I,N=function(r){try{return A.call(r),!0}catch(r){return!1}},R=y();var $=function(r){return"object"==typeof r&&(r instanceof Boolean||(R?N(r):"[object Boolean]"===M(r)))},F=h,C=$;var B=m,G=function(r){return F(r)||C(r)},L=$;B(G,"isPrimitive",h),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=d,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;m(ir,"REGEXP",nr());var ar=ir,or=I;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};m(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var fr=cr;var sr=I,lr=ar.REGEXP,pr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var vr=function(r){var e,t,n;if(("Object"===(t=sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return pr(r)?"Buffer":t},gr=vr;var mr=vr;var dr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},hr=function(r){return mr(r).toLowerCase()},br=tr()?hr:dr;var yr=function(r){return"function"===br(r)};var wr=function(r){return"number"==typeof r},Er=Number,jr=Er.prototype.toString;var Pr=I,_r=Er,xr=function(r){try{return jr.call(r),!0}catch(r){return!1}},Or=y();var Sr=function(r){return"object"==typeof r&&(r instanceof _r||(Or?xr(r):"[object Number]"===Pr(r)))},Tr=wr,Vr=Sr;var kr=m,Ir=function(r){return Tr(r)||Vr(r)},Ar=Sr;kr(Ir,"isPrimitive",wr),kr(Ir,"isObject",Ar);var Mr=Ir,Nr=yr;var Rr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Nr(r.next)},$r=_;var Fr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&$r(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var Cr=function(r){return"string"==typeof r},Br=String.prototype.valueOf;var Gr=I,Lr=function(r){try{return Br.call(r),!0}catch(r){return!1}},Zr=y();var Wr=function(r){return"object"==typeof r&&(r instanceof String||(Zr?Lr(r):"[object String]"===Gr(r)))},Xr=Cr,zr=Wr;var Ur=m,Yr=function(r){return Xr(r)||zr(r)},Dr=Wr;Ur(Yr,"isPrimitive",Cr),Ur(Yr,"isObject",Dr);var qr=Yr,Hr=Math.floor;var Jr=function(r){return Hr(r)===r},Kr=Jr;var Qr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Kr(r.length)&&r.length>=0&&r.length<=9007199254740991},re=Number.POSITIVE_INFINITY,ee=Er.NEGATIVE_INFINITY,te=re,ne=ee,ie=Jr;var ae=function(r){return r<te&&r>ne&&ie(r)},oe=Mr.isPrimitive,ue=ae;var ce=function(r){return oe(r)&&ue(r)},fe=Mr.isObject,se=ae;var le=function(r){return fe(r)&&se(r.valueOf())},pe=ce,ve=le;var ge=m,me=function(r){return pe(r)||ve(r)},de=le;ge(me,"isPrimitive",ce),ge(me,"isObject",de);var he=me;var be=function(r){return r!=r},ye=Mr.isPrimitive,we=be;var Ee=function(r){return ye(r)&&we(r)},je=Mr.isObject,Pe=be;var _e=function(r){return je(r)&&Pe(r.valueOf())},xe=Ee,Oe=_e;var Se=m,Te=function(r){return xe(r)||Oe(r)},Ve=_e;Se(Te,"isPrimitive",Ee),Se(Te,"isObject",Ve);var ke=Qr,Ie=he.isPrimitive,Ae=qr.isPrimitive,Me=Te.isPrimitive;var Ne=function(r,e,t){var n,i,a;if(!ke(r)&&!Ae(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ie(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ae(r)){if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Me(e)){for(a=i;a<n;a++)if(Me(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Re=qr.isPrimitive;var $e=function(r){if(!Re(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Fe=qr.isPrimitive;var Ce=function(r){if(!Fe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Be=$e,Ge=Ce,Le=qr.isPrimitive;var Ze=function(r){return Le(r)&&r===Ge(r)&&r!==Be(r)},We=re,Xe=ee;var ze=function(r){return r==r&&r>Xe&&r<We},Ue=he.isPrimitive;var Ye=function(r){return Ue(r)&&r>=0},De=he.isObject;var qe=function(r){return De(r)&&r.valueOf()>=0},He=Ye,Je=qe;var Ke=m,Qe=function(r){return He(r)||Je(r)},rt=qe;Ke(Qe,"isPrimitive",Ye),Ke(Qe,"isObject",rt);var et=Qe.isPrimitive,tt=qr.isPrimitive;var nt=function(r,e){var t,n;if(!tt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!et(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},it=he.isPrimitive,at=qr.isPrimitive;var ot=nt,ut=function(r,e,t){var n,i;if(!at(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!at(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!it(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ct=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ut(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ot("0",i):ot("0",i)+r,n&&(r="-"+r)),r},ft=Ze,st=Ce,lt=$e,pt=ze,vt=Mr.isPrimitive,gt=ct;var mt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!pt(n)){if(!vt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ft(r.specifier)?st(t):lt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},dt=qr.isPrimitive,ht=/[-\/\\^$*+?.()|[\]{}]/g;var bt=function(r){var e,t;if(!dt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ht,"\\$&"):(e=(e=r.substring(1,t)).replace(ht,"\\$&"),r=r[0]+e+r.substring(t))},yt=RegExp.prototype.exec;var wt=I,Et=function(r){try{return yt.call(r),!0}catch(r){return!1}},jt=y();var Pt=bt,_t=yr,xt=qr.isPrimitive,Ot=function(r){return"object"==typeof r&&(r instanceof RegExp||(jt?Et(r):"[object RegExp]"===wt(r)))};var St=Ze,Tt=Ce,Vt=$e,kt=function(r,e,t){if(!xt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(xt(e))e=Pt(e),e=new RegExp(e,"g");else if(!Ot(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!xt(t)&&!_t(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},It=ze,At=Mr.isPrimitive,Mt=function(r){return Math.abs(r)},Nt=/e\+(\d)$/,Rt=/e-(\d)$/,$t=/^(\d+)$/,Ft=/^(\d+)e/,Ct=/\.0$/,Bt=/\.0*e/,Gt=/(\..*[^0])0*e/;var Lt=function(r){var e,t,n=parseFloat(r.arg);if(!It(n)){if(!At(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Mt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=kt(t,Gt,"$1e"),t=kt(t,Bt,"e"),t=kt(t,Ct,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=kt(t,Nt,"e+0$1"),t=kt(t,Rt,"e-0$1"),r.alternate&&(t=kt(t,$t,"$1."),t=kt(t,Ft,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=St(r.specifier)?Tt(t):Vt(t)},Zt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Wt=nt;var Xt=qr.isPrimitive,zt=Ne,Ut=be,Yt=mt,Dt=Lt,qt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Zt.exec(r);a;)(t=r.slice(e,Zt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Zt.lastIndex,a=Zt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ht=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Wt(" ",n):Wt(" ",n)+r},Jt=ct,Kt=String.fromCharCode;var Qt=m,rn=yr,en=Mr.isPrimitive,tn=Rr,nn=Fr,an=function(r){var e,t,n,i,a,o,u,c,f;if(!Xt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=qt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Xt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!zt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ut(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ut(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Yt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ut(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ut(a)?String(n.arg):Kt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Dt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Jt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ht(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var on=function r(){var e,t,n,i,a,o;if((n=arguments.length)<2)throw new Error("insufficient input arguments. Must provide two or more iterators.");for(e=[],t=[],o=0;o<n;o++)if(e.push(arguments[o]),tn(arguments[o]))t.push(1);else{if(!en(arguments[o]))throw new TypeError(an("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `%u`. Value: `%s`.",o,arguments[o]));t.push(0)}if(Qt(i={},"next",u),Qt(i,"return",c),nn){for(o=0;o<n;o++)if(t[o]&&!rn(e[o][nn])){a=!0;break}a||Qt(i,nn,f)}return a=!1,o=0,i;function u(){var r,i,o;if(a)return{done:!0};if(t[0]){if((i=e[0].next()).done)return a=!0,i;r="number"==typeof i.value?i.value:NaN}else r=e[0];for(o=1;o<n;o++)if(t[o]){if((i=e[o].next()).done)return a=!0,i;"number"==typeof i.value?r%=i.value:r=NaN}else r%=e[o];return{value:r,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){var i,a;for(i=[],a=0;a<n;a++)t[a]?i.push(e[a][nn]()):i.push(e[a]);return r.apply(null,i)}},un=on;export{un as default};
//# sourceMappingURL=mod.js.map
