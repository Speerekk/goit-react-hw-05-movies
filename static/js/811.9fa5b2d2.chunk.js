"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[811],{811:function(e,t,n){n.r(t);var r=n(439),a=n(791),c=n(243),i=n(689),s=n(87),o=n(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,a.useState)({}),n=(0,r.Z)(t,2),h=n[0],u=n[1],d=(0,a.useState)([]),l=(0,r.Z)(d,2),p=l[0],m=l[1],v=(0,a.useState)([]),f=(0,r.Z)(v,2),j=f[0],x=f[1],b=(0,a.useState)(!1),g=(0,r.Z)(b,2),k=g[0],w=g[1],_=(0,a.useState)(!1),Z=(0,r.Z)(_,2),C=Z[0],S=Z[1];return(0,a.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:"e9ca223ab9ca4a994e59de0722330ef2"}}).then((function(e){return u(e.data)})).catch((function(e){return console.error(e)})),c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{params:{api_key:"e9ca223ab9ca4a994e59de0722330ef2"}}).then((function(e){return m(e.data.cast)})).catch((function(e){return console.error(e)})),c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:{api_key:"e9ca223ab9ca4a994e59de0722330ef2"}}).then((function(e){return x(e.data.results)})).catch((function(e){return console.error(e)}))}),[e]),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.rU,{to:"/movies",children:"Go Back"})," ",(0,o.jsxs)("div",{className:"about",children:[h.poster_path&&(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.poster_path),alt:h.title}),(0,o.jsx)("h2",{children:h.title}),(0,o.jsx)("p",{children:h.overview}),(0,o.jsxs)("p",{children:["Rating: ",h.vote_average]}),(0,o.jsxs)("p",{children:["Genres:"," ",h.genres&&h.genres.map((function(e){return e.name})).join(", ")]})]}),(0,o.jsxs)("div",{className:"button-about",children:[(0,o.jsx)("button",{onClick:function(){return w(!k)},children:k?"Hide Cast":"Show Cast"}),k&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Cast"}),(0,o.jsx)("ul",{children:p.map((function(e){return(0,o.jsxs)("li",{children:[e.name," as ",e.character]},e.id)}))})]}),(0,o.jsx)("button",{onClick:function(){return S(!C)},children:C?"Hide Reviews":"Show Reviews"}),C&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Reviews"}),(0,o.jsx)("ul",{children:j.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h4",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})]})]})]})}}}]);
//# sourceMappingURL=811.9fa5b2d2.chunk.js.map