"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,t,r){r.r(t);var a=r(439),n=r(791),c=r(243),s=r(87),i=r(184);t.default=function(){var e=(0,n.useState)(""),t=(0,a.Z)(e,2),r=t[0],u=t[1],o=(0,n.useState)([]),h=(0,a.Z)(o,2),l=h[0],m=h[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"search",children:"Search Movies"}),(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"e9ca223ab9ca4a994e59de0722330ef2",query:r}}).then((function(e){return m(e.data.results)})).catch((function(e){return console.error(e)}))},className:"search",children:[(0,i.jsx)("input",{type:"text",value:r,onChange:function(e){return u(e.target.value)},placeholder:"Enter movie name",className:"search-in"}),(0,i.jsx)("button",{type:"submit",children:"Search"})]}),(0,i.jsx)("ul",{children:l.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(s.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=115.06ee9f03.chunk.js.map