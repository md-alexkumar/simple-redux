(this["webpackJsonpsimple-redux"]=this["webpackJsonpsimple-redux"]||[]).push([[0],{11:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(4),s=n.n(r),u=(n(11),n(5)),i=n(9),a=n.n(i),l="INCREMENT",p="DECREMENT",j="INCREMENT_ASYNC",d="DECREMENT_ASYNC",b=n(10),h=n(20),f=n(3),O={count:0};var E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(console.log("action.type",e.type),e.type){case l:case j:return Object(f.a)(Object(f.a)({},t),{},{count:t.count+1});case p:case d:return Object(f.a)(Object(f.a)({},t),{},{count:t.count-1});default:return t}},N=Object(b.b)(E,Object(b.a)(h.a)),g=n(2);function C(){var t=Object(u.c)((function(t){return t.count})),e=Object(u.b)();return console.log("count1",t),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("div",{className:"App-title",children:"Using redux for Async actions"}),Object(g.jsx)("div",{className:"App-count",children:t}),Object(g.jsx)("button",{className:"App-btn",onClick:function(){return e((function(t){a.a.get("https://jsonplaceholder.typicode.com/todos/1").then((function(){return t({type:j})})).catch((function(){return t({type:j})}))}))},children:"INCREMENT"}),Object(g.jsx)("button",{className:"App-btn",onClick:function(){return e((function(t){a.a.get("https://jsonplaceholder.typicode.com/todos/1").then((function(){return t({type:d})})).catch((function(){return t({type:d})}))}))},children:"DECREMENT"})]})}var x=function(){return Object(g.jsx)(u.a,{store:N,children:Object(g.jsx)(C,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),r(t),s(t)}))};s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.5e5d036a.chunk.js.map