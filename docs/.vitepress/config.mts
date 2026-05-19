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
   // ---- 首页标签云 ----
  homeTags: {
    title: '🏷 标签',
    limit: 20,           // 超出折叠
    sort: 'desc',        // 'desc' | 'asc' | 'normal'
    showCount: true      // 显示文章数量
  },
  // ---- 全局公告弹窗 ----
  popover: {
    title: '📢 号外号外',
    duration: -1,        // -1=只弹一次；0=每次都弹不自动关；>0=毫秒后自动关
    mobileMinify: false, // 手机端自动最小化
    reopen: true,        // 右上角允许重新打开
    body: [
      { type: 'text', content: '禁止犬吠' },
    ]
  },
  // ---- 文章底部赞赏按钮 ----
  buttonAfterArticle: {
    openTitle: '夯爆了',
    closeTitle: '拉完了',
    size: 'default',     // 'small' | 'default' | 'large'
    expand: false        // 是否默认展开
  },
  // ---- 友链页 ----
  friend: [
  ],
})

export default defineConfig({
  extends: blogThemeConfig,
  title: "Gouzi的碎碎念",
  
  description: "个人在开发和生活中的日记",
  // 🔽 新增这行 head 配置来修改网站图标
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/avatar.png',
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