(self.webpackChunkreact_country_state_city_docs=self.webpackChunkreact_country_state_city_docs||[]).push([[209],{159:function(e,t,n){!function(e,t){"use strict";var n=function(){return n=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)};function a(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}function r(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function s(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((a=a.apply(e,t||[])).next())}))}function o(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(n=1,a&&(r=2&s[0]?a.return:s[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,s[1])).done)return r;switch(a=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,a=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){i.label=s[1];break}if(6===s[0]&&i.label<r[1]){i.label=r[1],r=s;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(s);break}r[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],a=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var i=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/regionsminified.json",e&&(t=e+"/regionsminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent()]}}))}))},s=function(e,t){return r(void 0,void 0,void 0,(function(){var n,a,r;return o(this,(function(o){switch(o.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",t&&(n=t+"/countriesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return a=o.sent(),r=a,e&&(r=r.filter((function(t){return t.region===e}))),[2,r]}}))}))},c=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",e&&(t=e+"/countriesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent()]}}))}))},u=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/languagesminified.json",e&&(t=e+"/languagesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent()]}}))}))},l=function(e,t){return r(void 0,void 0,void 0,(function(){var n,a,r;return o(this,(function(o){switch(o.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/statesminified.json",t&&(n=t+"/statesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return a=o.sent(),r=a.find((function(t){return t.id===e})),[2,r&&r.states?r.states:[]]}}))}))},d=function(e,t,n){return r(void 0,void 0,void 0,(function(){var a,r,i,s,c;return o(this,(function(o){switch(o.label){case 0:return a="https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json",n&&(a=n+"/citiesminified.json"),[4,fetch(a).then((function(e){return e.json()}))];case 1:return r=o.sent(),(i=r.find((function(t){return t.id===e})))?(s=i&&i.states?i.states:[],[2,(c=s.find((function(e){return e.id===t})))&&c.cities?c.cities:[]]):[2,[]]}}))}))},f=function(){return t.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},t.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},h=function(e){var r=e.placeHolder,o=e.options,i=e.onChange,s=e.inputClassName,c=e.onTextChange,u=e.defaultValue,l=e.showFlag,d=void 0===l||l,h=a(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","showFlag"]),m=t.useState(!1),g=m[0],p=m[1],v=t.useState(),y=v[0],x=v[1],j=t.useState(""),C=j[0],w=j[1],E=t.useRef(null),N=t.useRef(null);t.useEffect((function(){if(u)if("string"==typeof u)(e=o.find((function(e){return e.name===u})))&&x(e);else if("number"==typeof u){var e;(e=o.find((function(e){return e.id===u})))&&x(e)}else x(u)}),[u,o]),t.useEffect((function(){w(""),g&&E.current&&E.current.focus()}),[g]),t.useEffect((function(){var e=function(e){N.current&&!N.current.contains(e.target)&&p(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var b=function(e){return!!y&&y.id===e.id};return t.createElement("div",{className:"stdropdown-container"},t.createElement("div",{ref:N,onClick:function(){p(!0)},className:"stdropdown-input stsearch-box"},t.createElement("input",n({},h,{className:s,onChange:function(e){w(e.target.value),x(void 0),c&&c(e)},value:y?"".concat(d&&"emoji"in y?y.emoji+" ":"").concat(y.name):C||"",placeholder:r,ref:E})),t.createElement("div",{className:"stdropdown-tools"},t.createElement("div",{className:"stdropdown-tool"},t.createElement(f,null)))),g&&t.createElement("div",{className:"stdropdown-menu"},(C?o.filter((function(e){return e.name.toLowerCase().indexOf(C.toLowerCase())>=0})):o).map((function(e){return t.createElement("div",{onClick:function(){return function(e){x(e),i(e)}(e)},key:e.id,className:"".concat("stdropdown-item"," ").concat(b(e)&&"selected")},d&&t.createElement("span",{className:"stdropdown-flag"},"emoji"in e?e.emoji:""," "),e.name)}))))},m=function(){return t.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},t.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},g=function(e){var r=e.placeHolder,o=e.options,i=e.onChange,s=e.inputClassName,c=e.onTextChange,u=e.defaultValue,l=e.displayNative,d=a(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","displayNative"]),f=t.useState(!1),h=f[0],g=f[1],p=t.useState(),v=p[0],y=p[1],x=t.useState(""),j=x[0],C=x[1],w=t.useRef(null),E=t.useRef(null);t.useEffect((function(){if(u)if("string"==typeof u){var e=o.find((function(e){return e.name===u}));e&&y(e)}else y(u)}),[u,o]),t.useEffect((function(){C(""),h&&w.current&&w.current.focus()}),[h]),t.useEffect((function(){var e=function(e){E.current&&!E.current.contains(e.target)&&g(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var N=function(e){return!!v&&v.code===e.code};return t.createElement("div",{className:"stdropdown-container"},t.createElement("div",{ref:E,onClick:function(){g(!0)},className:"stdropdown-input stsearch-box"},t.createElement("input",n({},d,{className:s,onChange:function(e){C(e.target.value),y(void 0),c&&c(e)},value:v?"".concat(l?v.native:v.name):j||"",placeholder:r,ref:w})),t.createElement("div",{className:"stdropdown-tools"},t.createElement("div",{className:"stdropdown-tool"},t.createElement(m,null)))),h&&t.createElement("div",{className:"stdropdown-menu"},(j?o.filter((function(e){return e.name.toLowerCase().indexOf(j.toLowerCase())>=0||e.native.toLowerCase().indexOf(j.toLowerCase())>=0})):o).map((function(e){return t.createElement("div",{onClick:function(){return function(e){y(e),i(e)}(e)},key:e.code,className:"".concat("stdropdown-item"," ").concat(N(e)&&"selected")},l?e.native:e.name)}))))},p=function(){return t.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},t.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},v=function(e){var r=e.placeHolder,o=e.options,i=e.onChange,s=e.inputClassName,c=e.onTextChange,u=e.defaultValue,l=e.showFlag,d=void 0===l||l,f=a(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","showFlag"]),h=t.useState(!1),m=h[0],g=h[1],v=t.useState(),y=v[0],x=v[1],j=t.useState(""),C=j[0],w=j[1],E=t.useRef(null),N=t.useRef(null);t.useEffect((function(){if(u)if("string"==typeof u){var e=o.find((function(e){return e.name===u||e.phone_code===u}));e&&x(e)}else x(u)}),[u,o]),t.useEffect((function(){w(""),m&&E.current&&E.current.focus()}),[m]),t.useEffect((function(){var e=function(e){N.current&&!N.current.contains(e.target)&&g(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var b=function(e){return!!y&&y.id===e.id};return t.createElement("div",{className:"stdropdown-container"},t.createElement("div",{ref:N,onClick:function(){g(!0)},className:"stdropdown-input stsearch-box"},t.createElement("input",n({},f,{className:s,onChange:function(e){w(e.target.value),x(void 0),c&&c(e)},value:y?"".concat(d&&"emoji"in y?y.emoji+" ":"","+").concat(y.phone_code):C||"",placeholder:r,ref:E})),t.createElement("div",{className:"stdropdown-tools"},t.createElement("div",{className:"stdropdown-tool"},t.createElement(p,null)))),m&&t.createElement("div",{className:"stdropdown-menu"},(C?o.filter((function(e){return e.name.toLowerCase().indexOf(C.toLowerCase())>=0||e.phone_code.indexOf(C)>=0||("+"+e.phone_code).indexOf(C)>=0})):o).map((function(e){return t.createElement("div",{onClick:function(){return function(e){x(e),i(e)}(e)},key:e.id,className:"".concat("stdropdown-item"," ").concat(b(e)&&"selected")},d&&t.createElement("span",{className:"stdropdown-flag"},"emoji"in e?e.emoji:""," "),"+",e.phone_code)}))))};e.CitySelect=function(e){var r=e.containerClassName,o=e.inputClassName,i=e.onTextChange,s=e.defaultValue,c=e.onChange,u=e.countryid,l=e.stateid,f=e.placeHolder,m=e.src,g=a(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","countryid","stateid","placeHolder","src"]),p=t.useState([]),v=p[0],y=p[1];return t.useEffect((function(){u&&d(u,l,m).then((function(e){y(e)}))}),[u,l,m]),t.createElement(t.Fragment,null,t.createElement("div",{className:r,style:{position:"relative"}},t.createElement(h,n({},g,{placeHolder:f,options:v,onChange:function(e){c&&c(e)},onTextChange:i,defaultValue:s,inputClassName:o}))))},e.CountrySelect=function(e){var r=e.containerClassName,o=e.inputClassName,i=e.onTextChange,u=e.defaultValue,l=e.onChange,d=e.placeHolder,f=e.showFlag,m=e.region,g=e.src,p=a(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","showFlag","region","src"]),v=t.useState([]),y=v[0],x=v[1];return t.useEffect((function(){m?s(m,g).then((function(e){x(e)})):c(g).then((function(e){x(e)}))}),[m,g]),t.createElement(t.Fragment,null,t.createElement("div",{className:r,style:{position:"relative"}},t.createElement(h,n({},p,{placeHolder:d,options:y,onChange:function(e){l&&l(e)},showFlag:f,onTextChange:i,defaultValue:u,inputClassName:o}))))},e.GetAllCities=function(e){return r(void 0,void 0,void 0,(function(){var t,n,a,r,i,s,c,u,l,d,f,h;return o(this,(function(o){switch(o.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json",e&&(t=e+"/citiesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:for(n=o.sent(),a=[],r=0,i=n;r<i.length;r++)for(s=i[r],c=0,u=s.states;c<u.length;c++)for(l=u[c],d=0,f=l.cities;d<f.length;d++)h=f[d],a.push(h);return[2,a]}}))}))},e.GetCity=d,e.GetCountries=c,e.GetCountriesByRegion=s,e.GetLanguages=u,e.GetPhonecodes=function(e){return r(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",e&&(t=e+"/countriesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent().map((function(e){return{id:e.id,name:e.name,phone_code:e.phone_code,region:e.region}}))]}}))}))},e.GetPhonecodesByRegion=function(e,t){return r(void 0,void 0,void 0,(function(){var n,a,r;return o(this,(function(o){switch(o.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",t&&(n=t+"/countriesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return a=o.sent(),r=a,e&&(r=r.filter((function(t){return t.region===e}))),[2,r.map((function(e){return{id:e.id,name:e.name,phone_code:e.phone_code,region:e.region}}))]}}))}))},e.GetRegions=i,e.GetState=l,e.LanguageSelect=function(e){var r=e.containerClassName,o=e.inputClassName,i=e.onTextChange,s=e.defaultValue,c=e.onChange,l=e.placeHolder,d=e.displayNative,f=e.src,h=a(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","displayNative","src"]),m=t.useState([]),p=m[0],v=m[1];return t.useEffect((function(){u(f).then((function(e){v(e)}))}),[f]),t.createElement(t.Fragment,null,t.createElement("div",{className:r,style:{position:"relative"}},t.createElement(g,n({},h,{placeHolder:l,options:p,onChange:function(e){c&&c(e)},displayNative:d,onTextChange:i,defaultValue:s,inputClassName:o}))))},e.PhonecodeSelect=function(e){var r=e.containerClassName,o=e.inputClassName,i=e.onTextChange,u=e.defaultValue,l=e.onChange,d=e.placeHolder,f=e.showFlag,h=e.region,m=e.src,g=a(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","showFlag","region","src"]),p=t.useState([]),y=p[0],x=p[1];return t.useEffect((function(){h?s(h,m).then((function(e){x(e)})):c(m).then((function(e){x(e)}))}),[h,m]),t.createElement(t.Fragment,null,t.createElement("div",{className:r,style:{position:"relative"}},t.createElement(v,n({},g,{placeHolder:d,options:y,onChange:function(e){l&&l(e)},showFlag:f,onTextChange:i,defaultValue:u,inputClassName:o}))))},e.RegionSelect=function(e){var r=e.containerClassName,o=e.inputClassName,s=e.onTextChange,c=e.defaultValue,u=e.onChange,l=e.placeHolder,d=e.src,f=a(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","src"]),m=t.useState([]),g=m[0],p=m[1];return t.useEffect((function(){i(d).then((function(e){p(e)}))}),[d]),t.createElement(t.Fragment,null,t.createElement("div",{className:r,style:{position:"relative"}},t.createElement(h,n({},f,{placeHolder:l,options:g,onChange:function(e){u&&u(e)},onTextChange:s,defaultValue:c,inputClassName:o}))))},e.StateSelect=function(e){var r=e.containerClassName,o=e.inputClassName,i=e.onTextChange,s=e.defaultValue,c=e.onChange,u=e.countryid,d=e.placeHolder,f=e.src,m=a(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","countryid","placeHolder","src"]),g=t.useState([]),p=g[0],v=g[1];return t.useEffect((function(){u&&l(u,f).then((function(e){v(e)}))}),[u,f]),t.createElement(t.Fragment,null,t.createElement("div",{className:r,style:{position:"relative"}},t.createElement(h,n({},m,{placeHolder:d,options:p,onChange:function(e){c&&c(e)},onTextChange:i,defaultValue:s,inputClassName:o}))))}}(t,n(6540))},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>s});var a=n(6540);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}},9888:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>a,toc:()=>f});const a=JSON.parse('{"id":"methods/getlanguages","title":"GetLanguages","description":"GetLanguages()","source":"@site/docs/methods/getlanguages.mdx","sourceDirName":"methods","slug":"/methods/getlanguages","permalink":"/react-country-state-city-docs/latest/methods/getlanguages","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GetLanguages","sidebar_label":"GetLanguages"},"sidebar":"docs","previous":{"title":"GetCity","permalink":"/react-country-state-city-docs/latest/methods/getcity"},"next":{"title":"GetRegions","permalink":"/react-country-state-city-docs/latest/methods/getregions"}}');var r=n(4848),o=n(8453),i=n(6540),s=n(159);const c=function(){const[e,t]=(0,i.useState)(null),[n,a]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(0,s.GetLanguages)().then((e=>{a(e)}))}),[]),(0,r.jsx)("div",{style:{border:"1px solid gray",borderRadius:"8px",padding:"16px",marginTop:"16px"},children:(0,r.jsxs)("div",{style:{maxWidth:"600px",margin:"auto"},children:[(0,r.jsx)("h6",{style:{marginTop:10,marginBottom:5},children:"Language"}),(0,r.jsxs)("select",{onChange:e=>t(e.target.value),value:e,style:{width:"100%",minHeight:40},children:[(0,r.jsx)("option",{value:"",children:"-- Select Language --"}),n.map((e=>(0,r.jsx)("option",{value:e.name,children:e.name},e.name)))]})]})})},u={title:"GetLanguages",sidebar_label:"GetLanguages"},l="",d={},f=[{value:"GetLanguages()",id:"getlanguages",level:2},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Results",id:"results",level:3},{value:"Sample",id:"sample",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:""})}),"\n",(0,r.jsx)(t.h2,{id:"getlanguages",children:"GetLanguages()"}),"\n","\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"GetLanguages"})," function in react-country-state-city fetches a list of ",(0,r.jsx)(t.a,{href:"/latest/types/language",children:(0,r.jsx)(t.strong,{children:"language"})})," objects. The async function returns an array of ",(0,r.jsx)(t.a,{href:"/latest/types/language",children:(0,r.jsx)(t.strong,{children:"language"})})," objects, each containing details such as name, code, and native."]})}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import React, { useEffect } from "react";\r\nimport { GetLanguages } from "react-country-state-city";\r\nexport default function App() {\r\n  useEffect(() => {\r\n    GetLanguages().then((_languages) => console.log(_languages));\r\n  }, []);\r\n  return <div>...</div>;\r\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"src"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:"Empty"}),(0,r.jsx)(t.td,{children:"\u274c"}),(0,r.jsxs)(t.td,{children:["URL where data files are hosted (e.g., ",(0,r.jsx)(t.code,{children:"https://venkatmcajj.github.io/react-country-state-city/"}),")"]})]})})]}),"\n",(0,r.jsx)(t.h3,{id:"results",children:"Results"}),"\n",(0,r.jsxs)(t.p,{children:["Returns a ",(0,r.jsx)(t.a,{href:"/latest/types/language",children:(0,r.jsx)(t.strong,{children:"language"})})," object lists."]}),"\n",(0,r.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"Show Code"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import React, { useState, useEffect } from "react";\r\nimport { GetLanguages } from "react-country-state-city";\r\n\r\nfunction App() {\r\n  const [language, setLanguage] = useState(null);\r\n  const [languageList, setLanguageList] = useState([]);\r\n  useEffect(() => {\r\n    GetLanguages().then((result) => {\r\n      setLanguageList(result);\r\n    });\r\n  }, []);\r\n  return (\r\n    <div\r\n      style={{\r\n        border: "1px solid gray",\r\n        borderRadius: "8px",\r\n        padding: "16px",\r\n        marginTop: "16px",\r\n      }}\r\n    >\r\n      <div style={{ maxWidth: "600px", margin: "auto" }}>\r\n        <h6 style={{ marginTop: 10, marginBottom: 5 }}>Language</h6>\r\n        <select\r\n          onChange={(e) => setLanguage(e.target.value)}\r\n          value={language}\r\n          style={{ width: "100%", minHeight: 40 }}\r\n        >\r\n          <option value={""}>-- Select Language --</option>\r\n          {languageList.map((_lan) => (\r\n            <option key={_lan.name} value={_lan.name}>\r\n              {_lan.name}\r\n            </option>\r\n          ))}\r\n        </select>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\r\n\n'})})]}),"\n",(0,r.jsx)(c,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);