# 설치 방법

## 시스템 요구사항

- **Node.js**: 18 이상
- **npm** 또는 **yarn**

## 설치 단계

### 1단계: Node.js 설치

[Node.js 공식 웹사이트](https://nodejs.org/)에서 LTS 버전을 다운로드하여 설치하세요.

### 2단계: 의존성 설치

프로젝트 폴더에서 다음 명령어를 실행하세요:

```bash
npm install
```

### 3단계: 개발 서버 실행

```bash
npm run docs:dev
```

이제 `http://localhost:5173`에서 웹사이트를 확인할 수 있습니다.

## 프로덕션 배포

### 빌드

```bash
npm run docs:build
```

`dist` 폴더에 정적 파일이 생성됩니다.

### 미리보기

```bash
npm run docs:preview
```
