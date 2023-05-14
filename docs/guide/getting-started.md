# 开始使用

## 环境要求

- [NodeJS](https://nodejs.org/en) >= 16.0.0
- [Pnpm](https://pnpm.io/zh/)(建议最新版本) >= 7.0.0
- [Git](https://git-scm.com/)


## 代码获取

1. 可以直接去`github`进行下载。
2. 可以直接`git clone`代码进行开发。
3. 可以使用`fork`代码到自己的仓库进行开发。
4. 可以使用`degit`进行下载(⭐️推荐)。

如下：

::: code-group

```shell [git clone]

# clone代码
git clone https://github.com/antdv-pro/antdv-pro.git [your project name]

# 切换到项目目录
cd [your project name]

# 安装依赖

pnpm install

```

```bash [degit下载]

# 安装degit
npm  i -g degit

# 拉取代码
degit antdv-pro/antdv-pro [your project name]

# 切换到项目目录
cd [your project name]

# 安装依赖

pnpm install
```
:::

## 包管理

因为项目比较特殊，默认情况下我们使用了`monorepo`的多包管理的方式，所以我们使用`pnpm`进行包管理。

如果你没有安装`pnpm`，参考[pnpm.io](https://pnpm.io/zh/)进行安装。

### 安装依赖

由于开启了多包管理，所以如果需要增加依赖安装的命令有些小小的不同。

```bash
## 给项目安装生产环境依赖
pnpm add [package name] -w
## 给项目安装开发环境依赖
pnpm add [package name] -Dw
## 给servers安装生产环境依赖
pnpm add [package name] -F servers
## 给packages安装生产环境依赖
pnpm add [package name] -D -F packages
```

`[packahe name]`替换成你需要安装的包名即可。

## 开发工具配置

### VSCode(⭐️推荐)


本项目推荐使用VSCode进行开发，需要安装的插件如下：

- [Vue Language Features (Volar) ](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue服务插件
- [TypeScript Vue Plugin (Volar) ](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - Vue 的TS服务插件
- [Volar Takeover Mode](https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode) - Volar Takeover 模式配置
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码规范工具
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - unocss 写法提示插件

1. 配置对当前项目的`eslint`的自动保存。

在你的项目根目录下创建一个`.vscode/settings.json`的文件（如果存在这个文件，直接修改即可）。

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": false, // 关闭全局自定义格式化
    "source.fixAll.eslint": true, // 开启eslint保存自动格式化
  },
}
```

开启后在修改代码后保存，会自动格式化代码。如果不能格式化，请检查是否与全局配置的`setting.json`文件冲突。

2. 代码爆红问题

如果你的代码爆红，可以尝试以下几种方式解决：

* 没有开启volar takeover模式。
* 没有禁用vetur插件。
* 重启vscode进入任意一个vue文件查看右下角是否显示`vue takeover`的标识，不显示代表没有配置成功

### WebStorm

使用最新版本的`webstorm`对`vue3 + ts5.x`的支持目前仍然存在一些问题，建议使用`VSCode`进行开发。

在webstorm中只需要配置eslint即可，在Settings中搜索：`Eslint`，然后做如下的配置：

![idea](/webstorm.png)

这样就完成了webstorm的保存项目自动格式化的功能。

## 目录结构

```
antdv-pro
├─ public ## 静态资源文件夹
├─ scripts ## 工程脚本文件
├─ themes ## 主题文件夹
├─ servers ## nitro mock服务文件夹
├─ types ## 类型声明文件夹
├─ src ## 主项目文件夹
│  ├─ App.vue ## 组件入口
│  ├─ assets  ## 静态资源文件夹
│  ├─ components ## 组件文件夹会这里的组件会自动导入
│  ├─ composables ## 组合式api文件夹，默认会自动导入
│  ├─ config ## 配置文件夹
│  │  └─ default-setting.ts ## 主题配置文件
│  ├─ layouts ## 布局文件夹
│  ├─ main.ts ## 项目整体入口
│  ├─ pages ## 页面文件夹
│  ├─ router ## 路由配置文件
│  │  ├─ dynamic-routes.ts ## 动态路由文件夹，这里面配置的会同步生成菜单
│  │  ├─ generate-route.ts ## 生成动态路由结构
│  │  ├─ router-guard.ts ## 路由拦截
│  │  └─ static-routes.ts ## 静态路由
│  ├─ stores ## pinia配置文件夹，默认支持自动导入
│  └─ utils ## 工具函数
├─ .env ## 默认环境配置文件
├─ .env.development ## 开发环境配置文件
├─ .eslintignore ## eslint忽略文件
├─ .eslintrc ## eslint配置文件
├─ index.html
├─ tsconfig.json ## ts配置文件
├─ tsconfig.node.json ## vite.config.ts的ts配置
├─ package.json ## 依赖描述文件
├─ pnpm-lock.yaml ## pnpm包管理版本锁定文件
├─ unocss.config.ts ## unocss配置文件
├─ vercel.json ## 发布到vercel配置文件
└─ vite.config.ts ## vite配置文件
```


## CURD实例

在`/pages/dashbord/analytsis.vue`中，我们添加了一个`CRUD`的实例，这个实例是基于`axios`进行封装的，可以参考使用。

### 移除实例

如果不需要这个实例，可以直接将`components/analysis-modal.vue`和`components/interface.ts`文件删除，然后在`/pages/dashbord/analytsis.vue`中做如下的替换即可：

```vue
<script lang="ts" setup>

</script>

<template>
  <div>
    <h1>分析页</h1>
  </div>
</template>

```
