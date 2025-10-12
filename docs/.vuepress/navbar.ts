/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' ,/*icon: 'home'*/},
  { text: '文档', link: '/docs/mc-server/start/' ,activeMatch: '^/docs/',/*icon: 'book'*/},
  { text: '博客', link: '/blog/',/*icon:'blog' */},
  { text: '使用协议', link: '/eula/',/*icon:'file-lines'*/ },
  { text: '更新日志', link: '/msl-changelogs/',/*icon:'paper-plane'*/ },
  { text: '友情链接', link: '/friends/',/*icon:'link' */},
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  /* {
    text: '笔记',
    items: [{ text: '示例', link: '/demo/README.md' }]
  }, */
])
