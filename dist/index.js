"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var j=c(function(P,b){
var H=require('@stdlib/complex-float64-ctor/dist'),q=require('@stdlib/complex-float64-real/dist'),g=require('@stdlib/complex-float64-imag/dist');function I(e,r,i){var v=q(e),u=g(e),s=q(r),a=g(r),m=q(i),n=g(i),t=v*s-u*a+m,d=v*a+u*s+n;return new H(t,d)}b.exports=I
});var z=c(function(Q,k){
function J(e,r,i,v,u,s,a,m,n){return a[n]=e*i-r*v+u,a[n+m]=e*v+r*i+s,a}k.exports=J
});var D=c(function(S,B){
function K(e,r,i,v,u,s,a,m,n,t,d,l){var w=e[i],x=e[i+r],C=v[s],R=v[s+u],F=a[n],G=a[n+m];return t[l]=w*C-x*R+F,t[l+d]=w*R+x*C+G,t}B.exports=K
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=j(),L=z(),M=D();E(p,"assign",L);E(p,"strided",M);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
