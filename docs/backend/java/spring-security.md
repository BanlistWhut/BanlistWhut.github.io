---
title: Spring Security
---

## 主要功能

### 认证
1. `UserDetails`接口
- 该接口有2个构造器，一个有7个参数，一个有3个参数。其中，3个参数的构造器内部也是调用的7个参数的构造器。
2. `PasswordEncode`密码器
- 默认使用 `BCryptPasswordEncoder`
3. 自定义登录页面

:::tip 小坑

`successForwardUrl()` 方法定义的 url 路径，只支持POST请求
```java
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin()
                .usernameParameter("username")  // 可选项，不设置默认就是"username"，
                                                // 如果设置的话，可以更改登录表单input的name属性值，
                                                // 比如，你的项目中登录页面提交的表单 不是username用户名 而是 account账号
                .passwordParameter("password")
                .loginPage("/login")
                .successForwardUrl("/hello");


        // 授权
        http.authorizeRequests()
                .antMatchers("/login").permitAll() // 放行 登录页面
                .anyRequest().authenticated();  // 所有请求必须认证
    }

    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}

```

4. 自定义登录成功处理器
```java


```
:::

5. remember me

### 鉴权

1. 开启鉴权注解 `@EnableGlobalMethodSecurity(securedEnabled = true)、@Secured("ROLE_abc")、@PreAuthorize("hasRole('abc')")`