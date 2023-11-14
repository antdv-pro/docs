# 配置

我们同样提供了一套单独的配置文件，用于配置 Mist 的行为。我们需要在项目的根目录中创建一个`mist.config.ts`。

然后在`mist.config.ts`中进行配置，例如：

```ts
import { defineConfig } from '@mistjs/cli'

export default defineConfig({
  
})

```

## nitro

我们支持配置nitro相关的配置项，我们已经进行了完全的兼容，你可以参考[nitro官网](https://nitro.unjs.io/config)

如果你想关闭`nitro`但是保留之前的编写的`servers`的文件，你可以将`nitro`配置设置为`false`


## vite

我们支持通过`mist`来配置`vite`的配置项，但是我们还是建议使用`vite.config.[tj]s`来进行配置，以便更好的迁移`vite`。


## apiPrefix

这是我们自定义的`nitro`的前缀，例如我们的项目启动后的地址是`http://localhost:5173`
那么我们的`nitro`的地址默认情况下就是`http://localhost:5173/api` 如果你需要自定义，可以通过`apiPrefix`进行配置。

