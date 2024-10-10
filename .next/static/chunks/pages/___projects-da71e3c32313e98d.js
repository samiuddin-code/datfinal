(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{91961:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/___projects",function(){return a(62965)}])},93988:function(e,t,a){"use strict";var l=a(85893),i=a(94960),s=a(74826),n=a.n(s),c=a(11163),r=a(48058);t.Z=e=>{let{title:t,image:a,imageAlt:s,folder:o,description:d}=e,x=(0,c.useRouter)();return(0,l.jsx)("section",{className:"relative",children:(0,l.jsxs)("div",{className:n().slider__height+" flex flex-col w-full relative",children:[(0,l.jsx)(i.Z,{src:a,folder:o,alt:s,layout:"fill",objectFit:"cover",priority:!0,loading:"eager"},t+a),(0,l.jsx)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-8 w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20 lg:pt-24",children:(0,l.jsxs)("div",{className:"text-white lg:pr-16 relative animate-to-top",children:["/contact"!=x.pathname||"/services"==x.pathname&&(0,l.jsx)("span",{className:"text-sm uppercase block",children:"Crafting Architecture"}),"/projects"==x.pathname&&(0,l.jsx)("div",{className:"mt-1 overflow-hidden",style:{height:"100px"},children:(0,l.jsx)("h1",{className:"w-full text-3xl lg:text-4xl xl:text-5xl leading-12 lg:leading-normal font-semibold relative z-10",children:(0,l.jsx)(r.Z,{})})}),(0,l.jsx)("h1",{className:("/contact"==x.pathname||"/services"==x.pathname?"text-center ":"")+"w-full text-3xl lg:text-4xl xl:text-5xl leading-12 lg:leading-normal font-semibold relative z-10",children:t}),""!==d&&(0,l.jsx)("p",{className:("/contact"==x.pathname||"/services"==x.pathname?"text-center ":"")+"w-full max-w-lg m-auto text-lg leading-7 font-medium relative z-10",children:d})]})}),(0,l.jsx)("div",{className:n().slider__overlay+" left-0 top-0 w-full h-full absolute"})]})})}},86163:function(e,t,a){"use strict";var l=a(85893),i=a(67294),s=a(69878),n=a(94960),c=a(30781),r=a(69933),o=a(87066),d=a(55118),x=a(27558),g=a(11163);t.Z=function(e){let{projects:t}=e,[a,m]=(0,i.useState)(2),[h,u]=(0,i.useState)(t.data.rows),[p,f]=(0,i.useState)(!1),j=(0,g.useRouter)();async function w(e){return t.data.category?await o.Z.get("".concat("https://api.datconsultancy.com/web-api/v1.0","/projects/category/").concat(t.data.category.slug,"?limit=6&page=").concat(e)).then(e=>e.data):await o.Z.get("".concat("https://api.datconsultancy.com/web-api/v1.0","/projects?limit=6&page=").concat(e)).then(e=>e.data)}return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:(p?"opacity-70 pointer-events-none":"opacity-100 pointer-events-auto")+" py-16 lg:py-20",children:(0,l.jsxs)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8",children:[(0,l.jsx)(d.Z,{span:"Latest Design",heading:(t.data.category?t.data.category.title:"Featured")+" Projects"}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:h.map(e=>(0,l.jsx)(c.Z,{heading:e.title,imageHover:!0,fixedHeight:!0,buttonData:{enabled:!0,link:"/projects/".concat(e.ProjectCategory.slug,"/").concat(e.slug),text:"See more",icon:!0},description:(0,s.bC)(e.highlight,0,200),interactive:!0,children:(0,l.jsx)(n.Z,{src:e.altImage,layout:"responsive",alt:e.title,width:352,height:260,objectFit:"cover",className:"filter blur-none group-hover:blur-sm"})},e.title))}),(0,l.jsxs)("div",{className:"mt-16 lg:mt-20 flex interactive-element top justify-end",children:[t.data.count!=h.length&&(0,l.jsx)("div",{className:"/"==j.asPath?"hidden lg:block w-1/2":"w-full text-center",children:(0,l.jsx)(r.Z,{onClick:function(){m(a+1),f(!0),w(a).then(e=>{u(t=>[...t,...e.data.rows]),f(!1)})},classList:"bg-gray-50",text:"Load More",link:"",icon:!1})}),"/"==j.asPath&&(0,l.jsx)("div",{className:(t.data.count!=h.length?"lg:w-full":"lg:w-1/2")+" w-full lg:text-right",children:(0,l.jsx)(x.Z,{text:"View all projects",link:"/projects",icon:"true"})})]})]})})})}},62965:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return r}});var l=a(85893),i=a(26382),s=a(93988),n=a(40851),c=a(86163),r=!0;t.default=function(e){let{response:t}=e,[a]=t,{projects:r,bannerData:o,seoData:d}=a.data;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(n.Z,{apiData:t,blogSection:!0,children:[(0,l.jsx)(i.Z,{title:d.title,description:d.description,keywords:d.keywords,image:d.image}),(0,l.jsx)(s.Z,{imageAlt:o.imageAlt,image:o.image,folder:"uploads/generalSections",title:o.highlight,description:o.shortInfo}),(0,l.jsx)(c.Z,{projects:r})]})})}},74826:function(e){e.exports={slider__overlay:"slider_slider__overlay__3zYZK",slider__height:"slider_slider__height__hcR9U"}}},function(e){e.O(0,[885,996,653,643,888,774,179],function(){return e(e.s=91961)}),_N_E=e.O()}]);