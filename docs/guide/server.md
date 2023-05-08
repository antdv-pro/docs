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
