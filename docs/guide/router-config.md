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
