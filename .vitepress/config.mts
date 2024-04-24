import { defineConfig } from 'vitepress'
import { head } from './config/head'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { markdown } from './config/markdown'
import { metaData } from './config/metadata'
import { algolia } from './config/algolia'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 基础配置
  head: head,
  lang: metaData.lang,
  title: metaData.title,
  description: metaData.description,

  // 最后更新时间
  lastUpdated: true,

  // 简洁的url
  cleanUrls: true,

  // 输出目录
  outDir: './dist',

  // 主题配置 https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: nav,
    sidebar: sidebar,

    logo: {
      light: '/logo_light.svg',
      dark: '/logo_night.svg'
    },

    outline: {
      label: '页面导航',
      level: 'deep'
    },
    editLink: {
      pattern: 'https://github.com/yqchilde/MyNewBlog/edit/main/:path',
      text: '不妥之处，敬请雅正'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    search: {
      // provider: 'local'
      provider: 'algolia',
      options: algolia,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yqchilde/yqchilde.github.io' }
    ],
    footer: {
      copyright: 'Copyright © 2019-2024 程序员YY | CC BY-NC 4.0 |  <a href="https://beian.miit.gov.cn" target="_blank" rel="nofollow noopener">晋ICP备18003223号-2</a>'
    },
    // @ts-ignore
    articleMetadataConfig: {
      author: 'YY', // 文章全局默认作者名称
      authorLink: '/about', // 点击作者名时默认跳转的链接
    },
  },

  // markdown配置
  markdown: markdown,

  // 路由重写
  rewrites: {
    'posts/:categorie/:yyyy/:title/README.md': ':categorie/:yyyy/:title.md',
    'posts/:categorie/:type/index.md': ':categorie/:type.md',
    'posts/:categorie/index.md': ':categorie.md',
    'pages/:categorie/index.md': ':categorie.md'
  },

  srcExclude: [
    './.github/',
    './README.md',
  ],
})
