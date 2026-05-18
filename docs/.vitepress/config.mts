import { defineConfig } from 'vitepress'
import { getThemeConfig } from '@sugarat/theme/node'

// 2. 传入你的博客个性化配置
const blogThemeConfig = getThemeConfig({
  author: 'Gouzi', //文章默认作者
  hotArticle: { nextText: '下一篇' }, // 热门文章配置
  // ---- 首页 ----
  home: {
    motto: '喔~喔~喔~',
    inspiring: ['学习中...', '记录踩坑', '偶尔划水'], // 打字机效果，轮播
    pageSize: 6                        // 每页文章数
  },
  // ---- 友链页 ----
  friend: [
    { nickname: '粥里有糖', des: '主题作者', avatar: 'https://...', url: 'https://sugarat.top' }
  ],
})

export default defineConfig({
  extends: blogThemeConfig,
  title: "Gouzi的碎碎念",
  description: "个人在开发和生活中的日记",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章分类', link: '/tags' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XiaomingChild' }
    ]
  },
  vite: {
    ssr: {
      noExternal: ['@sugarat/theme']
    }
  }
})