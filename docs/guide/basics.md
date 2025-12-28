# 기본 사용법

## 페이지 추가

새로운 마크다운 파일을 `docs` 폴더에 추가하면 자동으로 사이트에 포함됩니다.

```
docs/
├── index.md           # 홈페이지
├── markdown-examples.md
└── guide/
    ├── index.md
    ├── install.md
    └── basics.md      # 새로운 페이지
```

## 네비게이션 설정

[config.mts](config.mts) 파일에서 네비게이션 메뉴를 설정할 수 있습니다:

```javascript
nav: [
  { text: '홈', link: '/' },
  { text: '가이드', link: '/guide/' }
]
```

## 사이드바 설정

문서별로 다른 사이드바를 설정할 수 있습니다:

```javascript
sidebar: {
  '/guide/': [
    {
      text: '시작하기',
      items: [
        { text: '설치', link: '/guide/install' }
      ]
    }
  ]
}
```

## 마크다운 문법

모든 표준 마크다운 문법을 지원합니다:

- **굵은 텍스트**: `**텍스트**`
- *기울임*: `*텍스트*`
- 코드: `` `코드` ``
- 제목: `# 제목 1`
- 리스트, 테이블 등

## 커스터마이징

`docs/.vitepress/theme` 폴더를 생성하여 테마를 커스터마이징할 수 있습니다.
