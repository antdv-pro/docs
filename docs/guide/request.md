# 请求配置

项目中默认自带了基于`axios`封装的基础的请求配置，在`utils/request.ts`中提供了最基础的配置，可以根据自己的项目需求进行二次扩展。

## 自动导入

为了方便我们在项目中使用，在`composables/api.ts`中提供了自动导入的配置。

默认支持了四种自动请求方式的自动导入，分别是：`useGet`、`usePost`、`usePut`以及`useDelete`。

## 请求用法

我们并没有对api的请求存放位置做过多的封装限制，大家可以根据自己的使用习惯进行使用。

我们推荐在`src`下创建一个`api`的目录用于存放所有的请求接口，按照与页面结构相同的分组形式进行使用。

下面是一个简单的例子：

例如我们在`pages/common/login.vue`的页面，我们可以在`api/common/login.ts`中创建一个`login`的请求接口。

```ts
export interface LoginParams {
  username: string
  password: string
}

export interface LoginResultModel {
  token: string
}

export const loginApi = (params: LoginParams) => {
  return usePost<LoginResultModel, LoginParams>('/login', params)
  // 如果不希望传参数的类型，
  // 可以直接使用 usePost<LoginResultModel>('/login', params)既可
}


```

在页面中我们可以直接使用这个请求接口：


```vue
<script lang="ts" setup>
import { loginApi } from '~/api/common/login'

const handleSubmit = async()=>{
  const { data } = await loginApi({
    username: 'admin',
    password: 'admin',
  })
  console.log(data?.token)
}
</script>
```

## 响应格式


默认情况下，我们希望后端接口返回的所有数据格式应使用如下的格式：

```ts
export interface ResponseBody<T = any> {
  code: number
  data?: T // data作为一个可选参数，如果没有返回值，可以不传
  msg: string
}
```

如若格式不一致，可以在`utils/request.ts`中进行修改。


我们建议使用`restful`的接口规范，例如：

:::details 200

处理所有请求成功的状态，其中响应的状态码也应为200。

```json
{
  "code": 200,
  "data": {
    "token": "xxxxx"
  },
  "msg": "success"
}
```

在这种情况下，我们还可以扩展一些常用的其他的code码，例如：

我们实现轮询查询某个任务的状态，如果任务还在执行中，我们可以返回一个`100001`code码，表示任务还在执行中。

```json
{
  "code": 100001,
  "msg": "任务正在执行中"
}
```
当code码为`100002`的时候，表示任务执行完成。

```json
{
  "code": 100002,
  "msg": "任务执行完成"
}
```
就结束前端的轮询任务，等等

:::

:::details 401

处理未授权的请求，例如未登录的请求，响应的状态码应为401。

```json
{
  "code": 401,
  "msg": "未登录"
}
```
:::


:::details 403

其他错误的请求，例如处理请求登录接口账号密码不正确等等，响应的状态码应为403。

```json
{
  "code": 403,
  "msg": "账号或密码不正确"
}
```

:::

:::details 500

处理服务器错误的请求，例如处理服务端网关报错的情况，响应的状态码应为500。

```json
{
  "code": 500,
  "msg": "服务器错误"
}
```

:::
