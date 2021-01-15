---
title: 响应式对象
---

## 数据双向绑定
- v-model
- ref
- reactive

## watch函数
### 1. 基本用法
```javascript
// 监听某个响应式对象
watch(reactiveObject , (newVal,oldVal) => {
   // do something...
})

// 监听响应式对象中的某个特定属性
watch(() => reactiveObject.property, (newVal, oldVal) => {
  // do something...
})
```

## computed函数

### 1. 基本用法

```javascript

// 计算属性
let fullName = computed(()=> firstName.value + lastName.value)

```

::: tip 提示
computed函数返回的计算属性，是**只读属性**
:::

## watch函数、computed函数的应用场景

::: tip 提示
1. watch函数 ---> 副作用，重在监听状态变化
2. computed函数 ---> 数值处理，重在针对变化的状态进行数值处理等
:::