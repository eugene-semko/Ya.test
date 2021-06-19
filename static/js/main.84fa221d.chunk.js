(this["webpackJsonpya-test"]=this["webpackJsonpya-test"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r,c,a=n(0),i=n.n(a),o=n(12),s=n.n(o),l=(n(22),n(23),n(24),n(25),n(9)),d=n(3),u=n(14),j=(n(27),n(7)),b=n(5),p=n(2),h=n.n(p),f=n(4),O=n(11),m=Object(O.b)("searchSlice/getData",function(){var e=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://openlibrary.org/search.json?q=".concat(t)).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(O.c)({name:"searchSlice",initialState:{currentData:{docs:null},status:null},extraReducers:(r={},Object(b.a)(r,m.pending.toString(),(function(e){e.status="loading"})),Object(b.a)(r,m.fulfilled.toString(),(function(e,t){var n=t.payload;e.currentData=n,e.status="success"})),Object(b.a)(r,m.rejected.toString(),(function(e){e.status="failed"})),r),reducers:{}}),x=n(1),g=function(e){var t=Object(j.b)(),n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return t(m(c))}),1e3);return function(){return clearTimeout(e)}}),[c]),Object(x.jsx)("div",{className:"SearchInput",children:Object(x.jsx)(u.a,{control:e.control,name:e.name,render:function(e){var t=e.field;return Object(x.jsx)("input",Object(l.a)(Object(l.a)({},t),{},{value:c,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",onChange:function(e){t.onChange(e),i(e.target.value)}}))}})})},_=(n(35),["title","titleId"]);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function S(e,t){var n=e.title,r=e.titleId,i=k(e,_);return a.createElement("svg",y({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?a.createElement("title",{id:r},n):null,c||(c=a.createElement("path",{d:"M9.97763 1.0681C9.71312 1.0678 9.45935 1.17275 9.2723 1.35979C9.08526 1.54683 8.98031 1.8006 8.98061 2.06512L8.97354 8.97355L2.05804 8.97355C1.79352 8.97325 1.53975 9.0782 1.35271 9.26524C1.16567 9.45228 1.06072 9.70605 1.06102 9.97057C1.06102 10.5221 1.50649 10.9676 2.05804 10.9676L8.97354 10.9676L8.97354 17.8831C8.97354 18.4346 9.41902 18.8801 9.97056 18.8801C10.5221 18.8801 10.9676 18.4346 10.9676 17.8831L10.9676 10.9676L17.8831 10.9676C18.4346 10.9676 18.8801 10.5221 18.8801 9.97057C18.8801 9.41903 18.4346 8.97355 17.8831 8.97355L10.9676 8.97355L10.9676 2.05805C10.9676 1.52064 10.515 1.0681 9.97763 1.0681Z",fill:"#BBC8D4"})))}var B,C=a.forwardRef(S),N=(n.p,n(36),function(e){var t;return Object(x.jsxs)("div",{className:"BookModal",children:[Object(x.jsxs)("div",{className:"BookModal__wrapper",children:[Object(x.jsx)("img",{src:"http://covers.openlibrary.org/b/olid/".concat(e.data.cover_edition_key,"-L.jpg")}),Object(x.jsxs)("div",{className:"BookModal__description",children:[Object(x.jsxs)("div",{className:"BookModal__bio",children:[Object(x.jsx)("p",{className:"BookModal__bio-author",children:null===(t=e.data.author_name)||void 0===t?void 0:t.map((function(t,n){return e.data.author_name.length!=n+1?t+", ":t}))}),Object(x.jsx)("p",{className:"BookModal__bio-title",children:e.data.title})]}),Object(x.jsxs)("div",{className:"BookModal__description-info",children:[Object(x.jsxs)("div",{className:"BookModal__description-info-left",children:[Object(x.jsx)("p",{children:"ISBN"}),Object(x.jsx)("p",{children:"\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c"}),Object(x.jsx)("p",{children:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"})]}),Object(x.jsxs)("div",{className:"BookModal__description-info-right",children:[Object(x.jsx)("p",{children:e.data.isbn[0]}),Object(x.jsx)("p",{children:e.data.publisher[0]}),Object(x.jsx)("p",{children:e.data.publish_date[0]})]})]})]})]}),Object(x.jsx)("div",{className:"BookModal__background",onClick:function(){return e.setIsVisible(!1)}})]})}),w=function(e){var t,n=Object(a.useState)(!1),r=Object(d.a)(n,2),c=r[0],o=r[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"BookSnippet",onClick:function(){return o(!0)},children:[Object(x.jsx)("img",{src:"http://covers.openlibrary.org/b/olid/".concat(e.data.cover_edition_key,"-M.jpg")}),Object(x.jsxs)("div",{className:"BookSnippet__description",children:[Object(x.jsx)("p",{className:"BookSnippet__description-author",children:null===(t=e.data.author_name)||void 0===t?void 0:t.map((function(t,n){return e.data.author_name.length!=n+1?t+", ":t}))}),Object(x.jsx)("p",{className:"BookSnippet__description-title",children:e.data.title})]}),Object(x.jsx)("div",{className:"BookSnippet__plus",children:i.a.createElement(C)})]}),c&&Object(x.jsx)(N,{data:e.data,setIsVisible:o})]})},M=(n(37),n(13)),L=n.n(M),E=["title","titleId"];function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function D(e,t){var n=e.title,r=e.titleId,c=P(e,E);return a.createElement("svg",I({width:26,height:25,viewBox:"0 0 26 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,B||(B=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.6986 15.0746H20.5215L24.9382 19.5121C25.3652 19.9391 25.3652 20.6371 24.9382 21.0641C24.5111 21.4912 23.8132 21.4912 23.3861 21.0641L18.959 16.6371V15.8141L18.6777 15.5225C17.2194 16.7725 15.2298 17.4183 13.1152 17.0641C10.2194 16.5746 7.9069 14.1579 7.55273 11.2412C7.01107 6.83497 10.7194 3.12664 15.1257 3.66831C18.0423 4.02247 20.459 6.33497 20.9486 9.23081C21.3027 11.3454 20.6569 13.335 19.4069 14.7933L19.6986 15.0746ZM9.58399 10.387C9.58399 12.9808 11.6777 15.0745 14.2715 15.0745C16.8652 15.0745 18.959 12.9808 18.959 10.387C18.959 7.7933 16.8652 5.69955 14.2715 5.69955C11.6777 5.69955 9.58399 7.7933 9.58399 10.387Z",fill:"white"})))}var F=a.forwardRef(D),R=(n.p,function(e){return Object(x.jsxs)("button",{className:L()({Button:!0,"Button--primary-search":"primary-search"==e.variant}),type:"submit",children:[i.a.createElement(F),e.children]})}),T=function(e){var t=Object(u.b)(),n=t.control,r=t.handleSubmit,c=Object(j.b)(),a=Object(j.c)((function(e){return e.searchSlice.status})),i=Object(j.c)((function(e){return e.searchSlice.currentData}));return Object(x.jsx)("div",{className:"Main",children:Object(x.jsxs)("div",{className:"Main__wrapper",children:[Object(x.jsxs)("form",{onSubmit:r((function(e){c(m(e.search))})),className:L()({Main__form:!0,"Main__form-center":(null==i.docs||0==i.docs.length)&&"loading"!=a||"loading"==a&&null==i.docs}),children:[Object(x.jsx)(g,{name:"search",control:n}),Object(x.jsx)(R,{variant:"primary-search",children:"\u041d\u0430\u0439\u0442\u0438"})]}),Object(x.jsx)("div",{className:"Main__search-result",children:null!=i.docs&&("loading"==a?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"Main__loading-title",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"}),Object(x.jsx)("div",{className:"BookSnippet BookSnippet--animated"}),Object(x.jsx)("div",{className:"BookSnippet BookSnippet--animated"}),Object(x.jsx)("div",{className:"BookSnippet BookSnippet--animated"}),Object(x.jsx)("div",{className:"BookSnippet BookSnippet--animated"})]}):"success"==a?i.docs.map((function(e,t){return Object(x.jsx)(w,{data:e},e.key)})):"")}),Object(x.jsx)("div",{className:"Main__search-result__bottom"})]})})};var V=function(){return Object(x.jsx)(T,{})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},J=n(6),q=Object(J.b)({searchSlice:v.reducer}),H=Object(O.a)({reducer:q});s.a.render(Object(x.jsx)(j.a,{store:H,children:Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(V,{})})}),document.getElementById("root")),Z()}},[[38,1,2]]]);
//# sourceMappingURL=main.84fa221d.chunk.js.map