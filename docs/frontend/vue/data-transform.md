---
title: 组件之间数据传递
---

## 父组件向子组件传递

::: tip 
通过props传递
:::

## 子组件向父组件传递

### 1. 通过子组件事件传递
````javascript
// 子组件中
<div @click="onClick">hello</div>

const data ='data'
export default {
name: "Hello",
setup(props,context){
  function onClick() {
    context.emit('sub-event',data)
  }
  return{
    onClick
  }
}
}

// 父组件中
<Hello @sub-event="onTestClick"></Hello>

function onTestClick(event) {
  console.log(event)
}
````