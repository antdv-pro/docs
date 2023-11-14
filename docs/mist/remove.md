# 移除mist

在Antdv Pro中，因为我们是以同源的方式创建了一个`mock`服务，所以`server.proxy`对于我们来说就是多余的，但是我们真正开发阶段，可能是跨域的，所以接下来我们带着大家来看一下如何移除`mist`

:::tip 需要注意的是

移除`mist`以后整个项目的`mock`服务均不能正常运行。

所以请确保你已经完成了后端的对接工作，否则将会导致项目无法正常调用接口，从而导致项目无法正常运行。
:::

如果你想混合开发(mock和后端同时工作)，那么请参考[混合使用](../guide/server.md#混合使用)进行配置。

## 移除mist

### 移除相关依赖

```shell

pnpm remove @mistjs/cli nitropack

```

### 添加`vite`服务代理

在`vite.config.ts`中添加如下配置：

```ts
import { defineConfig } from 'vite'
export  default defineConfig({
    //...省略前面配置
    server: {
        //...省略前面配置
        proxy: {
            ...proxyObj,
            [env.VITE_APP_BASE_API]: {
              target: env.VITE_APP_BASE_URL,
              changeOrigin: true,
              rewrite: path => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
            },
        },
        // ...省略后面配置
    },
    //...省略后面配置
})
```


### 环境变量

当你完成上面的配置以后，默认情况下我们的配置会自动走环境变量

你只需要将环境变量中的后端服务地址改成自己的后端服务即可。

```shell
# 请求前缀
VITE_APP_BASE_API=/api
# 后端服务地址
VITE_APP_BASE_URL=http://127.0.0.1:6678/api
```
