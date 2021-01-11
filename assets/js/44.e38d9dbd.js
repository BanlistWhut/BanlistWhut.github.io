(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{419:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("虽然可以直接从 "),t("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node 官网"),t("OutboundLink")],1),s._v(" 下载并安装它，但更推荐的使用方式是利用 "),t("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nvm"),t("OutboundLink")],1),s._v(" 来处理它，因为 "),t("code",[s._v("nvm")]),s._v(" 还提供了多版本的共存的解决方式，可以更快捷的切换、尝鲜。")]),s._v(" "),t("h3",{attrs:{id:"_1-安装-nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-nvm"}},[s._v("#")]),s._v(" 1. 安装 nvm")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装脚本(具体版本可看官网)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证安装")]),s._v("\nnvm --version "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若失败需执行 `source ~/.bashrc` 使环境变量生效")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 0.34.0")]),s._v("\n")])])]),t("h3",{attrs:{id:"_2-安装-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-node"}},[s._v("#")]),s._v(" 2. 安装 node")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前")]),s._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看可用")]),s._v("\nnvm ls-remote\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定版本")]),s._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" v12.16.3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认版本")]),s._v("\nnvm "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" default v12.16.3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证 node")]),s._v("\nnode -v\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v12.16.3")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换版本")]),s._v("\nnvm use v13.13.0\n")])])]),t("h3",{attrs:{id:"_3-nvm-全局包迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-nvm-全局包迁移"}},[s._v("#")]),s._v(" 3. nvm 全局包迁移")]),s._v(" "),t("p",[s._v("在 windows 下使用时切换 node 版本全局包不会丢失，而在 manjaro 下使用时遇到了该情况，可利用 "),t("a",{attrs:{href:"https://github.com/nvm-sh/nvm#migrating-global-packages-while-installing",target:"_blank",rel:"noopener noreferrer"}},[s._v("--reinstall-packages-from"),t("OutboundLink")],1),s._v(" 解决。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" v12.16.3 --reinstall-packages-from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v12.4.0\n")])])]),t("h2",{attrs:{id:"切换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换源"}},[s._v("#")]),s._v(" 切换源")]),s._v(" "),t("p",[s._v("在缺乏代理的情况下 npm 默认源的速度会比较慢，设置为淘宝源会有比较理想的速度；在私建 npm 服务的情况下，有时部分依赖包需要去私服下载，频繁切换也会麻烦。")]),s._v(" "),t("p",[s._v("这时候就可以使用 "),t("a",{attrs:{href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"}},[s._v("nrm"),t("OutboundLink")],1),s._v(" 快速切换源来解决这些问题了。")]),s._v(" "),t("p",[s._v("当然，npm 也自带了设置源的服务，但毕竟使用起来较为麻烦：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npmjs.org/\n")])])]),t("h3",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1. 安装")]),s._v(" "),t("p",[s._v("nrm 也是 "),t("code",[s._v("Node.js")]),s._v(" 模块。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --global nrm\n")])])]),t("h3",{attrs:{id:"_2-查看源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看源"}},[s._v("#")]),s._v(" 2. 查看源")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nrm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# * npm ---- https://registry.npmjs.org/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  cnpm --- http://r.cnpmjs.org/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  taobao - https://registry.npm.taobao.org/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  nj ----- https://registry.nodejitsu.com/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  npmMirror  https://skimdb.npmjs.com/registry/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  edunpm - http://registry.enpmjs.org/")]),s._v("\n")])])]),t("h3",{attrs:{id:"_3-测速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-测速"}},[s._v("#")]),s._v(" 3. 测速")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nrm "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# * npm ---- 1837ms")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  cnpm --- 1050ms")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  taobao - 125ms")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  nj ----- Fetch Error")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  npmMirror  3027ms")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  edunpm - Fetch Error")]),s._v("\n")])])]),t("h3",{attrs:{id:"_4-切换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-切换源"}},[s._v("#")]),s._v(" 4. 切换源")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nrm use taobao\n")])])]),t("h2",{attrs:{id:"npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[s._v("#")]),s._v(" npm")]),s._v(" "),t("p",[s._v("核心，用于解决 "),t("code",[s._v("Node.js")]),s._v(" 模块安装问题，其本身也是一个模块。")]),s._v(" "),t("h3",{attrs:{id:"_1-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用命令"}},[s._v("#")]),s._v(" 1. 常用命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局 npm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" list -g --depth "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install 失败")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache clean --force\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);