---
title: 插件
autoPrev: README
---

插件可以帮助开发者在打包的前中后时刻，执行一些增强操作。

## 插件入门（以html-webpack-plugin为例）

1. 安装依赖
`npm install html-webpack-plugin -D`
   
2. 修改webpack配置文件，增加plugins配置项

主要代码：
```js
const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');  // 打包之前删除dist目录的插件

module.exports = {
  mode: 'development',
  // 入口
  entry:  './src/index.js',
    
  // 出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({  // 实例化插件对象
      template: './src/index.html',  // html的模板文件
    }),
    new CleanWebpackPlugin()
  ]
  
}
```

## file-loader打包图片


## url-loader打包图片
url-loader会将图片转换成Base64字符串格式，不需要单独的图片文件。

好处：减少了一次图片的http请求
坏处：如果图片体积很大，会导致转换后的js文件体积过大，从而延长页面加载时间。因为页面需要等待js文件加载完毕，才会渲染页面。

最佳实践：图片小，使用url-loader，图片大，使用file-loader。  在webpack.config.js 增加 limit 配置项。


## style-loader, css-loader, sass-loader, postcss-loader 打包css

在css3样式属性前增加浏览器厂商前缀：postcss-loader，autoprefixer


## css模块化

```js
{
  loader: 'css-loader',
  options: {
    modules: true
  }
}


import styles from './index.css'

img.className += `${styles.avatar}`


```

## 打包字体

file-loader
