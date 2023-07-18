# 布局主题

布局是一个中后台应用必备的，AntdvPro中内置一套完整的主题系统，我们只需要在`config/default-setting.ts`中配置整个的主题系统，就可以实现通用的页面布局样式。

## 布局样式

推荐先使用[Pro站点](https://antdv-pro.com)的右侧抽屉来帮助你完成布局相关的整体风格、主题色、导航模式、内容区域宽度、固定 Header、固定侧边菜单、色弱模式等配置选择。
然后将拷贝的配置粘贴在`default-setting.ts`的配置中。

![default-setting](/default-setting.png)

```ts
export default {
  title: 'Antdv Admin Pro', // 配置标题
  theme: 'light', // 设置主题色
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', // 配置展示的logo
  collapsed: false, // 设置菜单是否收起
  drawerVisible: false, // 设置抽屉是否显示
  colorPrimary: '#1677FF', // 设置主题色
  layout: 'mix', // 设置布局模式
  contentWidth: 'Fluid', // 设置内容区域宽度
  fixedHeader: false, // 设置固定 Header
  fixedSider: true, // 设置固定侧边菜单
  splitMenus: false, // 设置分割菜单
  header: true, // 设置显示 Header
  menu: true, // 设置显示菜单
  menuHeader: true, //  设置显示菜单头部
  footer: false, //     设置显示页脚
  colorWeak: false, // 设置色弱模式
  multiTab: true, // 设置多页签模式
  multiTabFixed: false, // 设置固定多页签
  headerHeight: 48, // 设置头部高度
  copyright: '爱吧烟雨2023', // 设置底部版权信息
}
```
