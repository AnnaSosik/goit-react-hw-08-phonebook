"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[219],{1681:function(n,e,t){t.d(e,{t:function(){return A}});var r,o,i,a,u,l,c=t(9439),f=t(2791),s=t(6382),p=t(168),d=t(5867),h=d.ZP.form(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  background-color:rgba(226, 225, 225, 0.2);\n  border: 3px solid  #000000;\n  border-radius: 4px;\n"]))),v=d.ZP.label(o||(o=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  color: #000000;\n  font-size: 20px;\n"]))),b=d.ZP.input(i||(i=(0,p.Z)(["\n  padding: 8px 12px;\n  font: inherit;\n  cursor: pointer;\n"]))),m=d.ZP.button(a||(a=(0,p.Z)(["\n  padding: 8px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 3px solid  rgba(54, 54, 54, 0.98);\n  color: #000000;;\n  font-size: 20px;\n"]))),y=["title","titleId"];function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},x.apply(this,arguments)}function g(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function w(n,e){var t=n.title,r=n.titleId,o=g(n,y);return f.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":r},o),t?f.createElement("title",{id:r},t):null,u||(u=f.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),l||(l=f.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})))}var j=f.forwardRef(w),O=(t.p,t(9434)),k=t(4189),Z=t(3634),z=t(184),C=(0,s.x0)(),E=(0,s.x0)(),A=function(){var n=(0,f.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],o=(0,f.useState)(""),i=(0,c.Z)(o,2),a=i[0],u=i[1],l=(0,O.v9)(k.Af),s=(0,O.I0)(),p=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":u(o);break;default:return}};return(0,z.jsxs)(h,{onSubmit:function(n){n.preventDefault(),l.some((function(n){return n.name.toLowerCase().trim()===t.toLowerCase().trim()}))?alert("".concat(t," is already in contacts")):(s((0,Z.el)({name:t,number:a})),r(""),u(""))},children:[(0,z.jsxs)(v,{htmlFor:C,children:["Name",(0,z.jsx)(b,{type:"text",name:"name",value:t,onChange:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,z.jsxs)(v,{htmlFor:E,children:["Number",(0,z.jsx)(b,{type:"tel",name:"number",value:a,onChange:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsxs)(m,{type:"submit",children:[(0,z.jsx)(j,{fill:"#f08080",width:"25",height:"25"}),"Add contact"]})]})}},3581:function(n,e,t){t.d(e,{C:function(){return O}});var r,o,i,a,u,l=t(2791),c=t(168),f=t(5867),s=f.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 400px;\n  padding: 12px;\n  border-radius: 4px;\n  background-color: rgba(226, 225, 225, 0.2);\n  border: 3px solid  #000000;\n  list-style: none;\n"]))),p=f.ZP.li(o||(o=(0,c.Z)(["\n  background-color: #ffffff;\n  border: 3px solid rgba(54, 54, 54, 0.98);\n  padding: 10px;\n  border-radius: 4px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n"]))),d=f.ZP.button(i||(i=(0,c.Z)(["\n  padding: 4px 8px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px 8px;\n  border: 3px solid  #000000;\n"]))),h=["title","titleId"];function v(){return v=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},v.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function m(n,e){var t=n.title,r=n.titleId,o=b(n,h);return l.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:e,"aria-labelledby":r},o),t?l.createElement("title",{id:r},t):null,a||(a=l.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),u||(u=l.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var y=l.forwardRef(m),x=(t.p,t(9434)),g=t(4189),w=t(3634),j=t(184),O=function(){var n=(0,x.v9)(g.hF),e=(0,x.I0)();return(0,j.jsx)(s,{children:n.map((function(n){return(0,j.jsxs)(p,{children:[n.name+" : "+n.phone,(0,j.jsxs)(d,{type:"button",name:"delete",onClick:function(){return e((0,w._f)(n.id))},children:[(0,j.jsx)(y,{fill:"#000000",width:"20",height:"20"}),"delete"]})]},n.id)}))})}},4189:function(n,e,t){t.d(e,{Af:function(){return f},NH:function(){return c},hF:function(){return s}});var r="NOT_FOUND";var o=function(n,e){return n===e};function i(n,e){var t="object"===typeof e?e:{equalityCheck:e},i=t.equalityCheck,a=void 0===i?o:i,u=t.maxSize,l=void 0===u?1:u,c=t.resultEqualityCheck,f=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(a),s=1===l?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:r},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(f):function(n,e){var t=[];function o(n){var o=t.findIndex((function(t){return e(n,t.key)}));if(o>-1){var i=t[o];return o>0&&(t.splice(o,1),t.unshift(i)),i.value}return r}return{get:o,put:function(e,i){o(e)===r&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(l,f);function p(){var e=s.get(arguments);if(e===r){if(e=n.apply(null,arguments),c){var t=s.getEntries(),o=t.find((function(n){return c(n.value,e)}));o&&(e=o.value)}s.put(arguments,e)}return e}return p.clearCache=function(){return s.clear()},p}function a(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function u(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,l={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(l=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var f=l,s=f.memoizeOptions,p=void 0===s?t:s,d=Array.isArray(p)?p:[p],h=a(r),v=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(d)),b=n((function(){for(var n=[],e=h.length,t=0;t<e;t++)n.push(h[t].apply(null,arguments));return i=v.apply(null,n)}));return Object.assign(b,{resultFunc:c,memoizedResultFunc:v,dependencies:h,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),b};return o}var l=u(i),c=function(n){return n.contacts.isLoading},f=function(n){return n.contacts.items},s=l([f,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}))}}]);
//# sourceMappingURL=219.f5105bf4.chunk.js.map