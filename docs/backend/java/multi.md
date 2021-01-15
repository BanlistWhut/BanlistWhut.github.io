---
title: 多例模式
---

## 多例

1. 对象工厂模式
```java
ObjectFactory<Classname> multiObject
```


2. 动态代理模式
```java
@Scope(value = "prototype",proxyMode = ScopedProxyMode.TARGET_CLASS)
```