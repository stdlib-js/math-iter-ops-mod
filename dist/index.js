"use strict";var h=function(i,u){return function(){return u||i((u={exports:{}}).exports,u),u.exports}};var p=h(function(M,m){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=require('@stdlib/assert-is-function/dist'),b=require('@stdlib/assert-is-number/dist').isPrimitive,q=require('@stdlib/assert-is-iterator-like/dist'),f=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function l(){var i,u,a,s,n,e;if(a=arguments.length,a<2)throw new Error(x('0Zj0I'));for(i=[],u=[],e=0;e<a;e++)if(i.push(arguments[e]),q(arguments[e]))u.push(1);else if(b(arguments[e]))u.push(0);else throw new TypeError(x('0Zj4P',e,arguments[e]));if(s={},v(s,"next",c),v(s,"return",d),f){for(e=0;e<a;e++)if(u[e]&&!y(i[e][f])){n=!0;break}n||v(s,f,g)}return n=!1,e=0,s;function c(){var t,r,o;if(n)return{done:!0};if(u[0]){if(r=i[0].next(),r.done)return n=!0,r;typeof r.value=="number"?t=r.value:t=NaN}else t=i[0];for(o=1;o<a;o++)if(u[o]){if(r=i[o].next(),r.done)return n=!0,r;typeof r.value=="number"?t%=r.value:t=NaN}else t%=i[o];return{value:t,done:!1}}function d(t){return n=!0,arguments.length?{value:t,done:!0}:{done:!0}}function g(){var t,r;for(t=[],r=0;r<a;r++)u[r]?t.push(i[r][f]()):t.push(i[r]);return l.apply(null,t)}}m.exports=l
});var w=p();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
