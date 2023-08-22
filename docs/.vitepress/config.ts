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
            link: 'https://git.lingyu.org.cn/yanyu/images/raw/branch/main/wx-group.jpg',
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
          { text: '更新日志', link: '/guide/change-log' },
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
      {
        icon: {
          svg: '<svg t="1692675420788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4012" width="600" height="600"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4013"></path></svg>',
        },
        link: 'https://gitee.com/antdv-pro/antdv-pro',
      },
    ],
  },
  vite: {
    server: {
      port: 6678,
    },
  },
})
