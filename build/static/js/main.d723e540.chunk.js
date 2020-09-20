(this["webpackJsonpreact-redux-axios-themoviedb-api"]=this["webpackJsonpreact-redux-axios-themoviedb-api"]||[]).push([[0],{45:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},55:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(20),o=a.n(c),s=(a(50),a(8)),l=a(12),i=a(3),m=(a(55),a(9));function u(e){var t=Object(i.e)();return n.a.createElement("div",{className:"card mb-3 shadow-sm bg-white",onClick:function(){return t.push({pathname:"/details",state:{movie:e.movie}})},style:{cursor:"pointer",borderRadius:0}},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path),className:"card-img",alt:"...",style:{borderRadius:0}})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body",style:{borderRadius:0}},n.a.createElement("h5",{className:"card-title title"},e.movie.title),n.a.createElement("p",{className:"card-text overview"},e.movie.overview),n.a.createElement("p",{className:"vote_average"},n.a.createElement("strong",null,"Ratings"),": ",e.movie.vote_average,n.a.createElement("span",{className:"ml-1"},n.a.createElement(m.a,{icon:"star",style:{color:"#f1c40f"}}))),n.a.createElement("p",{className:"card-text"},n.a.createElement("small",{className:"text-muted release_date"},e.movie.release_date))))))}var d=a(29),v=a(19),p=a.n(v),E=a(27),f=a(41),b=a.n(f).a.create({baseURL:"https://api.themoviedb.org/4/list/",headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODdlOGVmMjE4OTg3MzBkZDJlNGE4NmMzYjQzMWE2MiIsInN1YiI6IjVmNjNkN2I4ODQ0NDhlMDAzOTY0ZTlhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wtu2oJrBrUWOKcOQzhNpp9As-LldDARUkaot28I9o9Y")}}),g=function(){return{type:"RESET_NEXT_PAGE"}};var h={setSearch:function(e){return{type:"SET_SEARCH",payload:{search:e}}}},N=Object(s.b)((function(e){return{}}),h)((function(e){var t=function(e){var t=Object(r.useState)(""),a=Object(d.a)(t,2),n=a[0],c=a[1],o=Object(r.useState)(e),s=Object(d.a)(o,2),l=s[0],i=s[1];return Object(r.useMemo)((function(){var t=e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));i(t)}),[e,n]),{query:n,setQuery:c,search:l}}(e.movies),a=t.query,c=t.setQuery,o=t.search;return Object(r.useEffect)((function(){e.setSearch(o)}),[e,o]),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"searchInput",className:"searchInput text-center"},"Search Movie"),n.a.createElement(m.a,{icon:"search",className:"ml-2",style:{fontSize:18,color:"#B0A5A6"}}),n.a.createElement("input",{type:"text",value:a,onChange:function(e){c(e.target.value)},id:"searchInput",className:"form-control",style:{borderRadius:0},placeholder:"Type name movie you looking for..."}))}));var y=Object(s.b)((function(e){return{filteredMovies:e.filteredMovies}}),{})((function(e){return n.a.createElement("div",{className:"list-group",style:{paddingTop:60}},n.a.createElement(N,{movies:e.movies}),e.filteredMovies.map((function(e){return n.a.createElement(u,{key:e.id,movie:e})})))})),O={getMovies:function(){return function(){var e=Object(E.a)(p.a.mark((function e(t){var a,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.get("1?page=1");case 3:a=e.sent,r=a.data,n=r.results,t({type:"GET_MOVIES",payload:{moviesData:n}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},getMoreMovies:function(e){return function(){var t=Object(E.a)(p.a.mark((function t(a){var r,n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.get("1?page=".concat(e));case 3:r=t.sent,n=r.data,c=n.results,a({type:"GET_MORE_MOVIES",payload:{moviesData:c}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}},x=Object(s.b)((function(e){return{movies:e.movies,nextPage:e.nextPage}}),O)((function(e){return Object(r.useEffect)((function(){e.getMovies()}),[]),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-md-8 offset-md-2 mt-5"},n.a.createElement(y,{movies:e.movies}),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("button",{className:"btn btn-block btn-lg p-3 mb-3 loadMore",style:{backgroundColor:"#25b09c",color:"#fff",borderRadius:0},onClick:function(){return e.getMoreMovies(e.nextPage)}},"Load More",n.a.createElement(m.a,{className:"ml-2 ",icon:"sync"})))))})),j=a(13),_=a(42),M=a(28),w=a(11),I={movies:[],loading:!0,nextPage:2,filteredMovies:[]},S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.c,k=Object(j.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case"GET_MOVIES":return Object(w.a)(Object(w.a)({},e),{},{movies:r.moviesData,loading:!1});case"GET_MORE_MOVIES":return Object(w.a)(Object(w.a)({},e),{},{movies:[].concat(Object(M.a)(e.movies),Object(M.a)(r.moviesData)),loading:!1,nextPage:e.nextPage+1});case"RESET_NEXT_PAGE":return Object(w.a)(Object(w.a)({},e),{},{nextPage:2});case"SET_SEARCH":return Object(w.a)(Object(w.a)({},e),{},{filteredMovies:r.search});default:return e}}),S(Object(j.a)(_.a))),R=a(17),C=a(14),T=a(43);R.b.add(T.a,C.c,C.e,C.a,C.d,C.b);var P={resetNextPage:g},A=Object(s.b)((function(e){return{}}),P)((function(e){var t=Object(i.f)(),a=Object(i.e)();return n.a.createElement("div",{className:"container",style:{paddingTop:60}},n.a.createElement("div",{className:"col-md-8 offset-md-2 mt-5"},n.a.createElement("div",{className:"card mb-3 shadow-sm bg-white ",style:{display:"flex",position:"relative",borderRadius:0}},n.a.createElement("button",{type:"button",className:"close","aria-label":"Close",style:{position:"absolute",right:18,top:9,fontSize:26,zIndex:1,cursor:"pointer",color:"#000"},onClick:function(){e.resetNextPage(),a.push("/")}},n.a.createElement("span",{"aria-hidden":"true"},"\xd7")),n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.state.movie.poster_path),className:"card-img",alt:"...",style:{borderRadius:0}})),n.a.createElement("div",{className:"col-md-8"},n.a.createElement("div",{className:"card-body",style:{borderRadius:0}},n.a.createElement("h5",{className:"card-title title"},t.state.movie.title),n.a.createElement("p",{className:"card-text overview"},t.state.movie.overview),n.a.createElement("p",{className:"original_language"},n.a.createElement("strong",null,"Language"),":"," ",t.state.movie.original_language.toUpperCase(),n.a.createElement("span",{className:"ml-2"},n.a.createElement(m.a,{icon:"language",style:{color:"#3498db",fontSize:"22"}}))),n.a.createElement("p",{className:"vote_average"},n.a.createElement("strong",null,"Ratings"),": ",t.state.movie.vote_average,n.a.createElement("span",{className:"ml-2"},n.a.createElement(m.a,{icon:"star",style:{color:"#f1c40f"}}))),n.a.createElement("p",{className:"vote_count"},n.a.createElement("strong",null,"Vote Count:")," ",t.state.movie.vote_count,n.a.createElement("span",{className:"ml-2"},n.a.createElement(m.a,{icon:"vote-yea",style:{color:"#2ecc71"}}))),n.a.createElement("p",{className:"card-text release_date"},n.a.createElement("small",{className:"text-muted"},t.state.movie.release_date))))))))})),D=a(44);var z={resetNextPage:g},J=Object(s.b)((function(e){return{}}),z)((function(e){return n.a.createElement("nav",{className:"navbar navbar-primary bg-primary container-fluid fixed-top"},n.a.createElement(l.b,{to:"/",className:"navbar-brand mb-0 h1 ml-5",onClick:function(){return e.resetNextPage()}},"theMovieDB API"),n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/ico4e/React-Redux-Axios-theMovieDB-API",className:"mr-5","data-tip":"Code Github"},n.a.createElement(D.a,{place:"bottom",type:"dark",effect:"solid"}),n.a.createElement(m.a,{icon:["fab","github"],style:{color:"#fff"}})))}));function G(e){return n.a.createElement("div",null,n.a.createElement(J,null),e.children)}var B=function(){return n.a.createElement(l.a,null,n.a.createElement(s.a,{store:k},n.a.createElement("div",{className:"App"},n.a.createElement(G,null,n.a.createElement(i.a,{exact:!0,path:"/",component:x}),n.a.createElement(i.a,{exact:!0,path:"/details",component:A})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.d723e540.chunk.js.map