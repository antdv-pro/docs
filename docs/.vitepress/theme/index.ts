// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
// @ts-expect-error this is component
import Sponsor from '../components/sponsor.vue'
export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    // ...
    Theme.enhanceApp(ctx)
    ctx.app.component('Sponsor', Sponsor)
  },
}
