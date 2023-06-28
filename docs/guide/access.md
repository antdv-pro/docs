# 权限管理

::: tip 介绍
在项目中经常有的场景是不同的用户的权限不同，通常有如下场景：

* 不同的用户在页面中可以看到的元素和操作不同
* 不同的用户对页面的访问权限不同
:::


## 权限静态枚举

我们默认提供了一个`AccessEnum`的静态枚举在`src/utils/constant.ts`中，如果你需要扩展自定义的枚举信息，也可以在这里面进行自定义的扩展。

我们下面所有描述`AccessEnum`的部分均是从这个文件夹中引用。


## 用户权限

我们在`src/stores/user.ts`中增加了一个新的属性`roles`，用于控制我们当前登录用户的权限，权限信息的获取是从后端接口中的用户信息中取得的。

我们在用户信息中也增加了一个`roles`属性，它返回的是一个数组，我们采用的是一个用户对应多个不同的权限的方式来开发的，所以我们需要在后端接口中返回一个数组，比如：

```json
{
  "id": 1,
  "username": "admin",
  "nickname": "管理员",
  "avatar": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
  "roles": ["admin", "editor"] // 权限返回一个数组，如果当前用户只有一个权限，返回的就是['admin']
}
```


## 路由控制

对于路由权限的控制，我们分为了两种情况，第一种就是采用[前端静态路由](/guide/router-config.html#路由菜单)的配置方式，我们为这种方式在`meta`中提供了一个`access`属性，你可以通过它传入权限信息，我们获取到与用户权限相匹配的信息后会自动进行展示。如下：
```ts
{
  path: '/access/admin',
  name: 'AccessAdmin',
  component: () => import('~/pages/access/admin.vue'),
  meta: {
    title: '管理员',
    access: [AccessEnum.ADMIN],// 配置只允许管理员访问
  },
}
```




## 组合式API控制（推荐⭐️）

我们还给大家提供了一个组合格式的API来控制权限方式，我们推荐使用这种方式来进行控制权限，它的使用方式如下：

```vue
<script setup lang="ts">
import { AccessEnum } from '~@/utils/constant'
const { hasAccess, roles } = useAccess()
</script>

<template>
  <div>
    <a-button v-if="hasAccess([AccessEnum.USER, AccessEnum.ADMIN])">
      普通用户
    </a-button>
    <a-button v-if="hasAccess(AccessEnum.ADMIN)" type="primary">
      管理员
    </a-button>
  </div>
</template>
```



## 组件权限控制（推荐）


为了方便对权限进行控制，我们增加了一个`Access`的组件来对权限进行控制，这种方式是基于组合式api的形式实现的。

它接收一个参数`access`，我们可以将当前能访问的权限信息传递给`Access`，由它来控制当前组件是否需要显示。

使用方式如下：

```vue
<script setup lang="ts">
import { AccessEnum } from '~@/utils/constant'
</script>

<template>
  <Access :access="[AccessEnum.USER, AccessEnum.ADMIN]">
    <a-button>普通用户</a-button>
  </Access>

  <Access :access="AccessEnum.ADMIN">
    <a-button type="primary">
      管理员
    </a-button>
  </Access>
</template>
```

## 使用指令控制

我们还支持了使用指令的方式进行控制权限，这种方式也是基于组合式api的形式实现的。


但是需要注意的是，确保你绑定到的组件是一个有根节点的组件[参考vue自定义指令](https://cn.vuejs.org/guide/reusability/custom-directives.html#usage-on-components)，如果不存在根节点，自定义指令将会失效，所以我们不推荐使用这种方式进行控制。

使用方式如下：

```vue
<script setup lang="ts">
import { AccessEnum } from '~@/utils/constant'
</script>

<template>
  <div>
    <a-button v-access="[AccessEnum.USER, AccessEnum.ADMIN]">
      普通用户
    </a-button>
    <a-button v-access="AccessEnum.ADMIN" type="primary">
      管理员
    </a-button>
  </div>
</template>
```
