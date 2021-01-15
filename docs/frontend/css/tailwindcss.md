---
title: tailwindcss
---

## 震惊！把css 写到 HTML标签中

第一次知道 `tailwindcss` 是在[hellogithub](https://hellogithub.com/periodical/volume/56/#category-3)网站，这个网站会定期汇总一些牛x有趣的项目。

引入tailwindcss后，所有的样式通过更改html元素的**class属性**的不同组合来实现，完全不用写css，您的视野不需要离开html文件，不用反复切换书写代码的位置。
```html
<figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
  <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-semibold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-cyan-600">
        Sarah Dayan
      </div>
      <div class="text-gray-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
```