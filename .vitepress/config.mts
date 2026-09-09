import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '直客广告系统产品文档',
  description: '直客广告系统的产品、交互、流程、数据与参考文档站点',
  base: '/direct-ads-system/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '产品总览', link: '/产品/业务模块与页面清单' },
      { text: '页面交互', link: '/交互/PRD页面功能表' },
      { text: '业务流程', link: '/流程/状态机整理' },
      { text: '数据设计', link: '/数据/数据表设计草案' }
    ],
    sidebar: [
      {
        text: '产品总览',
        items: [
          { text: '业务模块与页面清单', link: '/产品/业务模块与页面清单' },
          { text: '菜单路由结构', link: '/产品/菜单路由结构' }
        ]
      },
      {
        text: '页面与交互',
        items: [
          { text: 'PRD页面功能表', link: '/交互/PRD页面功能表' },
          { text: '页面原型大纲', link: '/交互/页面原型大纲' }
        ]
      },
      {
        text: '业务规则与流程',
        items: [
          { text: '状态机整理', link: '/流程/状态机整理' }
        ]
      },
      {
        text: '数据设计',
        items: [
          { text: '数据表设计草案', link: '/数据/数据表设计草案' }
        ]
      },
      {
        text: '参考素材',
        items: [
          { text: '广告主认证泳道图', link: '/参考/advertiser_identity_auth_swimlane.html' },
          { text: '业务流程图', link: '/参考/业务流程图.png' }
        ]
      }
    ]
  }
})
