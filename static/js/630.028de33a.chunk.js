"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{5618:function(t,n,r){r.d(n,{I1:function(){return l},Jh:function(){return v},V0:function(){return f},XT:function(){return i},Yp:function(){return p}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),o="api_key=6cd32f1caf514f8927d6e9f8f5ec88a6",s=r.n(u)().create({baseURL:"https://api.themoviedb.org/3"}),i=function(){var t=(0,e.Z)(c().mark((function t(){var n,r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("".concat("/trending/movie/day?").concat(o));case 2:return n=t.sent,r=n.data,e=r.results,t.abrupt("return",e);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"?").concat(o));case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie?query=".concat(n,"&").concat(o));case 2:return r=t.sent,e=r.data,a=e.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"/credits?").concat(o));case 2:return r=t.sent,e=r.data,a=e.cast,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"/reviews?").concat(o,"&page=1"));case 2:return r=t.sent,e=r.data,a=e.results,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},630:function(t,n,r){r.r(n),r.d(n,{default:function(){return v}});var e=r(1413),a=r(5861),c=r(885),u=r(7757),o=r.n(u),s=r(6871),i=r(2791),p=r(5618),f="CastPage_img__bOvWe",l=r(184);function v(){var t=(0,i.useState)({item:[],loading:!1,error:null}),n=(0,c.Z)(t,2),r=n[0],u=n[1],v=(0,s.UO)().id;(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u((0,e.Z)((0,e.Z)({},r),{},{loading:!0})),t.prev=1,t.next=4,(0,p.I1)(v);case 4:n=t.sent,u((function(t){return(0,e.Z)((0,e.Z)({},t),{},{item:n})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),u((0,e.Z)((0,e.Z)({},r),{},{error:t.t0}));case 11:return t.prev=11,u((function(t){return(0,e.Z)((0,e.Z)({},t),{},{loading:!1})})),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();console.log(r.item),t()}),[v]);var h=r.item;return console.log(h),(0,l.jsx)("ul",{children:h.length>0&&h.map((function(t){var n=t.id,r=t.profile_path,e=t.original_name,a=t.character;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{className:f,src:null!==r?"".concat("https://image.tmdb.org/t/p/original").concat(r):"https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png",alt:e}),(0,l.jsx)("p",{children:e}),(0,l.jsxs)("p",{children:[" Character: ",a]})]},n)}))})}}}]);
//# sourceMappingURL=630.028de33a.chunk.js.map