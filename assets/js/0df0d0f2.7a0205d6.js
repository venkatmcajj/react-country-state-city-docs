(self.webpackChunkreact_country_state_city_docs=self.webpackChunkreact_country_state_city_docs||[]).push([[2469],{159:function(e,t,n){!function(e,t){"use strict";var n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}function a(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}var i=function(e){return a(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/regionsminified.json",e&&(t=e+"/regionsminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent()]}}))}))},s=function(e,t){return a(void 0,void 0,void 0,(function(){var n,r,a;return o(this,(function(o){switch(o.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",t&&(n=t+"/countriesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return r=o.sent(),a=r,e&&(a=a.filter((function(t){return t.region===e}))),[2,a]}}))}))},c=function(e){return a(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",e&&(t=e+"/countriesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent()]}}))}))},l=function(e){return a(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/languagesminified.json",e&&(t=e+"/languagesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent()]}}))}))},u=function(e,t){return a(void 0,void 0,void 0,(function(){var n,r,a;return o(this,(function(o){switch(o.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/statesminified.json",t&&(n=t+"/statesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return r=o.sent(),a=r.find((function(t){return t.id===e})),[2,a&&a.states?a.states:[]]}}))}))},d=function(e,t,n){return a(void 0,void 0,void 0,(function(){var r,a,i,s,c;return o(this,(function(o){switch(o.label){case 0:return r="https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json",n&&(r=n+"/citiesminified.json"),[4,fetch(r).then((function(e){return e.json()}))];case 1:return a=o.sent(),(i=a.find((function(t){return t.id===e})))?(s=i&&i.states?i.states:[],[2,(c=s.find((function(e){return e.id===t})))&&c.cities?c.cities:[]]):[2,[]]}}))}))},f=function(){return t.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},t.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},h=function(e){var a=e.placeHolder,o=e.options,i=e.onChange,s=e.inputClassName,c=e.onTextChange,l=e.defaultValue,u=e.showFlag,d=void 0===u||u,h=r(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","showFlag"]),m=t.useState(!1),p=m[0],g=m[1],v=t.useState(),x=v[0],y=v[1],j=t.useState(""),C=j[0],w=j[1],E=t.useRef(null),N=t.useRef(null);t.useEffect((function(){if(l)if("string"==typeof l)(e=o.find((function(e){return e.name===l})))&&y(e);else if("number"==typeof l){var e;(e=o.find((function(e){return e.id===l})))&&y(e)}else y(l)}),[l,o]),t.useEffect((function(){w(""),p&&E.current&&E.current.focus()}),[p]),t.useEffect((function(){var e=function(e){N.current&&!N.current.contains(e.target)&&g(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var b=function(e){return!!x&&x.id===e.id};return t.createElement("div",{className:"stdropdown-container"},t.createElement("div",{ref:N,onClick:function(){g(!0)},className:"stdropdown-input stsearch-box"},t.createElement("input",n({},h,{className:s,onChange:function(e){w(e.target.value),y(void 0),c&&c(e)},value:x?"".concat(d&&"emoji"in x?x.emoji+" ":"").concat(x.name):C||"",placeholder:a,ref:E})),t.createElement("div",{className:"stdropdown-tools"},t.createElement("div",{className:"stdropdown-tool"},t.createElement(f,null)))),p&&t.createElement("div",{className:"stdropdown-menu"},(C?o.filter((function(e){return e.name.toLowerCase().indexOf(C.toLowerCase())>=0})):o).map((function(e){return t.createElement("div",{onClick:function(){return function(e){y(e),i(e)}(e)},key:e.id,className:"".concat("stdropdown-item"," ").concat(b(e)&&"selected")},d&&t.createElement("span",{className:"stdropdown-flag"},"emoji"in e?e.emoji:""," "),e.name)}))))},m=function(){return t.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},t.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},p=function(e){var a=e.placeHolder,o=e.options,i=e.onChange,s=e.inputClassName,c=e.onTextChange,l=e.defaultValue,u=e.displayNative,d=r(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","displayNative"]),f=t.useState(!1),h=f[0],p=f[1],g=t.useState(),v=g[0],x=g[1],y=t.useState(""),j=y[0],C=y[1],w=t.useRef(null),E=t.useRef(null);t.useEffect((function(){if(l)if("string"==typeof l){var e=o.find((function(e){return e.name===l}));e&&x(e)}else x(l)}),[l,o]),t.useEffect((function(){C(""),h&&w.current&&w.current.focus()}),[h]),t.useEffect((function(){var e=function(e){E.current&&!E.current.contains(e.target)&&p(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var N=function(e){return!!v&&v.code===e.code};return t.createElement("div",{className:"stdropdown-container"},t.createElement("div",{ref:E,onClick:function(){p(!0)},className:"stdropdown-input stsearch-box"},t.createElement("input",n({},d,{className:s,onChange:function(e){C(e.target.value),x(void 0),c&&c(e)},value:v?"".concat(u?v.native:v.name):j||"",placeholder:a,ref:w})),t.createElement("div",{className:"stdropdown-tools"},t.createElement("div",{className:"stdropdown-tool"},t.createElement(m,null)))),h&&t.createElement("div",{className:"stdropdown-menu"},(j?o.filter((function(e){return e.name.toLowerCase().indexOf(j.toLowerCase())>=0||e.native.toLowerCase().indexOf(j.toLowerCase())>=0})):o).map((function(e){return t.createElement("div",{onClick:function(){return function(e){x(e),i(e)}(e)},key:e.code,className:"".concat("stdropdown-item"," ").concat(N(e)&&"selected")},u?e.native:e.name)}))))},g=function(){return t.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},t.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},v=function(e){var a=e.placeHolder,o=e.options,i=e.onChange,s=e.inputClassName,c=e.onTextChange,l=e.defaultValue,u=e.showFlag,d=void 0===u||u,f=r(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","showFlag"]),h=t.useState(!1),m=h[0],p=h[1],v=t.useState(),x=v[0],y=v[1],j=t.useState(""),C=j[0],w=j[1],E=t.useRef(null),N=t.useRef(null);t.useEffect((function(){if(l)if("string"==typeof l){var e=o.find((function(e){return e.name===l||e.phone_code===l}));e&&y(e)}else y(l)}),[l,o]),t.useEffect((function(){w(""),m&&E.current&&E.current.focus()}),[m]),t.useEffect((function(){var e=function(e){N.current&&!N.current.contains(e.target)&&p(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var b=function(e){return!!x&&x.id===e.id};return t.createElement("div",{className:"stdropdown-container"},t.createElement("div",{ref:N,onClick:function(){p(!0)},className:"stdropdown-input stsearch-box"},t.createElement("input",n({},f,{className:s,onChange:function(e){w(e.target.value),y(void 0),c&&c(e)},value:x?"".concat(d&&"emoji"in x?x.emoji+" ":"","+").concat(x.phone_code):C||"",placeholder:a,ref:E})),t.createElement("div",{className:"stdropdown-tools"},t.createElement("div",{className:"stdropdown-tool"},t.createElement(g,null)))),m&&t.createElement("div",{className:"stdropdown-menu"},(C?o.filter((function(e){return e.name.toLowerCase().indexOf(C.toLowerCase())>=0||e.phone_code.indexOf(C)>=0||("+"+e.phone_code).indexOf(C)>=0})):o).map((function(e){return t.createElement("div",{onClick:function(){return function(e){y(e),i(e)}(e)},key:e.id,className:"".concat("stdropdown-item"," ").concat(b(e)&&"selected")},d&&t.createElement("span",{className:"stdropdown-flag"},"emoji"in e?e.emoji:""," "),"+",e.phone_code)}))))};e.CitySelect=function(e){var a=e.containerClassName,o=e.inputClassName,i=e.onTextChange,s=e.defaultValue,c=e.onChange,l=e.countryid,u=e.stateid,f=e.placeHolder,m=e.src,p=r(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","countryid","stateid","placeHolder","src"]),g=t.useState([]),v=g[0],x=g[1];return t.useEffect((function(){l&&d(l,u,m).then((function(e){x(e)}))}),[l,u,m]),t.createElement(t.Fragment,null,t.createElement("div",{className:a,style:{position:"relative"}},t.createElement(h,n({},p,{placeHolder:f,options:v,onChange:function(e){c&&c(e)},onTextChange:i,defaultValue:s,inputClassName:o}))))},e.CountrySelect=function(e){var a=e.containerClassName,o=e.inputClassName,i=e.onTextChange,l=e.defaultValue,u=e.onChange,d=e.placeHolder,f=e.showFlag,m=e.region,p=e.src,g=r(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","showFlag","region","src"]),v=t.useState([]),x=v[0],y=v[1];return t.useEffect((function(){m?s(m,p).then((function(e){y(e)})):c(p).then((function(e){y(e)}))}),[m,p]),t.createElement(t.Fragment,null,t.createElement("div",{className:a,style:{position:"relative"}},t.createElement(h,n({},g,{placeHolder:d,options:x,onChange:function(e){u&&u(e)},showFlag:f,onTextChange:i,defaultValue:l,inputClassName:o}))))},e.GetAllCities=function(e){return a(void 0,void 0,void 0,(function(){var t,n,r,a,i,s,c,l,u,d,f,h;return o(this,(function(o){switch(o.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json",e&&(t=e+"/citiesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:for(n=o.sent(),r=[],a=0,i=n;a<i.length;a++)for(s=i[a],c=0,l=s.states;c<l.length;c++)for(u=l[c],d=0,f=u.cities;d<f.length;d++)h=f[d],r.push(h);return[2,r]}}))}))},e.GetCity=d,e.GetCountries=c,e.GetCountriesByRegion=s,e.GetLanguages=l,e.GetPhonecodes=function(e){return a(void 0,void 0,void 0,(function(){var t;return o(this,(function(n){switch(n.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",e&&(t=e+"/countriesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return[2,n.sent().map((function(e){return{id:e.id,name:e.name,phone_code:e.phone_code,region:e.region}}))]}}))}))},e.GetPhonecodesByRegion=function(e,t){return a(void 0,void 0,void 0,(function(){var n,r,a;return o(this,(function(o){switch(o.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",t&&(n=t+"/countriesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return r=o.sent(),a=r,e&&(a=a.filter((function(t){return t.region===e}))),[2,a.map((function(e){return{id:e.id,name:e.name,phone_code:e.phone_code,region:e.region}}))]}}))}))},e.GetRegions=i,e.GetState=u,e.LanguageSelect=function(e){var a=e.containerClassName,o=e.inputClassName,i=e.onTextChange,s=e.defaultValue,c=e.onChange,u=e.placeHolder,d=e.displayNative,f=e.src,h=r(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","displayNative","src"]),m=t.useState([]),g=m[0],v=m[1];return t.useEffect((function(){l(f).then((function(e){v(e)}))}),[f]),t.createElement(t.Fragment,null,t.createElement("div",{className:a,style:{position:"relative"}},t.createElement(p,n({},h,{placeHolder:u,options:g,onChange:function(e){c&&c(e)},displayNative:d,onTextChange:i,defaultValue:s,inputClassName:o}))))},e.PhonecodeSelect=function(e){var a=e.containerClassName,o=e.inputClassName,i=e.onTextChange,l=e.defaultValue,u=e.onChange,d=e.placeHolder,f=e.showFlag,h=e.region,m=e.src,p=r(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","showFlag","region","src"]),g=t.useState([]),x=g[0],y=g[1];return t.useEffect((function(){h?s(h,m).then((function(e){y(e)})):c(m).then((function(e){y(e)}))}),[h,m]),t.createElement(t.Fragment,null,t.createElement("div",{className:a,style:{position:"relative"}},t.createElement(v,n({},p,{placeHolder:d,options:x,onChange:function(e){u&&u(e)},showFlag:f,onTextChange:i,defaultValue:l,inputClassName:o}))))},e.RegionSelect=function(e){var a=e.containerClassName,o=e.inputClassName,s=e.onTextChange,c=e.defaultValue,l=e.onChange,u=e.placeHolder,d=e.src,f=r(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","src"]),m=t.useState([]),p=m[0],g=m[1];return t.useEffect((function(){i(d).then((function(e){g(e)}))}),[d]),t.createElement(t.Fragment,null,t.createElement("div",{className:a,style:{position:"relative"}},t.createElement(h,n({},f,{placeHolder:u,options:p,onChange:function(e){l&&l(e)},onTextChange:s,defaultValue:c,inputClassName:o}))))},e.StateSelect=function(e){var a=e.containerClassName,o=e.inputClassName,i=e.onTextChange,s=e.defaultValue,c=e.onChange,l=e.countryid,d=e.placeHolder,f=e.src,m=r(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","countryid","placeHolder","src"]),p=t.useState([]),g=p[0],v=p[1];return t.useEffect((function(){l&&u(l,f).then((function(e){v(e)}))}),[l,f]),t.createElement(t.Fragment,null,t.createElement("div",{className:a,style:{position:"relative"}},t.createElement(h,n({},m,{placeHolder:d,options:g,onChange:function(e){c&&c(e)},onTextChange:i,defaultValue:s,inputClassName:o}))))}}(t,n(6540))},1889:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>f});const r=JSON.parse('{"id":"methods/getregions","title":"GetRegions","description":"GetRegions()","source":"@site/docs/methods/getregions.mdx","sourceDirName":"methods","slug":"/methods/getregions","permalink":"/react-country-state-city-docs/latest/methods/getregions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GetRegions","sidebar_label":"GetRegions"},"sidebar":"docs","previous":{"title":"GetLanguages","permalink":"/react-country-state-city-docs/latest/methods/getlanguages"},"next":{"title":"GetPhonecodes","permalink":"/react-country-state-city-docs/latest/methods/getphonecodes"}}');var a=n(4848),o=n(8453),i=n(6540),s=n(159);const c=function(){const[e,t]=(0,i.useState)(null),[n,r]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(0,s.GetRegions)().then((e=>{r(e)}))}),[]),(0,a.jsx)("div",{style:{border:"1px solid gray",borderRadius:"8px",padding:"16px",marginTop:"16px"},children:(0,a.jsxs)("div",{style:{maxWidth:"600px",margin:"auto"},children:[(0,a.jsx)("h6",{style:{marginTop:10,marginBottom:5},children:"Region"}),(0,a.jsxs)("select",{onChange:e=>t(e.target.value),value:e,style:{width:"100%",minHeight:40},children:[(0,a.jsx)("option",{value:"",children:"-- Select Region --"}),n.map((e=>(0,a.jsx)("option",{value:e.name,children:e.name},e.id)))]})]})})},l={title:"GetRegions",sidebar_label:"GetRegions"},u="",d={},f=[{value:"GetRegions()",id:"getregions",level:2},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Results",id:"results",level:3},{value:"Sample",id:"sample",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:""})}),"\n",(0,a.jsx)(t.h2,{id:"getregions",children:"GetRegions()"}),"\n","\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The GetRegions function in react-country-state-city fetches a list of ",(0,a.jsx)(t.a,{href:"/latest/types/region",children:(0,a.jsx)(t.strong,{children:"region"})})," objects. The async function returns an array of ",(0,a.jsx)(t.a,{href:"/latest/types/region",children:(0,a.jsx)(t.strong,{children:"region"})})," objects, each containing details such as name and unique id."]})}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import React, { useEffect } from "react";\r\nimport { GetRegions } from "react-country-state-city";\r\nexport default function App() {\r\n  useEffect(() => {\r\n    GetRegions().then((_regions) => console.log(_regions));\r\n  }, []);\r\n  return <div>...</div>;\r\n}\n'})}),"\n",(0,a.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Required"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.strong,{children:"src"})}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"string"})}),(0,a.jsx)(t.td,{children:"Empty"}),(0,a.jsx)(t.td,{children:"\u274c"}),(0,a.jsxs)(t.td,{children:["URL where data files are hosted (e.g., ",(0,a.jsx)(t.code,{children:"https://venkatmcajj.github.io/react-country-state-city/"}),")"]})]})})]}),"\n",(0,a.jsx)(t.h3,{id:"results",children:"Results"}),"\n",(0,a.jsxs)(t.p,{children:["Returns a ",(0,a.jsx)(t.a,{href:"/latest/types/region",children:(0,a.jsx)(t.strong,{children:"region"})})," object lists."]}),"\n",(0,a.jsx)(t.h3,{id:"sample",children:"Sample"}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Show Code"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import React, { useState, useEffect } from "react";\r\nimport { GetRegions } from "react-country-state-city";\r\n\r\nfunction App() {\r\n  const [region, setRegion] = useState(null);\r\n  const [regionList, setRegionList] = useState([]);\r\n  useEffect(() => {\r\n    GetRegions().then((result) => {\r\n      setRegionList(result);\r\n    });\r\n  }, []);\r\n  return (\r\n    <div\r\n      style={{\r\n        border: "1px solid gray",\r\n        borderRadius: "8px",\r\n        padding: "16px",\r\n        marginTop: "16px",\r\n      }}\r\n    >\r\n      <div style={{ maxWidth: "600px", margin: "auto" }}>\r\n        <h6 style={{ marginTop: 10, marginBottom: 5 }}>Region</h6>\r\n        <select\r\n          onChange={(e) => setRegion(e.target.value)}\r\n          value={region}\r\n          style={{ width: "100%", minHeight: 40 }}\r\n        >\r\n          <option value={""}>-- Select Region --</option>\r\n          {regionList.map((_region) => (\r\n            <option key={_region.id} value={_region.name}>\r\n              {_region.name}\r\n            </option>\r\n          ))}\r\n        </select>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\r\n\n'})})]}),"\n",(0,a.jsx)(c,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,x:()=>s});var r=n(6540);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);