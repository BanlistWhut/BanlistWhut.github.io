---
title: Spring JPA
----
## 常用注解
> @Entity @Id @OneToMany @ManyToMany @joinColumns

## @Qurey( "jpql语句") 

## @qurey(nativeQuery = true,value="sql语句")

## 总结jpql语句与sql语句的特点
1. jpql可以利用 **导航属性** 简化join语句。
2. 阿里规范强调 join 语句不能超过3次，甚至有的公司禁用join语句。

## JPA 快速单表查询 完全不用写sql
1. 全部使用单表查询的优势在于 **代码的可维护性**，因为复杂的sql语句可读性很差。