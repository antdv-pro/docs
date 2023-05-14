# 路由配置


在pro中提供了一套完整的路由系统，可以根据动态路由文件自动生成所需要的菜单结构。

## 静态路由

静态路由也可以称之为基础路由，是一个完全脱离菜单的路由，可以用于一些不需要菜单的页面，比如登录页、404页面等。

在`router/static-routes.ts`中来配置我们的静态路由。


## 路由菜单

菜单的生成完全依赖于路由文件`router/dynamic-routes.ts`，会自动基于这个文件下的路系统动态的去生成所需要的菜单结构。

所有与菜单相关的参数全部罗列到`meta`属性下并为菜单扩展了如下的一些参数：

```ts
interface RouteMeta {
    title?: string // 菜单标题
    icon?: string // 菜单图标
    hideInMenu?: boolean // 在菜单中隐藏
    parentKeys?: string[] // 隐藏菜单配置选中的父级菜单
    url?: string // iframe模式，会自动使用这个url
    hideInBreadcrumb?: boolean // 在面包屑中隐藏
    hideChildrenInMenu?: boolean // 在菜单中隐藏子节点
    keepAlive?: boolean // 是否进行保活配置
    target?: '_blank' | '_self' | '_parent' // 链接打开方式，当配置的path为全连接的时候
    affix?: boolean // 开启多页签模式的情况下，是否作为固定的页签展示
  }
```

## 后端菜单

在大多数情况下，我们的菜单都是由后端来提供的，所以我们需要将后端的菜单数据转换成我们需要的路由结构。

后端菜单的数据结构如下：

```ts
interface MenuDataItem {
  // 唯一id
  id?: string | number
  // 标题
  title: string | (() => VNodeChild)
  // 图标
  icon?: string | (() => VNodeChild)
  // 地址
  path: string
  // 绑定的哪个组件，默认自带的组件类型分别是：Iframe、RouteView和ComponentError
  component?: string
  // 子集菜单
  children?: MenuDataItem[]
  // 重定向地址
  redirect?: string
  // 哪些是固定页签
  affix?: boolean
  // 父级菜单的id
  parentId?: string | number | null
  // 同路由中的name，主要是用于保活的左右
  name?: string
  // 是否隐藏当前菜单
  hideInMenu?: boolean
  // 如果使用了隐藏，那么点击当前菜单的时候，可以使用父级的key
  parentKeys?: string[]
  // 如果当前是iframe的模式，需要有一个跳转的url支撑，其不能和path重复，path还是为路由
  url?: string
  // 是否存在面包屑
  hideInBreadcrumb?: boolean
  // 是否需要显示所有的子菜单
  hideChildrenInMenu?: boolean
  // 是否保活
  keepAlive?: boolean
  // 这里包含所有的父级元素
  matched?: MenuDataItem[]
  // 全连接跳转模式
  target?: '_blank' | '_self' | '_parent'
}
```

生成路由中的`component`的方法是通过，读取`pages`文件夹下的所有`vue`文件来实现的：
```ts
const routerModules = import.meta.glob([
  '~/pages/**/*.vue',
  '!~/pages/**/*copy.vue',
  '!~/pages/**/component',
  '!~/pages/**/components',
  '!~/pages/**/composables',
  '!~/pages/**/hooks',
  '!~/pages/**/modules',
  '!~/pages/**/plugins',
  '!~/pages/**/tests',
  '!~/pages/**/test',
  '!~/pages/**/locales',
  '!~/pages/common',
  '!~/pages/exception',
])
```
带有`!`的表示排除的文件，这些文件都是一些公共的文件，不需要作为路由来生成，如果你还有其他的文件夹需要排除，可以在`router/router-modules.ts`中进行配置。

::: tip 配置规则

在后台添加一个页面的的时候，可以以`pages`作为根目录，比如`pages/system/user/index.vue`，那么在后台添加的时候，只需要给`component`属性一个`system/user`即可。

如果当前页面是一个父级页面的话，那么可以在后台添加的时候，`component`需要填写一个`RouteView`，父级页面需要有一个`children`属性，用于存放子页面，并且需要配置一个`redirect`作为重定向的地址。

如果当前是一个`iframe`页面的话，我们需要配置一个`url`属性，这个属性是一个全连接的地址，其中`component`需要配置为`IFrame`，比如`https://www.baidu.com`。

如果当前的页面是一个外链的话，我们不需要填写`component`的值或者你可以填写一个`RouteView`，然后在`path`属性中配置一个全连接的地址，比如`https://www.baidu.com`。

:::
