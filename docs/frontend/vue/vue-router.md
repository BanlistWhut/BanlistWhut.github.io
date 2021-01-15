---
title: Vue-Router
---

## 安装
```shell script
npm install vue-router
```
## 使用
1. `<router-view />` 标签

该标签的作用：显示路由配置文件（`router/index.js`）中，当前地址对应的页面或者组件。

::: tip 页面与组件的差异
1. 组件通常是会有复用需求的。
2. 页面是用来承载组件的，通常不会复用。
:::

2. `<router-link to=""/>` 标签