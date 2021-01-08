(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],{207:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(33),o=t.n(c),u=t(2),l=t(6),i=t(18),s=t(8),f=t(3);function m(){var e=Object(f.a)(["\n&."," {\n    font-weight: bold;\n}\ncolor: ",";\ntext-decoration: none;\n"]);return m=function(){return e},e}function d(){var e=Object(f.a)(["\nmargin: 20px 10px 20px 10px;\n\n@media(max-width: ","px) {\n    flex: 1 0 34%;\n    text-align: center;\n    margin: 10px;\n};\n"]);return d=function(){return e},e}function b(){var e=Object(f.a)(["\ndisplay: flex;\njustify-content: center;\nmargin: 0;\npadding: 0;\nlist-style-type: none;\n\n@media(max-width: ","px) {\n    flex-wrap: wrap;\n};\n\n"]);return b=function(){return e},e}function p(){var e=Object(f.a)(["\nflex: 1 0 100%;\nbackground-color: ",";\n"]);return p=function(){return e},e}var v=u.d.nav(p(),(function(e){return e.theme.colors.buttonBackground})),g=u.d.ul(b(),(function(e){return e.theme.breakpoints.mobile})),E=u.d.li(d(),(function(e){return e.theme.breakpoints.mobile})),h=Object(u.d)(i.c).attrs((function(){return{activeClassName:"active"}}))(m(),"active",(function(e){return e.theme.colors.background})),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":id";return"/latest-rates/".concat(e)},j=function(){return a.a.createElement(v,null,a.a.createElement(g,null,a.a.createElement(E,null,a.a.createElement(h,{to:"/converter"},"Kalkulator walut")),a.a.createElement(E,null,a.a.createElement(h,{to:"/latest-rates"},"Ostatnie stawki")),a.a.createElement(E,null,a.a.createElement(h,{to:"/chart"},"Ostatnie 30 dni")),a.a.createElement(E,null,a.a.createElement(h,{to:"/trends"},"Trends"))))},O=t(17);function k(){var e=Object(f.a)(["\n    flex: 0 0 300px;\n\n    @media (max-width: ","px) {\n        flex: 0 1 auto;\n    }\n"]);return k=function(){return e},e}function y(){var e=Object(f.a)(["\n    flex: 1;\n    background-color: ",";\n    border-radius: 5px;\n    color: ",";\n    padding: 8px;\n    border: none;\n    transition: filter 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n    &:active {\n        filter: brightness(120%);\n    }\n"]);return y=function(){return e},e}function w(){var e=Object(f.a)(["\n    flex: 1 0 100%;\n    display: flex;\n    align-items: center;\n\n    @media (max-width: ","px) {\n            flex-wrap: wrap;\n        }\n    "]);return w=function(){return e},e}function z(){var e=Object(f.a)(["\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        font-size: 28px;\n        color: ",";\n    "]);return z=function(){return e},e}function C(){var e=Object(f.a)(["\n        text-align: center;\n        display: inline;\n        color: ",";\n        font-size: 18px;\n    "]);return C=function(){return e},e}function F(){var e=Object(f.a)(["\n        text-align: center;\n        display: inline;\n        color: ",";\n        font-size: 18px;\n    "]);return F=function(){return e},e}function R(){var e=Object(f.a)(["\n        color: ",";\n        font-size: 14px;\n        text-align: center;\n        justify-content: center;\n    "]);return R=function(){return e},e}function S(){var e=Object(f.a)(["\n    display: flex;\n    margin: 0px;\n\n    ","\n\n    ","\n\n    ","\n    \n    ","\n"]);return S=function(){return e},e}function B(){var e=Object(f.a)(["\n    display: grid;\n    grid-auto-columns: 1fr;\n    grid-gap: 20px;\n"]);return B=function(){return e},e}var D=u.d.form(B()),T=u.d.p(S(),(function(e){return e.info&&Object(u.c)(R(),(function(e){return e.theme.colors.info}))}),(function(e){return e.loadingState&&Object(u.c)(F(),(function(e){return e.theme.colors.info}))}),(function(e){return e.errorState&&Object(u.c)(C(),(function(e){return e.theme.colors.error}))}),(function(e){return e.styledResult&&Object(u.c)(z(),(function(e){return e.theme.colors.result}))})),Y=u.d.label(w(),(function(e){return e.theme.breakpoints.mobile})),M=u.d.button(y(),(function(e){return e.theme.colors.buttonBackground}),(function(e){return e.theme.colors.buttonText})),I=u.d.span(k(),(function(e){return e.theme.breakpoints.mobile})),U=function(e){var n=e.result;return a.a.createElement(T,{styledResult:!0},!!n&&a.a.createElement(a.a.Fragment,null,n.amountPossessed.toFixed(2),"\xa0",n.possessedCurrency,"\xa0=\xa0",a.a.createElement("strong",null,n.amountRecived.toFixed(2),"\xa0",n.wantedCurrency)))};function W(){var e=Object(f.a)(["\n    overflow: auto;\n    flex: 0 1 800px;\n    font-size: 16px;\n    background-color: ",";\n    padding: 30px;\n    border-radius: 50px;\n    box-shadow: 0px 0px 8px 1px;\n    opacity: 0.90;\n    margin: 20px;\n"]);return W=function(){return e},e}var K=u.d.div(W(),(function(e){return e.theme.colors.background})),P=function(e){var n=e.children;return a.a.createElement(K,null,n)};function J(){var e=Object(f.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n"]);return J=function(){return e},e}function _(){var e=Object(f.a)(["\n    flex: 1 0 100%;\n    text-align: center;\n    color: ",";\n    font-size: 30px;\n    grid-column-start: 1;\n    grid-column-end: 3;\n"]);return _=function(){return e},e}var A=u.d.h1(_(),(function(e){return e.theme.colors.title})),L=u.d.div(J());function N(){var e=Object(f.a)(["\n    font-family: ",";\n    text-align: end;\n    font-size: 14px;\n    margin: 0;\n\n    @media(max-width:560px) {\n        flex: 1 0 100%;\n        order: -1;\n        margin-bottom: 15px;\n        justify-self: flex-end;\n}\n"]);return N=function(){return e},e}var q=u.d.div(N(),(function(e){return e.theme.fonts.clockFont})),$=function(){var e=function(){var e=Object(r.useState)(new Date),n=Object(O.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),t}();return a.a.createElement(q,null,"Dzi\u015b jest ",function(e){return e.toLocaleString(void 0,{year:"numeric",month:"long",weekday:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})}(e))};function G(){var e=Object(f.a)(["\n        font-size: 14px;\n        margin-right: 5px;\n"]);return G=function(){return e},e}function H(){var e=Object(f.a)(["\n\n"]);return H=function(){return e},e}function Q(){var e=Object(f.a)(["\n    border-radius: 10px;\n    border: 1px solid teal;\n    padding: 5px;\n    font-size: 14px;\n"]);return Q=function(){return e},e}var V=u.d.input(Q()),X=u.d.form(H()),Z=u.d.span(G()),ee=t(36),ne=Object(ee.b)({name:"rates",initialState:{rates:[],date:"",state:"loading",base:"PLN"},reducers:{getRates:function(e){e.state="loading"},getRatesSuccess:function(e,n){var t=n.payload;e.rates=Object.entries(t.rates).sort((function(e,n){return e[0].localeCompare(n[0])})),e.date=e.rates[e.rates.length-1][0],e.base=t.base,e.state="success"},getRatesError:function(e){e.state="error"},setBaseRate:function(e,n){var t=n.payload;e.base=t}}}),te=ne.actions,re=te.getRates,ae=te.getRatesSuccess,ce=te.getRatesError,oe=te.setBaseRate,ue=function(e){return e.rates},le=function(e){return ue(e).rates},ie=function(e){var n=le(e);return void 0!==n&&n.length>0?Object.entries(n[n.length-1][1]).filter((function(n){return n[0]!==e.rates.base})).sort((function(e,n){return e[0].localeCompare(n[0])})):[]},se=function(e){var n=le(e);if(void 0!==n&&n.length>0){var t=Object.entries(n[n.length-1][1]);return t.some((function(e){return"EUR"===e[0]}))||t.push(["EUR",1]),t.sort((function(e,n){return e[0].localeCompare(n[0])}))}return[]},fe=function(e){var n=le(e);return void 0!==n&&n.length>0?Object.entries(n[n.length-2][1]).filter((function(n){return n[0]!==e.rates.base})).sort((function(e,n){return e[0].localeCompare(n[0])})):[]},me=function(e){var n=ie(e),t=fe(e),r=n.map((function(e,n){return[e[0],e[1],t[n][1],100*(e[1]/t[n][1]-1)]})).sort((function(e,n){return e[3]-n[3]})),a=r.slice(0,5).filter((function(e){return e[3]<0}));return{ratesIncrease:r.slice(-5).reverse().filter((function(e){return e[3]>0})),ratesDecrease:a}},de=function(e){return ue(e).state},be=function(e){return ue(e).date},pe=function(e){return ue(e).base},ve=ne.reducer,ge=function(){var e=Object(l.b)(),n=Object(l.c)(pe),t=Object(l.c)(se);return a.a.createElement(X,null,a.a.createElement("label",null,a.a.createElement(Z,null,"Base:"),a.a.createElement(V,{as:"select",value:n,onChange:function(n){e(oe(n.target.value))}},t.map((function(e){return a.a.createElement("option",{key:e[0]},e[0])})))))},Ee=function(e){var n=e.title,t=Object(s.g)(),r=Object(s.h)();return a.a.createElement(L,null,"/convarter"===t.pathname?a.a.createElement(a.a.Fragment,null):"/latest-rates"===t.pathname?a.a.createElement(ge,null):t.pathname==="/latest-rates/".concat(r.id)?a.a.createElement(a.a.Fragment,null):"/chart"===t.pathname||"/trends"===t.pathname?a.a.createElement(ge,null):a.a.createElement(a.a.Fragment,null),a.a.createElement($,null),a.a.createElement(A,null,n))};function he(){var e=Object(f.a)(["\n        margin: 0px 20px 20px 0px\n    "]);return he=function(){return e},e}function xe(){var e=Object(f.a)(["\n    flex: 1;\n    background-color: ",";\n    border-radius: 5px;\n    color: ",";\n    padding: 8px;\n    border: none;\n    transition: filter 0.5s;\n\n    &:hover {\n        filter: brightness(110%);\n    }\n    &:active {\n        filter: brightness(120%);\n    }\n\n    ","\n"]);return xe=function(){return e},e}function je(){var e=Object(f.a)(["\n    flex: 0 1 100%;\n    border-radius: 10px;\n    border: 1px solid teal;\n    padding: 5px;\n"]);return je=function(){return e},e}var Oe=u.d.input(je()),ke=u.d.button(xe(),(function(e){return e.theme.colors.buttonBackground}),(function(e){return e.theme.colors.buttonText}),(function(e){return e.trends&&Object(u.c)(he())})),ye=function(){var e=Object(l.b)(),n=Object(l.c)(se),t=Object(l.c)(de),c=Object(l.c)(be),o=Object(l.c)(pe);Object(r.useEffect)((function(){e(re())}),[e,o]);var u=Object(r.useRef)(null),i=Object(r.useState)(o),s=Object(O.a)(i,2),f=s[0],m=s[1],d=Object(r.useState)("EUR"),b=Object(O.a)(d,2),p=b[0],v=b[1],g=Object(r.useState)(""),E=Object(O.a)(g,2),h=E[0],x=E[1],j=Object(r.useState)(),k=Object(O.a)(j,2),y=k[0],w=k[1];return a.a.createElement(P,null,a.a.createElement(Ee,{title:"Kalkulator walut"}),a.a.createElement(D,{onSubmit:function(e){e.preventDefault(),function(){var e=n.find((function(e){return e[0]===f}))[1],t=n.find((function(e){return e[0]===p}))[1];w({amountPossessed:+h,amountRecived:h*t/e,possessedCurrency:f,wantedCurrency:p})}(),x(""),u.current.focus()}},"loading"===t?a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{loadingState:!0},"Trwa pobieranie kurs\xf3w walut z \xa0",a.a.createElement("strong",null,"Europejskiego Banku Centralnego...",a.a.createElement("span",{role:"img","aria-label":"smiling face with sunglasses"},"\ud83d\ude0e")))):"error"===t?a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{errorState:!0},"Upps...Co\u015b posz\u0142o nie tak. Sprawd\u017a, czy masz po\u0142\u0105czenie z internetem.\xa0 Je\u015bli masz, to wygl\u0105da na to, \u017ce to nasz wina. Mo\u017ce spr\xf3buj p\xf3\u017aniej ? ",a.a.createElement("span",{role:"img","aria-label":"smiling face with smiling eyes"},"\ud83d\ude0a"))):"success"===t&&a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null,a.a.createElement(Y,null,a.a.createElement(I,null,"Wymieniasz z (wybierz walut\u0119):"),a.a.createElement(Oe,{as:"select",value:f,onChange:function(e){return m(e.target.value)}},n.sort((function(e,n){return e[0].localeCompare(n[0])})).map((function(e){return a.a.createElement("option",{key:e[0],value:e[0]},e[0])}))))),a.a.createElement(T,null,a.a.createElement(Y,null,a.a.createElement(I,null,"Kwota:"),a.a.createElement(Oe,{ref:u,type:"number",step:"0.01",placeholder:"Wpisz kwot\u0119...",min:"0",required:!0,value:h,onChange:function(e){return x(e.target.value)}}))),a.a.createElement(T,null,a.a.createElement(Y,null,a.a.createElement(I,null,"Wymieniasz na (wybierz walut\u0119):"),a.a.createElement(Oe,{as:"select",value:p,onChange:function(e){return v(e.target.value)}},n.sort((function(e,n){return e[0].localeCompare(n[0])})).map((function(e){return a.a.createElement("option",{key:e[0],value:e[0]},e[0])}))))),a.a.createElement(T,null,a.a.createElement(M,null,"Przelicz")),a.a.createElement(T,{info:!0},"Kursy walut pobierane s\u0105 z Europejskiego Banku Centralnego.",a.a.createElement("br",null),"Aktualne na dzie\u0144: ",c),a.a.createElement(U,{result:y}))))};function we(){var e=Object(f.a)(["\n    border-collapse: collapse;\n    width: 100%;\n"]);return we=function(){return e},e}function ze(){var e=Object(f.a)(["\n    overflow-x: auto;\n"]);return ze=function(){return e},e}var Ce=u.d.div(ze()),Fe=u.d.table(we()),Re=function(e){var n=e.body;return a.a.createElement(Ce,null,a.a.createElement(Fe,null,a.a.createElement("tbody",null,n)))};function Se(){var e=Object(f.a)(["\n    text-decoration: none;\n"]);return Se=function(){return e},e}function Be(){var e=Object(f.a)(["\n&:nth-child(even) {\n    background-color: #eee;\n};\n&:hover {\n    background-color: hsl(180deg 100% 25% / 50%);\n}\n"]);return Be=function(){return e},e}function De(){var e=Object(f.a)(["\n    border: 1px solid ",";\n    padding: 10px;\n    background-color: ",";\n    color: ",";\n"]);return De=function(){return e},e}function Te(){var e=Object(f.a)(["\n    border: 1px solid ",";\n    padding: 10px;\n    text-align: center;\n"]);return Te=function(){return e},e}function Ye(){var e=Object(f.a)(["\n        color: ",";\n    "]);return Ye=function(){return e},e}function Me(){var e=Object(f.a)(["\n        color: ",";\n    "]);return Me=function(){return e},e}function Ie(){var e=Object(f.a)(["\n    font-size: 25px;\n\n    ",";\n    ",";\n\n"]);return Ie=function(){return e},e}var Ue=u.d.span(Ie(),(function(e){return e.increase&&Object(u.c)(Me(),(function(e){return e.theme.colors.increase}))}),(function(e){return e.decrease&&Object(u.c)(Ye(),(function(e){return e.theme.colors.decrease}))})),We=u.d.td(Te(),(function(e){return e.theme.colors.black})),Ke=u.d.th(De(),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.buttonBackground}),(function(e){return e.theme.colors.background})),Pe=u.d.tr(Be()),Je=Object(u.d)(i.b)(Se()),_e=function(){var e=Object(l.b)(),n=Object(l.c)(ie),t=Object(l.c)(pe),c=Object(l.c)(fe);return Object(r.useEffect)((function(){e(re())}),[e,t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Pe,null,a.a.createElement(Ke,{scope:"col"},"Currency"),a.a.createElement(Ke,{scope:"col"},"Spot"),a.a.createElement(Ke,{scope:"col"},"Increace\xa0/ Decrease"),a.a.createElement(Ke,{scope:"col"},"Chart")),void 0!==n&&n.length>0&&n.map((function(e,n){return a.a.createElement(Pe,{key:e[0]},a.a.createElement(We,null,e[0]),a.a.createElement(We,null,e[1].toFixed(4)),a.a.createElement(We,null,e[1]/c[n][1]>1?a.a.createElement(Ue,{increase:!0}," \ud83e\udc09"):a.a.createElement(Ue,{decrease:!0}," \ud83e\udc0b")),a.a.createElement(We,null,a.a.createElement("span",{role:"img","aria-label":"chart image"},a.a.createElement(Je,{to:x(e[0])},"\ud83d\udcc9"))))})))},Ae=function(){return a.a.createElement(P,null,a.a.createElement(Ee,{title:"Ostatnie stawki"}),a.a.createElement(Re,{body:a.a.createElement(_e,null)}))};function Le(){var e=Object(f.a)(["\n    display: flex;\n"]);return Le=function(){return e},e}var Ne=u.d.div(Le()),qe=function(e){var n=e.setTrend,t=function(e){var t=e.target.innerText;n("increase"===t?"increase":"decrease")};return a.a.createElement(Ne,null,a.a.createElement(ke,{trends:!0,onClick:t},"increase"),a.a.createElement(ke,{trends:!0,onClick:t},"decrease"))};function $e(){var e=Object(f.a)(["\n&:nth-child(even) {\n    background-color: #eee;\n};\n&:hover {\n    background-color: hsl(180deg 100% 25% / 50%);\n}\n"]);return $e=function(){return e},e}function Ge(){var e=Object(f.a)(["\n    border: 1px solid ",";\n    padding: 10px;\n    background-color: ",";\n    color: ",";\n"]);return Ge=function(){return e},e}function He(){var e=Object(f.a)(["\n    border: 1px solid ",";\n    padding: 10px;\n    text-align: center;\n"]);return He=function(){return e},e}function Qe(){var e=Object(f.a)(["\n        color: ",";\n    "]);return Qe=function(){return e},e}function Ve(){var e=Object(f.a)(["\n        color: ",";\n    "]);return Ve=function(){return e},e}function Xe(){var e=Object(f.a)(["\n    font-size: 25px;\n\n    ",";\n    ",";\n\n"]);return Xe=function(){return e},e}u.d.span(Xe(),(function(e){return e.increase&&Object(u.c)(Ve(),(function(e){return e.theme.colors.increase}))}),(function(e){return e.decrease&&Object(u.c)(Qe(),(function(e){return e.theme.colors.decrease}))}));var Ze=u.d.td(He(),(function(e){return e.theme.colors.black})),en=u.d.th(Ge(),(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.buttonBackground}),(function(e){return e.theme.colors.background})),nn=u.d.tr($e()),tn=function(e){var n=e.trend,t=Object(l.b)(),c=Object(l.c)(pe),o=Object(l.c)(me),u=o.ratesIncrease,i=o.ratesDecrease;return Object(r.useEffect)((function(){t(re())}),[t,c]),a.a.createElement(a.a.Fragment,null,a.a.createElement(nn,null,a.a.createElement(en,{scope:"col"},"Currency"),a.a.createElement(en,{scope:"col"},"Difference"),a.a.createElement(en,{scope:"col"},"%")),"increase"===n?void 0!==u&&u.length>0&&"increase"===n&&u.map((function(e){return a.a.createElement(nn,{key:e[0]},a.a.createElement(Ze,null,e[0]),a.a.createElement(Ze,null,(e[1]-e[2]).toFixed(4)),a.a.createElement(Ze,null,e[3].toFixed(4)))})):void 0!==i&&i.length>0&&"decrease"===n&&i.map((function(e){return a.a.createElement(nn,{key:e[0]},a.a.createElement(Ze,null,e[0]),a.a.createElement(Ze,null,(e[1]-e[2]).toFixed(4)),a.a.createElement(Ze,null,e[3].toFixed(4)))})))},rn=function(){var e=Object(r.useState)("increase"),n=Object(O.a)(e,2),t=n[0],c=n[1];return a.a.createElement(P,null,a.a.createElement(Ee,{title:"Trends"}),a.a.createElement(qe,{setTrend:c}),a.a.createElement(Re,{body:a.a.createElement(tn,{trend:t})}))},an=t(82),cn=function(){var e=Object(s.h)(),n=Object(l.b)(),t=Object(l.c)(de),c=Object(l.c)(pe),o=Object(l.c)((function(n){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"EUR",t=le(e),r=t.map((function(e){return[e[0],e[1][n]]}));return r}(n,e.id)})),u=o.map((function(e){return e[0]})),i=o.map((function(e){return e[1]}));return Object(r.useEffect)((function(){n(re())}),[n,c]),a.a.createElement(P,null,a.a.createElement(Ee,{title:"Ostatnie 30 dni"}),a.a.createElement("div",null,void 0!==o&&o.length>0&&"success"===t&&a.a.createElement(an.Bar,{data:{labels:u,datasets:[{label:e.id||"EUR",data:i,backgroundColor:new Array(i.length).fill("rgba(75,192,192,0.6"),borderWidth:4}]}})))};var on=function(){return a.a.createElement(i.a,{basename:"/currency-converter-react"},a.a.createElement(j,null),a.a.createElement(s.d,null,a.a.createElement(s.b,{path:x()},a.a.createElement(cn,null)),a.a.createElement(s.b,{path:"/converter"},a.a.createElement(ye,null)),a.a.createElement(s.b,{path:"/latest-rates"},a.a.createElement(Ae,null)),a.a.createElement(s.b,{path:"/chart"},a.a.createElement(cn,null)),a.a.createElement(s.b,{path:"/trends"},a.a.createElement(rn,null)),a.a.createElement(s.b,{path:"/"},a.a.createElement(s.a,{to:"/converter"}))))},un=t(83),ln=t.n(un);function sn(){var e=Object(f.a)(['\n    html {\n    box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n    box-sizing: inherit;\n    }\n\n    #root {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: center;\n    min-height: 100vh;\n    background-image: url("','");\n    background-size: cover;\n    background-position: center;\n    font-family: ',"\n    }\n"]);return sn=function(){return e},e}var fn=Object(u.b)(sn(),ln.a,(function(e){return e.theme.fonts.primaryFont})),mn=t(86),dn=t(20),bn=t.n(dn),pn=t(24),vn=t(84),gn=t(85),En=t.n(gn),hn=t(35),xn=t.n(hn),jn=xn()().format("YYYY-MM-DD"),On=xn()().subtract(30,"days").format("YYYY-MM-DD"),kn=function(){var e=Object(vn.a)(bn.a.mark((function e(n){var t;return bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,En.a.get("https://api.exchangeratesapi.io/history?start_at=".concat(On,"&end_at=").concat(jn,"&base=").concat(n));case 2:return t=e.sent,e.next=5,t.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),yn=bn.a.mark(zn),wn=bn.a.mark(Cn);function zn(){var e,n;return bn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(pn.c)(pe);case 3:return e=t.sent,t.next=6,Object(pn.a)(kn,e);case 6:return n=t.sent,t.next=9,Object(pn.b)(ae(n));case 9:t.next=16;break;case 11:return t.prev=11,t.t0=t.catch(0),console.error(t.t0),t.next=16,Object(pn.b)(ce());case 16:case"end":return t.stop()}}),yn,null,[[0,11]])}function Cn(){return bn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pn.d)(re.type,zn);case 2:case"end":return e.stop()}}),wn)}var Fn=Object(mn.a)(),Rn=Object(ee.a)({reducer:{rates:ve},middleware:[Fn]});Fn.run(Cn);var Sn=Rn;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:Sn},a.a.createElement(u.a,{theme:{colors:{background:"white",black:"black",buttonBackground:"teal",buttonText:"white",title:"teal",info:"rgb(107, 107, 107)",result:"teal",error:"crimson",increase:"green",decrease:"red"},breakpoints:{mobile:767},fonts:{primaryFont:"'Montserrat', sans-serif;",clockFont:"monospace;"}}},a.a.createElement(fn,null),a.a.createElement(on,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,n,t){e.exports=t.p+"static/media/dollar-5360047_1920.60d3c8b2.jpg"},87:function(e,n,t){e.exports=t(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.a59aeb58.chunk.js.map