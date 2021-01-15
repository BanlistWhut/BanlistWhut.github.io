const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: 'Banlist的藏宝海湾',
  description: 'Banlist的文档, vuepress 文档',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'BanlistWhut/BanlistWhut.github.io',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf
  },
}