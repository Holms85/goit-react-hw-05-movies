"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[992],{5618:function(e,n,t){t.d(n,{I1:function(){return v},Jh:function(){return l},V0:function(){return p},XT:function(){return u},Yp:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),i=t(4569),s="api_key=6cd32f1caf514f8927d6e9f8f5ec88a6",o=t.n(i)().create({baseURL:"https://api.themoviedb.org/3"}),u=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("".concat("/trending/movie/day?").concat(s));case 2:return n=e.sent,t=n.data,r=t.results,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(n,"?").concat(s));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/search/movie?query=".concat(n,"&").concat(s));case 2:return t=e.sent,r=t.data,a=r.results,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(n,"/credits?").concat(s));case 2:return t=e.sent,r=t.data,a=r.cast,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/movie/".concat(n,"/reviews?").concat(s,"&page=1"));case 2:return t=e.sent,r=t.data,a=r.results,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},4992:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(1413),a=t(5861),c=t(885),i=t(7757),s=t.n(i),o=t(501),u=t(6871),f=t(2791),p=t(5618),v="SingleMoviePage_section__3v85U",l="SingleMoviePage_info__z1jy7",d="SingleMoviePage_imgMovie__5T+wT",h="SingleMoviePage_btn__LhSca",m=t(184);function x(){var e,n=(0,f.useState)({item:{},loading:!1,error:null}),t=(0,c.Z)(n,2),i=t[0],x=t[1],g=(0,u.UO)().id,w=(0,u.s0)(),j=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/movies";(0,f.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x((0,r.Z)((0,r.Z)({},i),{},{loading:!0})),e.prev=1,e.next=4,(0,p.Yp)(g);case 4:n=e.sent,x((function(e){return(0,r.Z)((0,r.Z)({},e),{},{item:(0,r.Z)((0,r.Z)({},e.item),n)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),x((0,r.Z)((0,r.Z)({},i),{},{error:e.t0}));case 11:return e.prev=11,x((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[g,x]);var _=i.item,Z=_.title,k=_.overview,b=_.genres,y=_.poster_path,S=_.vote_average;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{className:h,onClick:function(){return w(j)},children:"Go Back"}),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("img",{className:d,src:"".concat("https://image.tmdb.org/t/p/original").concat(y),alt:Z}),(0,m.jsxs)("div",{className:l,children:[(0,m.jsx)("p",{children:Z}),(0,m.jsx)("h2",{children:"User score:"}),(0,m.jsx)("p",{children:S}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:k}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:null===b||void 0===b?void 0:b.map((function(e){return"".concat(e.name)}))})]})]}),(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsx)(o.rU,{state:{from:j},to:"/movies/".concat(g,"/cast"),children:"Cast"}),(0,m.jsx)("br",{}),(0,m.jsx)(o.rU,{state:{from:j},to:"/movies/".concat(g,"/reviews"),children:"Reviews"}),(0,m.jsx)(u.j3,{})]})}}}]);
//# sourceMappingURL=992.3b8e783a.chunk.js.map