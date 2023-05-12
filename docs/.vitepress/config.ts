import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Antdv Pro',
  description: 'Ant Design Vue admin pro',
  themeConfig: {
    footer: {
      message: 'Made by Antdv Pro Team with ❤️ Aibayanyu',
      copyright: 'Copyright © 2023-present Antdv Pro Team',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指引', link: '/guide/introduction' },
      { text: '预览地址', link: 'https://www.antdv-pro.com/' },
      {
        text: '项目地址',
        items: [
          {
            text: '完整工程',
            link: 'https://github.com/antdv-pro/antdv-pro',
          },
          {
            text: '轻量版本',
            link: 'https://github.com/antdv-pro/antdv-pro/tree/mini',
          },
        ],
      },
      {
        text: '赞助',
        link: '/other/sponsor',
      },
    ],
    sidebar: [
      {
        text: '指引',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '迭代计划', link: '/guide/plan' },
          { text: '开始使用', link: '/guide/getting-started' },
          { text: '布局主题', link: '/guide/layout-theme' },
          { text: '主题样式', link: '/guide/theme-style' },
          { text: '路由配置', link: '/guide/router-config' },
          { text: '请求配置', link: '/guide/request' },
          { text: 'mock服务', link: '/guide/server' },
          { text: '国际化', link: '/guide/i18n-support' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/antdv-pro/antdv-pro' },
    ],
  },
  vite: {
    server: {
      port: 6678,
    },
  },
})
