(self.webpackChunkreact_country_state_city_docs=self.webpackChunkreact_country_state_city_docs||[]).push([[302],{159:function(e,n,t){!function(e,n){"use strict";var t=function(){return t=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},t.apply(this,arguments)};function o(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}function r(e,n,t,o){return new(t||(t=Promise))((function(r,c){function i(e){try{s(o.next(e))}catch(e){c(e)}}function a(e){try{s(o.throw(e))}catch(e){c(e)}}function s(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,a)}s((o=o.apply(e,n||[])).next())}))}function c(e,n){var t,o,r,c,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function a(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;c&&(c=0,a[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],o=0}finally{t=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}var i=function(e){return r(void 0,void 0,void 0,(function(){var n;return c(this,(function(t){switch(t.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/regionsminified.json",e&&(n=e+"/regionsminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return[2,t.sent()]}}))}))},a=function(e,n){return r(void 0,void 0,void 0,(function(){var t,o,r;return c(this,(function(c){switch(c.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",n&&(t=n+"/countriesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return o=c.sent(),r=o,e&&(r=r.filter((function(n){return n.region===e}))),[2,r]}}))}))},s=function(e){return r(void 0,void 0,void 0,(function(){var n;return c(this,(function(t){switch(t.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",e&&(n=e+"/countriesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return[2,t.sent()]}}))}))},l=function(e){return r(void 0,void 0,void 0,(function(){var n;return c(this,(function(t){switch(t.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/languagesminified.json",e&&(n=e+"/languagesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return[2,t.sent()]}}))}))},d=function(e,n){return r(void 0,void 0,void 0,(function(){var t,o,r;return c(this,(function(c){switch(c.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/statesminified.json",n&&(t=n+"/statesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return o=c.sent(),r=o.find((function(n){return n.id===e})),[2,r&&r.states?r.states:[]]}}))}))},u=function(e,n,t){return r(void 0,void 0,void 0,(function(){var o,r,i,a,s;return c(this,(function(c){switch(c.label){case 0:return o="https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json",t&&(o=t+"/citiesminified.json"),[4,fetch(o).then((function(e){return e.json()}))];case 1:return r=c.sent(),(i=r.find((function(n){return n.id===e})))?(a=i&&i.states?i.states:[],[2,(s=a.find((function(e){return e.id===n})))&&s.cities?s.cities:[]]):[2,[]]}}))}))},h=function(){return n.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},n.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},f=function(e){var r=e.placeHolder,c=e.options,i=e.onChange,a=e.inputClassName,s=e.onTextChange,l=e.defaultValue,d=e.showFlag,u=void 0===d||d,f=o(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","showFlag"]),p=n.useState(!1),m=p[0],g=p[1],x=n.useState(),j=x[0],v=x[1],C=n.useState(""),y=C[0],N=C[1],w=n.useRef(null),E=n.useRef(null);n.useEffect((function(){if(l)if("string"==typeof l)(e=c.find((function(e){return e.name===l})))&&v(e);else if("number"==typeof l){var e;(e=c.find((function(e){return e.id===l})))&&v(e)}else v(l)}),[l,c]),n.useEffect((function(){N(""),m&&w.current&&w.current.focus()}),[m]),n.useEffect((function(){var e=function(e){E.current&&!E.current.contains(e.target)&&g(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var b=function(e){return!!j&&j.id===e.id};return n.createElement("div",{className:"stdropdown-container"},n.createElement("div",{ref:E,onClick:function(){g(!0)},className:"stdropdown-input stsearch-box"},n.createElement("input",t({},f,{className:a,onChange:function(e){N(e.target.value),v(void 0),s&&s(e)},value:j?"".concat(u&&"emoji"in j?j.emoji+" ":"").concat(j.name):y||"",placeholder:r,ref:w})),n.createElement("div",{className:"stdropdown-tools"},n.createElement("div",{className:"stdropdown-tool"},n.createElement(h,null)))),m&&n.createElement("div",{className:"stdropdown-menu"},(y?c.filter((function(e){return e.name.toLowerCase().indexOf(y.toLowerCase())>=0})):c).map((function(e){return n.createElement("div",{onClick:function(){return function(e){v(e),i(e)}(e)},key:e.id,className:"".concat("stdropdown-item"," ").concat(b(e)&&"selected")},u&&n.createElement("span",{className:"stdropdown-flag"},"emoji"in e?e.emoji:""," "),e.name)}))))},p=function(){return n.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},n.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},m=function(e){var r=e.placeHolder,c=e.options,i=e.onChange,a=e.inputClassName,s=e.onTextChange,l=e.defaultValue,d=e.displayNative,u=o(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","displayNative"]),h=n.useState(!1),f=h[0],m=h[1],g=n.useState(),x=g[0],j=g[1],v=n.useState(""),C=v[0],y=v[1],N=n.useRef(null),w=n.useRef(null);n.useEffect((function(){if(l)if("string"==typeof l){var e=c.find((function(e){return e.name===l}));e&&j(e)}else j(l)}),[l,c]),n.useEffect((function(){y(""),f&&N.current&&N.current.focus()}),[f]),n.useEffect((function(){var e=function(e){w.current&&!w.current.contains(e.target)&&m(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var E=function(e){return!!x&&x.code===e.code};return n.createElement("div",{className:"stdropdown-container"},n.createElement("div",{ref:w,onClick:function(){m(!0)},className:"stdropdown-input stsearch-box"},n.createElement("input",t({},u,{className:a,onChange:function(e){y(e.target.value),j(void 0),s&&s(e)},value:x?"".concat(d?x.native:x.name):C||"",placeholder:r,ref:N})),n.createElement("div",{className:"stdropdown-tools"},n.createElement("div",{className:"stdropdown-tool"},n.createElement(p,null)))),f&&n.createElement("div",{className:"stdropdown-menu"},(C?c.filter((function(e){return e.name.toLowerCase().indexOf(C.toLowerCase())>=0||e.native.toLowerCase().indexOf(C.toLowerCase())>=0})):c).map((function(e){return n.createElement("div",{onClick:function(){return function(e){j(e),i(e)}(e)},key:e.code,className:"".concat("stdropdown-item"," ").concat(E(e)&&"selected")},d?e.native:e.name)}))))},g=function(){return n.createElement("svg",{height:"20",width:"20",viewBox:"0 0 20 20"},n.createElement("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},x=function(e){var r=e.placeHolder,c=e.options,i=e.onChange,a=e.inputClassName,s=e.onTextChange,l=e.defaultValue,d=e.showFlag,u=void 0===d||d,h=o(e,["placeHolder","options","onChange","inputClassName","onTextChange","defaultValue","showFlag"]),f=n.useState(!1),p=f[0],m=f[1],x=n.useState(),j=x[0],v=x[1],C=n.useState(""),y=C[0],N=C[1],w=n.useRef(null),E=n.useRef(null);n.useEffect((function(){if(l)if("string"==typeof l){var e=c.find((function(e){return e.name===l||e.phone_code===l}));e&&v(e)}else v(l)}),[l,c]),n.useEffect((function(){N(""),p&&w.current&&w.current.focus()}),[p]),n.useEffect((function(){var e=function(e){E.current&&!E.current.contains(e.target)&&m(!1)};return window.addEventListener("click",e),function(){window.removeEventListener("click",e)}}));var b=function(e){return!!j&&j.id===e.id};return n.createElement("div",{className:"stdropdown-container"},n.createElement("div",{ref:E,onClick:function(){m(!0)},className:"stdropdown-input stsearch-box"},n.createElement("input",t({},h,{className:a,onChange:function(e){N(e.target.value),v(void 0),s&&s(e)},value:j?"".concat(u&&"emoji"in j?j.emoji+" ":"","+").concat(j.phone_code):y||"",placeholder:r,ref:w})),n.createElement("div",{className:"stdropdown-tools"},n.createElement("div",{className:"stdropdown-tool"},n.createElement(g,null)))),p&&n.createElement("div",{className:"stdropdown-menu"},(y?c.filter((function(e){return e.name.toLowerCase().indexOf(y.toLowerCase())>=0||e.phone_code.indexOf(y)>=0||("+"+e.phone_code).indexOf(y)>=0})):c).map((function(e){return n.createElement("div",{onClick:function(){return function(e){v(e),i(e)}(e)},key:e.id,className:"".concat("stdropdown-item"," ").concat(b(e)&&"selected")},u&&n.createElement("span",{className:"stdropdown-flag"},"emoji"in e?e.emoji:""," "),"+",e.phone_code)}))))};e.CitySelect=function(e){var r=e.containerClassName,c=e.inputClassName,i=e.onTextChange,a=e.defaultValue,s=e.onChange,l=e.countryid,d=e.stateid,h=e.placeHolder,p=e.src,m=o(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","countryid","stateid","placeHolder","src"]),g=n.useState([]),x=g[0],j=g[1];return n.useEffect((function(){l&&u(l,d,p).then((function(e){j(e)}))}),[l,d,p]),n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:{position:"relative"}},n.createElement(f,t({},m,{placeHolder:h,options:x,onChange:function(e){s&&s(e)},onTextChange:i,defaultValue:a,inputClassName:c}))))},e.CountrySelect=function(e){var r=e.containerClassName,c=e.inputClassName,i=e.onTextChange,l=e.defaultValue,d=e.onChange,u=e.placeHolder,h=e.showFlag,p=e.region,m=e.src,g=o(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","showFlag","region","src"]),x=n.useState([]),j=x[0],v=x[1];return n.useEffect((function(){p?a(p,m).then((function(e){v(e)})):s(m).then((function(e){v(e)}))}),[p,m]),n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:{position:"relative"}},n.createElement(f,t({},g,{placeHolder:u,options:j,onChange:function(e){d&&d(e)},showFlag:h,onTextChange:i,defaultValue:l,inputClassName:c}))))},e.GetAllCities=function(e){return r(void 0,void 0,void 0,(function(){var n,t,o,r,i,a,s,l,d,u,h,f;return c(this,(function(c){switch(c.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json",e&&(n=e+"/citiesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:for(t=c.sent(),o=[],r=0,i=t;r<i.length;r++)for(a=i[r],s=0,l=a.states;s<l.length;s++)for(d=l[s],u=0,h=d.cities;u<h.length;u++)f=h[u],o.push(f);return[2,o]}}))}))},e.GetCity=u,e.GetCountries=s,e.GetCountriesByRegion=a,e.GetLanguages=l,e.GetPhonecodes=function(e){return r(void 0,void 0,void 0,(function(){var n;return c(this,(function(t){switch(t.label){case 0:return n="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",e&&(n=e+"/countriesminified.json"),[4,fetch(n).then((function(e){return e.json()}))];case 1:return[2,t.sent().map((function(e){return{id:e.id,name:e.name,phone_code:e.phone_code,region:e.region}}))]}}))}))},e.GetPhonecodesByRegion=function(e,n){return r(void 0,void 0,void 0,(function(){var t,o,r;return c(this,(function(c){switch(c.label){case 0:return t="https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json",n&&(t=n+"/countriesminified.json"),[4,fetch(t).then((function(e){return e.json()}))];case 1:return o=c.sent(),r=o,e&&(r=r.filter((function(n){return n.region===e}))),[2,r.map((function(e){return{id:e.id,name:e.name,phone_code:e.phone_code,region:e.region}}))]}}))}))},e.GetRegions=i,e.GetState=d,e.LanguageSelect=function(e){var r=e.containerClassName,c=e.inputClassName,i=e.onTextChange,a=e.defaultValue,s=e.onChange,d=e.placeHolder,u=e.displayNative,h=e.src,f=o(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","displayNative","src"]),p=n.useState([]),g=p[0],x=p[1];return n.useEffect((function(){l(h).then((function(e){x(e)}))}),[h]),n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:{position:"relative"}},n.createElement(m,t({},f,{placeHolder:d,options:g,onChange:function(e){s&&s(e)},displayNative:u,onTextChange:i,defaultValue:a,inputClassName:c}))))},e.PhonecodeSelect=function(e){var r=e.containerClassName,c=e.inputClassName,i=e.onTextChange,l=e.defaultValue,d=e.onChange,u=e.placeHolder,h=e.showFlag,f=e.region,p=e.src,m=o(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","showFlag","region","src"]),g=n.useState([]),j=g[0],v=g[1];return n.useEffect((function(){f?a(f,p).then((function(e){v(e)})):s(p).then((function(e){v(e)}))}),[f,p]),n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:{position:"relative"}},n.createElement(x,t({},m,{placeHolder:u,options:j,onChange:function(e){d&&d(e)},showFlag:h,onTextChange:i,defaultValue:l,inputClassName:c}))))},e.RegionSelect=function(e){var r=e.containerClassName,c=e.inputClassName,a=e.onTextChange,s=e.defaultValue,l=e.onChange,d=e.placeHolder,u=e.src,h=o(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","placeHolder","src"]),p=n.useState([]),m=p[0],g=p[1];return n.useEffect((function(){i(u).then((function(e){g(e)}))}),[u]),n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:{position:"relative"}},n.createElement(f,t({},h,{placeHolder:d,options:m,onChange:function(e){l&&l(e)},onTextChange:a,defaultValue:s,inputClassName:c}))))},e.StateSelect=function(e){var r=e.containerClassName,c=e.inputClassName,i=e.onTextChange,a=e.defaultValue,s=e.onChange,l=e.countryid,u=e.placeHolder,h=e.src,p=o(e,["containerClassName","inputClassName","onTextChange","defaultValue","onChange","countryid","placeHolder","src"]),m=n.useState([]),g=m[0],x=m[1];return n.useEffect((function(){l&&d(l,h).then((function(e){x(e)}))}),[l,h]),n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:{position:"relative"}},n.createElement(f,t({},p,{placeHolder:u,options:g,onChange:function(e){s&&s(e)},onTextChange:i,defaultValue:a,inputClassName:c}))))}}(n,t(6540))},3869:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"components/phonecode-select","title":"Phonecode Select","description":"PhonecodeSelect is a simple and customizable phone code selector component for React applications. This component allows users to select a country phone code from a predefined list.","source":"@site/versioned_docs/version-1.1.11/components/phonecode-select.mdx","sourceDirName":"components","slug":"/components/phonecode-select","permalink":"/react-country-state-city-docs/1.1.11/components/phonecode-select","draft":false,"unlisted":false,"tags":[],"version":"1.1.11","frontMatter":{"title":"Phonecode Select","sidebar_label":"Phonecode Select"},"sidebar":"docs","previous":{"title":"Region Select","permalink":"/react-country-state-city-docs/1.1.11/components/region-select"},"next":{"title":"Methods","permalink":"/react-country-state-city-docs/1.1.11/category/methods"}}');var r=t(4848),c=t(8453),i=t(159);const a={title:"Phonecode Select",sidebar_label:"Phonecode Select"},s=void 0,l={},d=[{value:"Usage",id:"usage",level:2},{value:"Live Example",id:"live-example",level:2},{value:"Props",id:"props",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"PhonecodeSelect"})," is a simple and customizable phone code selector component for React applications. This component allows users to select a country phone code from a predefined list."]})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import React, { useState } from "react";\r\nimport { PhonecodeSelect } from "react-country-state-city";\r\nimport "react-country-state-city/dist/react-country-state-city.css";\r\n\r\nexport default function App() {\r\n  const [phonecode, setPhonecode] = useState(null);\r\n\r\n  return (\r\n    <div>\r\n      <h6>Phonecode</h6>\r\n      <PhonecodeSelect\r\n        containerClassName="form-group"\r\n        inputClassName=""\r\n        onChange={(_code) => setPhonecode(_code)}\r\n        onTextChange={(_txt) => console.log(_txt)}\r\n        defaultValue={phonecode}\r\n        placeHolder="Select Phone Code"\r\n      />\r\n    </div>\r\n  );\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"live-example",children:"Live Example"}),"\n",(0,r.jsx)(i.PhonecodeSelect,{containerClassName:"form-group",inputClassName:"",onChange:e=>console.log(e),onTextChange:e=>console.log(e),defaultValue:null,placeHolder:"Select Phone Code"}),"\n",(0,r.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Required"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"src"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Empty"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The URL where the data files are hosted. Default is a CDN."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"region"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Empty"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Filters and displays countries from a specific region."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"showFlag"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["Displays flags when ",(0,r.jsx)(n.code,{children:"true"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"defaultValue"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsxs)(n.td,{children:["The initial selected ",(0,r.jsx)(n.code,{children:"phone code"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"containerClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Empty"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Custom class name for the container."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"inputClassName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Empty"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Custom class name for the input field."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"onChange"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"function"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Empty"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Callback triggered when a phone code is selected."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"onTextChange"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"function"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Empty"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Callback fired when the input text changes."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"placeHolder"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Empty"})}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Placeholder text for the input."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{"use strict";t.d(n,{R:()=>i,x:()=>a});var o=t(6540);const r={},c=o.createContext(r);function i(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);