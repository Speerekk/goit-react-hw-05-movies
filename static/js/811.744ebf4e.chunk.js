"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[811],{811:function(e,t,r){r.r(t);var n=r(439),a=r(791),c=r(243),s=r(689),i=r(87),o=r(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,a.useState)({}),r=(0,n.Z)(t,2),h=r[0],p=r[1];return(0,a.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:"e9ca223ab9ca4a994e59de0722330ef2"}}).then((function(e){return p(e.data)})).catch((function(e){return console.error(e)}))}),[e]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:h.title}),(0,o.jsx)("p",{children:h.overview}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.poster_path),alt:h.title}),(0,o.jsxs)("p",{children:["Rating: ",h.vote_average]}),(0,o.jsxs)("p",{children:["Genres:"," ",h.genres&&h.genres.map((function(e){return e.name})).join(", ")]}),(0,o.jsx)(i.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})," |"," ",(0,o.jsx)(i.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})]})}}}]);
//# sourceMappingURL=811.744ebf4e.chunk.js.map