(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{25:function(e,n,t){e.exports=t.p+"static/media/dollar-5360047_1920.60d3c8b2.jpg"},26:function(e,n,t){e.exports=t(49)},49:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(19),c=t.n(o),u=t(2),i=t(1);function l(){var e=Object(u.a)(["\n    text-align: center;\n    color: ",";\n    font-size: 40px;\n"]);return l=function(){return e},e}var s=i.d.h1(l(),(function(e){return e.theme.colors.title})),f=function(){return a.a.createElement(s,null,"Kantor Online")},m=t(4);function d(){var e=Object(u.a)(["\n    flex: 0 0 300px;\n\n    @media (max-width: ","px) {\n        flex: 0 1 auto;\n    }\n"]);return d=function(){return e},e}function p(){var e=Object(u.a)(["\n    flex: 1;\n    background-color: ",";\n    border-radius: 5px;\n    color: ",";\n    padding: 8px;\n    border: none;\n    transition: filter 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return p=function(){return e},e}function b(){var e=Object(u.a)(["\n    flex: 0 1 100%;\n    border-radius: 10px;\n    border: 1px solid teal;\n    padding: 8px;\n"]);return b=function(){return e},e}function g(){var e=Object(u.a)(["\n    flex: 1 0 100%;\n    display: flex;\n    align-items: center;\n\n    @media (max-width: ","px) {\n            flex-wrap: wrap;\n        }\n    "]);return g=function(){return e},e}function x(){var e=Object(u.a)(["\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        font-size: 28px;\n        color: ",";\n    "]);return x=function(){return e},e}function v(){var e=Object(u.a)(["\n        text-align: center;\n        display: inline;\n        color: ",";\n        font-size: 18px;\n    "]);return v=function(){return e},e}function h(){var e=Object(u.a)(["\n        text-align: center;\n        display: inline;\n        color: ",";\n        font-size: 18px;\n    "]);return h=function(){return e},e}function E(){var e=Object(u.a)(["\n        color: ",";\n        font-size: 14px;\n        text-align: center;\n        justify-content: center;\n    "]);return E=function(){return e},e}function j(){var e=Object(u.a)(["\n    display: flex;\n    margin: 0px;\n\n    ","\n\n    ","\n\n    ","\n    \n    ","\n"]);return j=function(){return e},e}function y(){var e=Object(u.a)(["\n    display: grid;\n    grid-auto-columns: 1fr;\n    grid-gap: 20px;\n"]);return y=function(){return e},e}var w=i.d.form(y()),O=i.d.p(j(),(function(e){return e.info&&Object(i.c)(E(),(function(e){return e.theme.colors.info}))}),(function(e){return e.loadingState&&Object(i.c)(h(),(function(e){return e.theme.colors.info}))}),(function(e){return e.errorState&&Object(i.c)(v(),(function(e){return e.theme.colors.error}))}),(function(e){return e.styledResult&&Object(i.c)(x(),(function(e){return e.theme.colors.result}))})),k=i.d.label(g(),(function(e){return e.theme.breakpoints.mobile})),z=i.d.input(b()),S=i.d.button(p(),(function(e){return e.theme.colors.buttonBackground}),(function(e){return e.theme.colors.buttonText})),C=i.d.span(d(),(function(e){return e.theme.breakpoints.mobile})),F=function(e){var n=e.result;return a.a.createElement(O,{styledResult:!0},!!n&&a.a.createElement(a.a.Fragment,null,n.amountPossessed.toFixed(2),"\xa0",n.possessedCurrency,"\xa0=\xa0",a.a.createElement("strong",null,n.amountRecived.toFixed(2),"\xa0",n.wantedCurrency)))},B=t(7),R=t.n(B),T=t(23),W=t(24),P=t.n(W),D=function(){var e=function(){var e=Object(r.useState)({state:"loading"}),n=Object(m.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){setTimeout(function(){var e=Object(T.a)(R.a.mark((function e(){var n,t,r,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("https://api.exchangeratesapi.io/latest?base=PLN");case 3:return n=e.sent,e.next=6,n.data;case 6:t=e.sent,r=t.rates,o=t.date,a({rates:r,date:o,state:"success"}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),a({state:"failure"});case 16:case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),1e3)}),[]),[t.rates,t.date,t.state]}(),n=Object(m.a)(e,3),t=n[0],o=n[1],c=n[2],u=Object(r.useState)("PLN"),i=Object(m.a)(u,2),l=i[0],s=i[1],f=Object(r.useState)("EUR"),d=Object(m.a)(f,2),p=d[0],b=d[1],g=Object(r.useState)(""),x=Object(m.a)(g,2),v=x[0],h=x[1],E=Object(r.useState)(),j=Object(m.a)(E,2),y=j[0],B=j[1],W=Object(r.useRef)(null);return a.a.createElement(w,{action:"",method:"GET",onSubmit:function(e){e.preventDefault(),function(){var e=t[l],n=t[p];B({amountPossessed:+v,amountRecived:v*n/e,possessedCurrency:l,wantedCurrency:p})}(),h(""),W.current.focus()}},"loading"===c?a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{loadingState:!0},"Trwa pobieranie kurs\xf3w walut z \xa0",a.a.createElement("strong",null,"Europejskiego Banku Centralnego...",a.a.createElement("span",{role:"img","aria-label":"smiling face with sunglasses"},"\ud83d\ude0e")))):"failure"===c?a.a.createElement(a.a.Fragment,null,a.a.createElement(O,{errorState:!0},"Upps...Co\u015b posz\u0142o nie tak. Sprawd\u017a, czy masz po\u0142\u0105czenie z internetem.\xa0 Je\u015bli masz, to wygl\u0105da na to, \u017ce to nasz wina. Mo\u017ce spr\xf3buj p\xf3\u017aniej ? ",a.a.createElement("span",{role:"img","aria-label":"smiling face with smiling eyes"},"\ud83d\ude0a"))):"success"===c&&a.a.createElement(a.a.Fragment,null,a.a.createElement(O,null,a.a.createElement(k,null,a.a.createElement(C,{className:"form__labelText"},"Wymieniasz z (wybierz walut\u0119):"),a.a.createElement(z,{as:"select",placeholder:"Wybierz walut\u0119...",value:l,onChange:function(e){return s(e.target.value)}},Object.keys(t).map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))))),a.a.createElement(O,null,a.a.createElement(k,null,a.a.createElement(C,null,"Kwota:"),a.a.createElement(z,{ref:W,type:"number",name:"amount",step:"0.01",placeholder:"Wpisz kwot\u0119",min:"0",required:!0,value:v,onChange:function(e){return h(e.target.value)}}))),a.a.createElement(O,null,a.a.createElement(k,null,a.a.createElement(C,null,"Wymieniasz na (wybierz walut\u0119):"),a.a.createElement(z,{as:"select",value:p,onChange:function(e){return b(e.target.value)}},Object.keys(t).map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))))),a.a.createElement(O,null,a.a.createElement(S,null,"Przelicz")),a.a.createElement(O,{info:!0},"Kursy walut pobierane s\u0105 z Europejskiego Banku Centralnego.",a.a.createElement("br",null),"Aktualne na dzie\u0144: ",o),a.a.createElement(F,{result:y})))};function I(){var e=Object(u.a)(["\n    font-family: ",";\n    font-size: 14px;\n    margin: 0;\n    text-align: end;\n"]);return I=function(){return e},e}var J=i.d.p(I(),(function(e){return e.theme.fonts.clockFont})),K=function(){var e=function(){var e=Object(r.useState)(new Date),n=Object(m.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return a.a.createElement(J,null,"Dzi\u015b jest"," ",function(e){return e.toLocaleString(void 0,{year:"numeric",month:"long",weekday:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})}(e))},L=t(25),M=t.n(L);function N(){var e=Object(u.a)(['\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    #root {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 100vh;\n    background-image: url("','");\n    background-size: cover;\n    background-position: center;\n    font-family: ',"\n    }\n"]);return N=function(){return e},e}var _=Object(i.b)(N(),M.a,(function(e){return e.theme.fonts.primaryFont}));function U(){var e=Object(u.a)(["\n    flex: 0 1 750px;\n    font-size: 18px;\n    background-color: ",";\n    padding: 40px;\n    border-radius: 50px;\n    box-shadow: 0px 0px 8px 1px;\n    opacity: 0.90;\n    margin: 20px;\n"]);return U=function(){return e},e}var q=i.d.div(U(),(function(e){return e.theme.colors.background})),A={colors:{background:"white",buttonBackground:"teal",buttonText:"white",title:"teal",info:"rgb(107, 107, 107)",result:"teal",error:"crimson"},breakpoints:{mobile:767},fonts:{primaryFont:"'Montserrat', sans-serif;",clockFont:"monospace;"}};var G=function(){return a.a.createElement(i.a,{theme:A},a.a.createElement(q,null,a.a.createElement(_,null),a.a.createElement(K,null),a.a.createElement(f,null),a.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.28ababa5.chunk.js.map