(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[528],{3347:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demos",function(){return n(8260)}])},3556:function(e,t){"use strict";t.Z={src:"/boboan.github.io/_next/static/media/gba-banner.f2e8243c.png",height:461,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AImXtaKo1K683oe83pLA34aIjnp4dmJkYwCqpcl0bMiQo+GnzOStwdqSlJeioo5wdFUAiKa+eLjf3s7M24KW2rGXpKWQTJK3JXiTAACYxFO45oars0aahYusf/vcnrfe+gCj1Mq9O+Olnl0YAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},126:function(e,t){"use strict";t.Z={src:"/boboan.github.io/_next/static/media/rvt.7239edc5.jpg",height:1956,width:3582,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApwH/xAAaEAABBQEAAAAAAAAAAAAAAAABAAIDBBEF/9oACAEBAAE/AKMbDyaBGBxqxHcC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/ANLf/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Aj//Z",blurWidth:8,blurHeight:4}},8260:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var i=n(5893),r=n(7294),a=n(3e3),o=n(917),A=n(1719),c=n(9072),s=n(1953),l=n(9630),p=n(918),d=n(9144),h=n(5084),u=n(3556),b=n(126),g=n(1664),m=n.n(g),x=n(9008),f=n.n(x),w=n(8257);let j=(0,o.F4)({from:{width:0}}),k=(0,o.F4)({"50%":{borderColor:"transparent"}}),v=(0,A.ZP)(c.ZP)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"row",flexWrap:"wrap",".MuiPaper-root":{cursor:"pointer",".title":{textAlign:"center"},".inner-title":{borderRight:"0.1em solid",whiteSpace:"nowrap",overflow:"hidden",font:"bold 150% Consolas, Monaco, monospace"},".pic":{position:"relative",height:"0",backgroundPosition:"center center",backgroundSize:"contain",backgroundRepeat:"no-repeat",paddingBottom:"55%",overflow:"hidden",".desc":{color:"#fff",height:"100%",width:"100%",position:"absolute",top:"0",left:"100%",transition:"0.15s",background:"rgba(0,0,0,.6)",padding:t.spacing(2),pointerEvents:"none"},"&:hover":{".desc":{left:0},".inner-title":{animation:"".concat(j," 1.5s steps(26, end), ").concat(k," 0.3s step-end infinite alternate")}}}}}}),C=[{pic:"/boboan.github.io/_next/static/media/ec-control.18cf1e22.gif",name:"ec-boboan",desc:"使用 EasyClick(App) 和 websocket server(nestjs) ,app 发送画面/接收控制，web 接收画面/发送控制指令。",repo:"https://github.com/ranmeizi/ec-boboan"},{backgroundNode:(0,i.jsx)(s.Z,{sx:{height:"100%",width:"100%",position:"absolute",filter:"opacity(1)"},children:(0,i.jsx)(function(){let e=(0,r.useRef)(null),t=(0,r.useRef)();return(0,r.useEffect)(()=>{(function(){var n;if(!e.current)return;let i=new w.Z({resourcePath:"/boboan.github.io/live2d/",workerPath:"/boboan.github.io/l2d.worker.js"}),{height:r,width:a}=null===(n=e.current.parentElement)||void 0===n?void 0:n.getBoundingClientRect();e.current.height=r,e.current.width=a,i.initialize(e.current),t.current=i,t.current.loadModel("草神1")})()},[]),(0,i.jsx)("canvas",{ref:e})},{})}),name:"@bomon/live2d-helper",desc:(0,i.jsxs)(s.Z,{sx:{flex:2},children:[(0,i.jsx)(l.Z,{children:"使用 worker 运行 cubism web sdk "}),(0,i.jsx)(l.Z,{children:"使用 OffsetCanvas 渲染"}),(0,i.jsx)(l.Z,{children:"一个简单的 live2d 的工具"})]}),repo:"https://github.com/ranmeizi/live2d-helper"},{pic:u.Z.src,name:"gba-ext-proto",desc:"这个拓展最实用的地方是，他是通过 background 运行 gbajs，并且通过 connect 传输到 popup 渲染，这意味着，你可以在紧急时刻关闭 popup 页，并且不丢失当前游戏进度! 这是一个很酷的特性",repo:"https://github.com/ranmeizi/gba-ext-proto"},{pic:"/boboan.github.io/_next/static/media/bomon.e1f88f9d.png",name:"B•O•M•O•N",desc:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{children:"波波安的派蒙，给前端开发提供一些帮助"}),(0,i.jsx)(l.Z,{children:"@bomon/webpack-runner webpack 基础配置"}),(0,i.jsx)(l.Z,{children:"@bomon/expand-router 拓展路由"}),(0,i.jsx)(l.Z,{children:"@bomon/dev-publish 开发部署"})]}),linkNpm:"https://www.npmjs.com/search?q=%40bomon",repo:"https://github.com/ranmeizi/react-vite-template"},{pic:b.Z.src,name:"react-vite-template",desc:"使用vite搭建的react后台管理模板,内置了LRU控制的路由页签,路由缓存和路由过度动画.",linkVercel:"https://react-vite-template-murex.vercel.app",repo:"https://github.com/ranmeizi/react-vite-template"},{pic:"/boboan.github.io/_next/static/media/proxy_ext.68834c9e.jpg",name:"xhr-mock-ext",desc:"使用react开发的谷歌拓展,通过在background页维护request匹配表,在页面内注入xhr拦截代码,响应配置好的mock数据.",repo:"https://github.com/ranmeizi/xhr-mock-ext"},{pic:"/boboan.github.io/_next/static/media/astar.1207799c.gif",name:"a-star-map",desc:"javascript实现的A*寻路算法,通过创建astarmap,找出sorce->target的最短路径.",linkNpm:"https://www.npmjs.com/package/a-star-map",repo:"https://github.com/ranmeizi/react-vite-template"},{pic:"/boboan.github.io/_next/static/media/realworld.8822ca7c.png",name:"realworld-react",desc:"用vite和react开发的RealWorld项目",linkVercel:"realworld-gray.vercel.app",repo:"https://gitee.com/boboanzuiniubi/react-vite-template"}];function E(e){let t=(0,a.Z)();return(0,i.jsxs)(t,{children:[(0,i.jsx)(f(),{children:(0,i.jsx)("title",{children:"Demos"})}),(0,i.jsx)(v,{container:!0,spacing:2,children:C.map(e=>(0,i.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(Z,{data:e})},e.name))})]})}function Z(e){let{data:t}=e;return(0,i.jsxs)(p.Z,{elevation:3,children:[(0,i.jsx)(l.Z,{className:"title",variant:"h6",children:t.name}),(0,i.jsxs)(s.Z,{className:"pic",sx:t.pic?{background:"url(".concat(t.pic,")")}:{},children:[t.backgroundNode||null,(0,i.jsxs)(s.Z,{className:"desc",children:[(0,i.jsx)(s.Z,{className:"inner-title",sx:{width:t.name.length+1+"ch"},children:t.name}),t.desc]})]}),(0,i.jsxs)(d.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[t.linkVercel?(0,i.jsx)(m(),{href:t.linkVercel,target:"_blank",children:(0,i.jsx)(h.Z,{variant:"text",children:"view in vercel"})}):null,t.linkNpm?(0,i.jsx)(m(),{href:t.linkNpm,target:"_blank",children:(0,i.jsx)(h.Z,{variant:"text",children:"view in npm"})}):null,(0,i.jsx)(m(),{href:t.repo,target:"_blank",children:(0,i.jsx)(h.Z,{variant:"text",children:"repository"})})]})]})}}},function(e){e.O(0,[901,547,0,774,888,179],function(){return e(e.s=3347)}),_N_E=e.O()}]);