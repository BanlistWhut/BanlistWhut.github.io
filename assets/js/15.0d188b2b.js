(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{390:function(s,a,t){"use strict";t.r(a);var e=t(27),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"busybox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#busybox"}},[s._v("#")]),s._v(" Busybox")]),s._v(" "),t("p",[s._v("以前常常会用 ubuntu 来测试一些命令行工具，现在有了更好的选择：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --rm 用完即删")]),s._v("\ndocker run -it --rm busybox\n")])])]),t("h2",{attrs:{id:"node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[s._v("#")]),s._v(" Node.js")]),s._v(" "),t("p",[s._v("从这里基本就可以了解到这些镜像只是在 Docker Engine 上增加了一些依赖，然后你又基于这些依赖搭建你的环境，可以看看 "),t("a",{attrs:{href:"https://hub.docker.com/layers/node/library/node/erbium-buster-slim/images/sha256-c6ad96c5345c1a714e0052d08d83635c8e422ea0d103adc7f9f2df4fcfb7fe2d?context=explore",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node Images Layers"),t("OutboundLink")],1),s._v(" 加深该概念。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 追加 bash，否则会直接进入 node")]),s._v("\ndocker run -it --rm node:slim "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),t("h2",{attrs:{id:"nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),t("p",[s._v("快速测试本地打包好的静态文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run --rm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t-v /dir/dist/:/usr/share/nginx/html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tnginx\n")])])]),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" MySQL")]),s._v(" "),t("p",[s._v("指定密码。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run --rm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("33006")]),s._v(":3306 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t-e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mypasswd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  mysql\n")])])]),t("h2",{attrs:{id:"mongo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mongo"}},[s._v("#")]),s._v(" Mongo")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v(":27017 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  --name some-mongo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  mongo --auth\n")])])]),t("h2",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),t("p",[s._v("指定密码。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker run -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t-p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\t--name some-redis "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n\tredis --requirepass "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redispwd"')]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);