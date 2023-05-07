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
  return usePost<LoginParams, LoginResultModel>('/login', params)
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
