# C-ON's Portfolio (React Version)

개발자 노시온의 포트폴리오입니다.  
React + Vite + TypeScript를 기반으로 한 모던 SPA입니다.

🌐 **원본 포트폴리오**: [https://ci5n0222.github.io/](https://ci5n0222.github.io/)

## 🎯 프로젝트 특징

- ⚡ **Vite** - 빠른 빌드 및 개발 서버
- 🎨 **원본 CSS** - 원본 포트폴리오와 시각적으로 동일한 디자인
- 📱 **반응형 디자인** - 모든 디바이스에 최적화
- 🔌 **공통 API 함수** - `apiCall`로 중앙화된 데이터 관리
- 🎭 **모달 컴포넌트** - 재사용 가능한 ProjectModal
- ♿ **접근성** - aria 속성 및 시맨틱 HTML
- 🌍 **SEO** - 메타 태그 및 언어 설정

## 📦 설치 및 실행

### 설치
```bash
npm install
```

### 개발 서버 시작
```bash
npm run dev
```
http://localhost:5173 에서 확인

### 빌드
```bash
npm run build
```

### GitHub Pages 배포
```bash
npm run deploy
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── CareerSection.tsx
│   ├── LicenseSection.tsx
│   ├── ProjectsSection.tsx
│   └── ProjectModal.tsx  # 재사용 가능한 모달
├── layouts/
│   └── MainLayout.tsx    # 헤더, 네비게이션 포함
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   └── NotFound.tsx
├── services/
│   └── api.ts            # 공통 API 함수 (apiCall)
├── styles/
│   ├── tokens.css        # 디자인 토큰 (색상, 변수)
│   ├── layout.css        # 레이아웃 및 헤더
│   └── sections.css      # 섹션 스타일
├── types/
│   └── project.ts        # 프로젝트 타입 정의
├── app/
│   └── router.tsx        # React Router 설정
├── index.css
├── main.tsx
└── App.tsx

public/
├── data/
│   └── projects.json    # 프로젝트 데이터
└── 404.html             # GitHub Pages SPA 라우팅

```

## 🎯 주요 기능

### 1. 섹션 네비게이션
- Home, About, Career, License, Projects 섹션
- 부드러운 스크롤 앵커
- 모바일 햄버거 메뉴

### 2. 프로젝트 관리
- **Works** - 실무 프로젝트 (6개)
- **Education** - 교육 프로젝트 (3개)
- **Study** - 스터디 프로젝트 (1개)
- 모달로 프로젝트 상세 정보 표시

### 3. 데이터 관리
공통 API 함수 사용:
```typescript
import { apiCall } from '../services/api';

apiCall<Project[]>(
  '/data/projects.json',
  (data) => setProjects(data),
  (error) => setError('로드 실패'),
  () => setLoading(false)
);
```

### 4. 재사용 가능한 모달
```typescript
import ProjectModal from './components/ProjectModal';

<ProjectModal 
  isOpen={isOpen}
  project={selectedProject}
  onClose={() => setIsOpen(false)}
/>
```

## 🛠 기술 스택

- **Frontend**: React 19.2.5
- **빌드**: Vite 8.0.10
- **언어**: TypeScript 6.0.2
- **라우팅**: react-router-dom 7.15.0
- **HTTP**: axios 1.16.0
- **배포**: gh-pages 6.1.1

## 📝 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 시작 |
| `npm run build` | 프로덕션 빌드 |
| `npm run lint` | ESLint 검사 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run deploy` | GitHub Pages 배포 |

## 🎨 스타일 시스템

### 색상 변수 (tokens.css)
```css
--bg: #0c1118;           /* 배경 */
--text: #e5edf7;         /* 텍스트 */
--muted: #9fb0c4;        /* 뮤트 텍스트 */
--green: #48d597;        /* 강조 초록 */
--yellow: #ffcf5a;       /* 강조 노랑 */
--blue: #67b3ff;         /* 강조 파랑 */
```

## 📱 반응형 브레이크포인트

- **768px** - 태블릿 (탭 메뉴 활성화)
- **520px** - 모바일 (최적화 레이아웃)

## 🚀 배포

### GitHub Pages (자동)
```bash
npm run deploy
```

### 수동 배포
1. `npm run build` - dist 폴더 생성
2. gh-pages 브랜치에 dist 폴더 배포

## 📄 라이선스

MIT

## 👨‍💻 개발자

**노시온 (C-ON Noh)**
- Email: vmfpsel@gmail.com
- GitHub: [Ci5N0222](https://github.com/Ci5N0222)

