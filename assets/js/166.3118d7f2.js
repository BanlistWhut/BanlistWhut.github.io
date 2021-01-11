(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{543:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("一直以来都是开机使用 "),a("code",[s._v("bash")]),s._v("，在之后再切换到 "),a("code",[s._v("zsh")]),s._v("。最近设置为开机切换到 "),a("code",[s._v("zsh")]),s._v("，就导致使用 "),a("code",[s._v("npm")]),s._v(" 命令时提示 "),a("code",[s._v("zsh: command not found")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),a("p",[s._v("首先需要确认是否是 "),a("code",[s._v("PATH")]),s._v(" 出现了问题：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zsh: command not found")]),s._v("\nnode -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# v12.4.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以发现环境不存在问题")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接着查看 .bashrc 配置是否有说明")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" ~/.bashrc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意到存在以下内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export NVM_DIR="$HOME/.nvm"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# [ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion')]),s._v("\n")])])]),a("p",[s._v("于是就想起自己依赖 "),a("code",[s._v("nvm")]),s._v(" 管理 "),a("code",[s._v("node")]),s._v("，将该内容追加到 "),a("code",[s._v(".zshrc")]),s._v(" 中：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6.12.0")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);