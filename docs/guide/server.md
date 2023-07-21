#  服务端配置

采用`nitro`作为mock数据服务。

## 为什么使用nitro

我们希望的是`mock`服务尽可能的不要侵入到我们的项目中和尽可能少的修改项目的代码，`nitro`作为一个独立的服务，抽离到`servers`目录下，不会对项目产生任何影响。

## 优点

- 无侵入性
- 独立的服务
- 可以使用`nodejs`的任何模块
- 可以使用`typescript`进行开发
- 热更新支持
- 小项目可以直接使用`nitro`进行开发后端服务

## 如何使用nitro

具体的使用，大家可以参考[Nitro Docs](https://nitro.unjs.io/guide/getting-started)

## 移除nitro

自己开发了后端服务，不需要`nitro`了，那么如何移除呢？

可以直接删除`servers`目录，然后再删除掉`pnpm-workspace.yaml`中的`servers`配置，重新`pnpm install`即可完成移除。

## 混合使用

在开发后端的过程中，考虑到开发者并不会一次性的对接所有的数据结构，所以我们提供了一种混合使用的方案，

方便在开发完成一个接口以后，可以进行立即调试，也不会影响其他mock接口的访问，等完成全部接口的开发后只需要进行环境变量的替换即可。

:::danger 注意
需要注意的是这种模式只允许在开发模式下使用，在生产环境下不会生效！！！
:::

首先你需要在`.env.development`中增加如下的配置：

```diff
+ VITE_APP_BASE_API_DEV=/dev-api
# 你本地服务开发环境server地址，例如：http://127.0.0.1:8000
+ VITE_APP_BASE_URL_DEV=http://127.0.0.1:8000/
```

然后在你需要自行调试接口的部分增加一个属性进行控制，例如登录接口：

```diff
export const loginApi = (params: LoginParams | LoginMobileParams) => {
  return usePost<LoginResultModel, LoginParams | LoginMobileParams>('/login', params, {
    // 设置为false的时候不会携带token
    token: false,
    // 开发模式下使用自定义的接口
+    customDev: true,
  })
}
```

像`useGet`、`usePut`、`useDelete`都会存在一个`config`配置项，都是通过第三个参数进行配置。

```ts
useGet(url, params, config)
useGet(url, null, {
  customDev: true,
})

usePut(url, params, config)
usePut(url, null, {
  customDev: true,
})

useDelete(url, params, config)
useDelete(url, null, {
  customDev: true,
})
```