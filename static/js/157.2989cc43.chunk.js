"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[157],{9956:function(n,e,t){t.d(e,{F:function(){return l},a:function(){return s}});var r,i,o=t(168),c=t(5706),a=t(1087),s=c.Z.ul(r||(r=(0,o.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\n\n"]))),l=(0,c.Z)(a.rU)(i||(i=(0,o.Z)(["\n  font-weight: 500;\n  transition: all 250ms linear;\n\n  &:hover {\n    color: #bc8f8f;\n  }\n"])))},4831:function(n,e,t){t.d(e,{$S:function(){return s},DD:function(){return c},SU:function(){return i},oO:function(){return o},y:function(){return a}});var r=t(1243);r.Z.defaults.params={api_key:"6c75f517288c8a390bd4f3c255485a07"};var i=function(){return r.Z.get("https://api.themoviedb.org/3/trending/movie/day")},o=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews"))},c=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n))},a=function(n){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits"))},s=function(n){return r.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n))}},157:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,o,c,a=t(5861),s=t(9439),l=t(4687),d=t.n(l),u=t(168),p=t(5706),f=p.Z.div(r||(r=(0,u.Z)(["\n  padding-right: 30px;\n  padding-left: 30px;\n"]))),x=t(4831),h=t(2791),v=t(7689),g=t(7692),m=t(1087),j=p.Z.div(i||(i=(0,u.Z)(["\nmargin: 30px 0px;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\nul {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n  p {\n    font-size: 20px;\n    font-weight:500;\n    padding-left: 10px;\n  }\n"]))),b=(0,p.Z)(m.rU)(o||(o=(0,u.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: #fff;\n  background-color: #483d8b;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 15px;\n  padding: 5px 10px;\n  cursor: pointer;\n  transition: all 250ms linear;\n\n  &:hover {\n    background-color: #bc8f8f;\n    color: black;\n  }\n"]))),Z=t(9956),k=p.Z.div(c||(c=(0,u.Z)(["\ndisplay:flex;\ngap:50px;"]))),w=t(184),y=function(n){var e,t,r,i=n.details,o=n.location,c=i.title,a=i.vote_average,s=i.overview,l=i.poster_path,d=i.release_date,u=null!==(e=null===(t=o.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return console.log(u),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(b,{to:u,children:[(0,w.jsx)(g.YiX,{}),"Go back"]}),(0,w.jsxs)(k,{children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(l),alt:"title"}),(0,w.jsxs)("div",{children:[(0,w.jsxs)("h1",{children:[c,"(",null===d||void 0===d?void 0:d.slice(0,4),")"]}),(0,w.jsxs)("p",{children:["User Score: ",(10*a).toFixed(),"%"]}),(0,w.jsx)("h2",{children:"Overview"}),(0,w.jsx)("p",{children:s}),(0,w.jsx)("h3",{children:"Genres"}),(0,w.jsx)("p",{children:null===(r=i.genres)||void 0===r?void 0:r.map((function(n){return n.name})).join(" ")})]})]}),(0,w.jsxs)(j,{children:[(0,w.jsx)("p",{children:"Additional information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(Z.F,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(Z.F,{to:"reviews",children:"Reviews"})})]})]})]})},_=t(8924),S=function(){var n=(0,h.useState)(null),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,h.useState)(!1),o=(0,s.Z)(i,2),c=o[0],l=o[1],u=(0,v.UO)().movieId,p=(0,v.TH)();return(0,h.useEffect)((function(){var n=function(){var n=(0,a.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(!0),n.next=4,(0,x.DD)(u);case 4:e=n.sent,r(e.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,l(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]),(0,w.jsx)("section",{style:{padding:"30px 0px"},children:(0,w.jsxs)(f,{children:[c&&(0,w.jsx)(_.a,{}),t&&(0,w.jsx)(y,{details:t,location:p}),(0,w.jsx)(h.Suspense,{fallback:(0,w.jsx)(_.a,{}),children:(0,w.jsx)(v.j3,{})})]})})}}}]);
//# sourceMappingURL=157.2989cc43.chunk.js.map