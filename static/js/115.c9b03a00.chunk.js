"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,r){r.r(t);var a=r(439),n=r(791),c=r(243),s=r(689),o=r(87),i=r(184);t.default=function(){var e=(0,n.useState)(""),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=(0,n.useState)([]),l=(0,a.Z)(h,2),m=l[0],p=l[1],d=(0,s.s0)(),f=(0,s.TH)();return(0,n.useEffect)((function(){var e=new URLSearchParams(f.search).get("query");e&&(u(e),c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"e9ca223ab9ca4a994e59de0722330ef2",query:e}}).then((function(e){return p(e.data.results)})).catch((function(e){return console.error(e)})))}),[f.search]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"search",children:"Search Movies"}),(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"e9ca223ab9ca4a994e59de0722330ef2",query:r}}).then((function(e){return p(e.data.results)})).catch((function(e){return console.error(e)})),d("/movies?query=".concat(encodeURIComponent(r)))},className:"search",children:[(0,i.jsx)("input",{type:"text",value:r,onChange:function(e){return u(e.target.value)},placeholder:"Enter movie name",className:"search-in"}),(0,i.jsx)("button",{type:"submit",children:"Search"})]}),(0,i.jsx)("ul",{children:m.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(o.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=115.c9b03a00.chunk.js.map