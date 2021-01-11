(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{416:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("在理解"),a("a",{attrs:{href:"/backend/nginx/nginx-upstream"}},[t._v("反向代理与负载均衡")]),t._v("后就可以快速实现 websocket 的反向代理，在之前的"),a("RouterLink",{attrs:{to:"/backend/nginx/nginx-directives.html#alias"}},[t._v("配置")]),t._v(" 的配置上进行修改。")],1),t._v(" "),a("h2",{attrs:{id:"config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("vim "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改为以下内容")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_log")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log warn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("chat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("echo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("websocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upgrade"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nnginx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s reload "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重载配置")]),t._v("\n")])])]),a("h2",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" test")]),t._v(" "),a("p",[t._v("接着在"),a("a",{attrs:{href:"http://www.websocket.org/echo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试页面"),a("OutboundLink")],1),t._v("将 Location 中的 "),a("code",[t._v("ws://echo.websocket.org")]),t._v(" 替换为目标地址 "),a("code",[t._v("ws://nginx.example.com/chat/")]),t._v(" （需要修改本地 DNS），Connect 成功即为成功。")])])}),[],!1,null,null,null);s.default=e.exports}}]);