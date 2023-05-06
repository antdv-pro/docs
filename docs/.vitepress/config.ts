import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Antd Admin Pro',
  description: 'Ant Design Vue admin pro',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指引', link: '/guide/introduction' },
      { text: '预览地址', link: 'https://www.antdv-pro.com/' },
      { text: '项目地址', link: 'https://github.com/antd-tiny-vue/antdv-admin-pro' },
    ],

    sidebar: [
      {
        text: '指引',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '迭代计划', link: '/guide/plan' },
          { text: '开始使用', link: '/guide/getting-started' },
          { text: '布局主题', link: '/guide/layout-theme' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/antd-tiny-vue/antdv-admin-pro' },
    ],
  },
})
