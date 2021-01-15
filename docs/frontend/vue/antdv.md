---
title: Antd-vue
---

## 安装
```shell
# 安装依赖
npm i --save ant-design-vue@next

# 按需加载插件
在 `vue ui`控制后台中安装依赖 `babel-plugin-import`
然后，在项目根目录下新建`.babelrc`文件 ：
{
  "plugins": [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]
  ]
}
```

## 配置

1. 按需加载
- 在`main.js`中统一注册后，组件中就可以直接使用，无需再次引入。
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button, DatePicker } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(store)
  .use(router)
  .use(DatePicker)
  .use(Button)
  .mount('#app')

```

示例：`Home.vue` 组件中无需注册，直接调用`<a-button>`
```vue

<template>
  <div class="home">
    首页
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
}
</script>

```