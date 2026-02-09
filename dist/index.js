"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var j=c(function(P,b){
var H=require('@stdlib/complex-float64-ctor/dist'),q=require('@stdlib/complex-float64-real/dist'),g=require('@stdlib/complex-float64-imag/dist');function I(e,r,a){var v=q(e),u=g(e),s=q(r),i=g(r),m=q(a),n=g(a),t=v*s-u*i+m,d=v*i+u*s+n;return new H(t,d)}b.exports=I
});var z=c(function(Q,k){
function J(e,r,a,v,u,s,i,m,n){return i[n]=e*a-r*v+u,i[n+m]=e*v+r*a+s,i}k.exports=J
});var D=c(function(S,B){
function K(e,r,a,v,u,s,i,m,n,t,d,l){var w=e[a],x=e[a+r],C=v[s],R=v[s+u],F=i[n],G=i[n+m];return t[l]=w*C-x*R+F,t[l+d]=w*R+x*C+G,t}B.exports=K
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=j(),L=z(),M=D();E(p,"assign",L);E(p,"strided",M);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
