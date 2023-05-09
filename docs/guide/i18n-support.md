# 国际化

完整版本的工程支持了国际化的配置

## 全局的国际化配置

默认情况下，在`src/locales`下的所有配置文件，表示全局的国际化文件，你可以在这里添加一些全局的多语言配置。

```
locales  ## 国际化目录
├─ index.ts ## 入口
└─ lang ## 国际化配置目录
   ├─ global ## 全局国际化
   │  ├─ en-US.ts
   │  └─ zh-CN.ts
   ├─ pages ## 页面多语言配置
   │  ├─ en-US.ts
   │  └─ zh-CN.ts
   ├─ en-US.ts ## 英文配置
   └─ zh-CN.ts ## 中文配置
```

## 模块级别的国际化配置

本身一个项目增加对国际化的支持后，我们不应将所有的国际化的配置放到全局配置中，我们应该将多语言的国际化配置分散到各个模块中进行处理。

例如在`pages/common`中我们创建一个`locales`的文件夹用于存放只针对`common`模块的多语言的配置。

在`locales`中分别创建`zh-CN.ts`和`en-US.ts`的文件，用于导出我们的多语言部分。

:::details zh-CN.ts

```ts
export  default {
    common:{
        'login.title':"登录"
    }
}

```
:::

:::details en-US.ts

```ts
export default {
    common:{
        'login.title':"Login"
    }
}
```
:::
如上配置后，工程会自动加载多语言的配置文件。

:::danger 需要注意的是

请确保所有的`key`均是唯一的，重复的`key`会被覆盖，如果是模块下的多语言，建议前缀使用`模块名.具体的多语言配置`，参考如上的配置。

:::

## 使用

