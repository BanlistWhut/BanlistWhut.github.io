---
title: 多线程
autoPrev: README
---

## 参考资料

1. 多线程教程  <http://concurrent.redspider.group/article/01/2.html>

## springboot 线程池


:::tip 最简单的实现
1. @EnableAsync 注解开启异步，写在启动类上面。
2. @Async 注解标记异步方法。

:::

### 需要定制线程池参数的实现
1. springboot 开启多线程配置
```java
package com.xxxx.threadpooldemo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
@EnableAsync
public class SpringAsyncConfig {

    @Bean("taskExecutor")
    public Executor asyncServiceExecutor(){
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();

        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(20);
        executor.setQueueCapacity(Integer.MAX_VALUE);
        executor.setKeepAliveSeconds(60);
        executor.setWaitForTasksToCompleteOnShutdown(true);
        executor.initialize();
        return executor;

    }
}

```

2. 标记异步方法
```java
package com.xxxx.threadpooldemo.service.impl;

import com.xxxx.threadpooldemo.service.AsyncService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class AsyncServiceImpl implements AsyncService {
    @Async("taskExecutor")
    @Override
    public void executeAsync() {
        log.info("--------开始执行--------AsyncServiceImpl ---> executeAsync() 方法");
        System.out.println(Thread.currentThread().getName());
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        log.info("--------执行完毕-------AsyncServiceImpl ---> executeAsync() 方法");
    }
}



```