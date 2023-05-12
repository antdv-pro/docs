# 主题样式

在`ant-design-vue@4`的版本中，全部使用了`cssinjs`进行重构后，我们想要封装一些兼容`antd`样式主题风格的组件是比较麻烦的，所以我们提供了两种可行的实现方案。

## 方案一

使用我们提供的`useAntdToken`，默认会加载所有的`antd`样式变量，具体的变量信息[定制主题](https://next.antdv.com/docs/vue/customize-theme-cn)。

```ts
const { token } = useAntdToken()

const colorPrimary = computed(() => token.value.colorPrimary)

```


## 方案二

考虑到部分用户会抽离成单个的`css`文件，所以我们提供了`css-var`模式的变量支持，同样，我们支持也是支持`useAntdToken`中导出的所有变量。


具体使用如下：

在`useAntdToken`中，我们需要通过`token.colorPrimary`进行使用，那么我们在`css`文件中需要通过`var(--pro-ant-color-primary)`进行使用。


所有的`css-var`变量的前缀都是`--pro-ant-`开始，驼峰命名，例如`colorPrimary`，那么对应的`css-var`就是`--pro-ant-color-primary`。


```css
.a{
    color: var(--pro-ant-color-primary);
}

```


## unocss的使用方案


对于unocss，我们也提供了一套相对简单的使用方案，这种方案是基于`css-var`的方案实现的，我们已经在`unocss`中进行了内置。


那么你可以通过类名的方式，直接进行使用，例如：

```html
<div bg-primary w-100px h-100px />
<span c-primary>
  这里是Antdv的主题效果
</span>
```

目前内置的变量如下：

::: details 变量名
```md
primary
success
warning
error
info
textBase
bgBase
text
textSecondary
textTertiary
textQuaternary
fill
fillSecondary
fillTertiary
fillQuaternary
bgLayout
bgContainer
bgElevated
bgSpotlight
border
borderSecondary
primaryBg
primaryBgHover
primaryBorder
primaryBorderHover
primaryHover
primaryActive
primaryTextHover
primaryText
primaryTextActive
successBg
successBgHover
successBorder
successBorderHover
successHover
successActive
successTextHover
successText
successTextActive
errorBg
errorBgHover
errorBorder
errorBorderHover
errorHover
errorActive
errorTextHover
errorText
errorTextActive
warningBg
warningBgHover
warningBorder
warningBorderHover
warningHover
warningActive
warningTextHover
warningText
warningTextActive
infoBg
infoBgHover
infoBorder
infoBorderHover
infoHover
infoActive
infoTextHover
infoText
infoTextActive
bgMask
white
```
:::

你也可以根据自己的需求，进行自定义的变量，具体的使用方式可以参考[UnoCSS Theme](https://unocss.dev/config/theme)


:::tip 注意

变量列表是驼峰，但是在写类名的时候，需要使用`-`进行连接，例如`textSecondary`，那么对应的类名就是`bg-text-secondary`。
:::
