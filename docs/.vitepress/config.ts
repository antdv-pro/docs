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
          { text: '预览地址', link: 'https://www.antdv-pro.com/' },
        ],
      },
      {
        text: '社区',
        items: [
          {
            text: 'QQ群：939791772',
            link: 'https://qm.qq.com/cgi-bin/qm/qr?k=dZMUtNNxv0BLxQwOoZwGQ7nR24GT-24s&authKey=F2Rpv5Gez5nD7Pr5HrYalfd3J6T9PEcu2TJ/femkp9ZQF+YhlvvYyrvJone8BoeT&noverify=0',
          },
          {
            text: '微信：aibayanyu2022',
            link: 'https://u.wechat.com/MASIsAa8353Hi4e59-aBPaA',
          },
          {
            text: 'discord',
            link: 'https://discord.gg/tPb4G6gXmm',
          },
          {
            text: '赞助',
            link: '/other/sponsor',
          },
        ],
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
          { text: '权限管理', link: '/guide/access' },
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
