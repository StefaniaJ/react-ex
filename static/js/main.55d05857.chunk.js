(this["webpackJsonpreact-ex"]=this["webpackJsonpreact-ex"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(9),n(1));n(10),n(11);function u(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,"My name is ",e.name),r.a.createElement("h2",null,"I'm ",e.age," years old.")))}function m(e){return console.log(e),r.a.createElement("header",null,"I'm the header;",r.a.createElement(u,{name:e.name,age:e.age}))}function s(){return r.a.createElement("form",null,r.a.createElement("label",null,"Add post:"),r.a.createElement("input",{type:"text"}),r.a.createElement("input",{type:"submit",value:"Add post"}))}function i(){return r.a.createElement("button",null,"Add a comment")}function d(e){return r.a.createElement("li",null,e.author," said ",e.comment)}function f(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),c=n[0];n[1];return r.a.createElement("article",{className:"post"},r.a.createElement("h2",null,e.author),r.a.createElement("p",null,e.message),r.a.createElement("p",null,"You've clicked ",c," times!"),r.a.createElement("button",{className:"likeBtn"},e.likes," Likes "),r.a.createElement(i,null),r.a.createElement("ol",null,e.comments.map((function(e){return r.a.createElement(d,{key:e._id,author:e.author,comment:e.comment})}))))}function h(e){return r.a.createElement("section",null,r.a.createElement(s,null),e.posts.map((function(e){return r.a.createElement(f,{key:e._id,message:e.message,author:e.author,comments:e.comments,likes:e.likes})})))}function E(e){return r.a.createElement("footer",null,r.a.createElement("p",null,"I'm a footer ",e.name))}var p=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://frontend-d1d9.restdb.io/rest/posts?fetchchildren=true",{method:"get",headers:{"Content-Type":"application/json; charset=utf-8","x-apikey":"\t5d887445fd86cb75861e25f1","cache-control":"no-cache"}}).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:function(){var e=n.concat([{message:"very strange",author:"everybody"}]);c(e)}},"Add a new post"),r.a.createElement(m,{name:"Stef",age:22}),r.a.createElement(h,{posts:n}),r.a.createElement(E,{name:"Stef"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.55d05857.chunk.js.map