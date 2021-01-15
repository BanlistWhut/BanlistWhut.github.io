---
title: toRefs
---

- 配合`...`扩展运算符，将结构后的数据重新变成响应式数据

:::tip 提示
结构后的数据在vue3中会失去响应性
:::
```javascript
import {reactive, ref, toRefs} from "vue"

export default {
  setup(){
    const state = reactive({
      id:1,
      name:'zhangsan'
    })
    const num = ref(0)
    let change = ()=>{
      state.id = 2
      state.name = 'lisi'
    };
    return {
      num,
      ...toRefs(state),
      change
    }
  }
}
```