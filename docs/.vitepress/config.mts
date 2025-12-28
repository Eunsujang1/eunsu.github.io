import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: "Eunsu's Blog",
  description: "공부한 내용을 정리하는 블로그",
  appearance: true,
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '홈', link: '/' },
      { text: '가이드', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '시작하기',
          items: [
            { text: '설치', link: '/guide/install' },
            { text: '기초', link: '/guide/basics' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Eunsujang1' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Eunsu'
    }
  }
})
