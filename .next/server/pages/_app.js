(()=>{var e={};e.id=888,e.ids=[888],e.modules={9786:(e,t,r)=>{"use strict";r.d(t,{k:()=>i,R:()=>n});var s=r(997),a=r(6689);let o=(e,t)=>"MODAL_STATE"===t.type?{...e,modal:t.payload}:e,u={modal:!1},i=(0,a.createContext)(u),n=({children:e})=>{let[t,r]=(0,a.useReducer)(o,u);return s.jsx(i.Provider,{value:{modal:t.modal,modalState:function(){r({type:"MODAL_STATE",payload:!t.modal})}},children:e})}},3414:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>p});var a=r(997),o=r(1163),u=r.n(o),i=r(808),n=r.n(i);r(3723);var d=r(9786),c=r(9648),l=e([c]);c=(l.then?(await l)():l)[0],u().events.on("routeChangeStart",()=>n().start()),u().events.on("routeChangeComplete",()=>n().done()),u().events.on("routeChangeError",()=>n().done()),n().configure({showSpinner:!1}),c.default.defaults.baseURL="https://api.datconsultancy.com/web-api/v1.0",c.default.defaults.headers.common["x-api-key"]="KHKJHSKHASD7686ASDHKSHDAKSHDKHASDAASDKH86868ASDVV",c.default.defaults.headers.common["Access-Control-Allow-Origin"]="*",c.default.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";let p=function({Component:e,pageProps:t}){return a.jsx(d.R,{children:a.jsx(e,{...t})})};s()}catch(e){s(e)}})},3723:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},808:e=>{"use strict";e.exports=require("nprogress")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},9648:e=>{"use strict";e.exports=import("axios")},7147:e=>{"use strict";e.exports=require("fs")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[429,163],()=>r(3414));module.exports=s})();