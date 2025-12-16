# 🕹️ JUNHO KIM PORTFOLIO  
### 8‑bit Adventure README ⚡👾

설명서 느낌:

    ┌─────────────────────────────────────────────┐
    │  HELLO WORLD, I'M JUNHO KIM 👾             │
    │  PRESS START TO VIEW MY PORTFOLIO          │
    │                 ▶ LINK START!              │
    └─────────────────────────────────────────────┘

> 🎧 **README는 8‑bit 게임 설명서 느낌**  
> 💻 실제 포트폴리오는 **모던 다크 + 웨이브 배경**으로 구현되어 있습니다.

---

## 🎮 GAME INFO

- 🏷️ **Title**: 김준호 개발자 포트폴리오  
- 🧩 **Genre**: Portfolio / Adventure / 성장 로그  
- 🌐 **Platform**: Web (Next.js + Vercel)  
- 🕹️ **Play Style**
  - 웹 프론트엔드 & 백엔드를 배우며 **풀스택**을 지향
  - AI / 클라우드 / DevOps 쪽으로 계속 확장 중인 **도전형 신입**

---

## 🧱 STAGE 0 – TECH SPEC

- ⚙️ **Engine**: Next.js (React, TypeScript)  
- 🎨 **UI**: Reactstrap + Custom CSS  
- 🚀 **Deploy**: Vercel (GitHub `main` 브랜치 자동 배포)  
- 🌊 **Style**: 다크 모드 + 파도 치듯 색이 변하는 그라디언트 배경  
- ✨ **FX**
  - Iconify, Font Awesome 아이콘
  - CSS keyframes (wave, fade‑in, scroll‑hint 등)

---

## 🗺 STAGE 1 – MAP

- 🎛 **Start Screen (Hero / Greetings)**
  - 이름, 포지션, 한 줄 소개
  - Backend / AI Integration / DevOps 뱃지
  - 스크롤 힌트 + 아래로 스킬 섹션이 살짝 보이도록 배치

- 🧠 **Skills & Proficiency**
  - Frontend / Backend / AI / DevOps 등 카테고리별 스킬
  - Progress Bar로 현재 레벨을 직관적으로 표시

- 🏢 **Experience & Education**
  - **KW International Inc. 인턴**
    - Windows AD, 계정·권한 관리, 사내 IT 지원, 다국적 팀 협업
    - 반복 이슈 정리 및 신입 교육용 IT 매뉴얼 제작
  - **광주 인공지능사관학교 6기**, **네이버 클라우드 캠프** 등 교육 이력

- 📦 **Projects**
  - 정렬: **Ondam → PostSmith → Dolpan‑Eatso → KCalculator**
  - GitHub 버튼만 남기고 Demo 버튼 제거 (실제 코드 위주)
  - 과한 hover 효과 제거, 읽기 편한 카드 중심 레이아웃

- 📡 **Contact / About**
  - GitHub, Email 등 연락 수단
  - “편하게 연락 주세요” 톤으로 마무리

---

## 💾 STAGE 2 – INSTALL & RUN

# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev

# 3. 브라우저에서 확인
http://localhost:3000빌드 & 프로덕션 실행:

npm run build
npm start---

## 📁 STAGE 3 – FILE SELECT

### `pages/`

    pages/
    ├─ index.tsx        # 메인 홈 (Hero, Skills, Experience, Projects)
    ├─ portfolio.tsx    # 포트폴리오 요약 페이지
    └─ resume.tsx       # 이력서 스타일 페이지

### `containers/`

    containers/
    ├─ Greetings.tsx    # Hero
    ├─ Skills.tsx
    ├─ Proficiency.tsx
    ├─ Experience.tsx
    ├─ Projects.tsx
    └─ Feedbacks.tsx

### `components/`

    components/
    ├─ Navigation.tsx
    ├─ ProjectsCard.tsx
    ├─ GithubProfileCard.tsx
    └─ SocialLinks.tsx

### `styles/` & root

    styles/
    └─ styles.css       # 전역 스타일 + wave 배경 애니메이션

    portfolio.ts        # 학력/경력/프로젝트/스킬 데이터

---

## ✨ DESIGN NOTES

- 🌘 **다크 테마 + 최소 포인트 컬러**
  - GitHub 다크와 비슷한 톤 위에, 파랑/보라 포인트만 살짝 사용
- 🌊 **끊기지 않는 배경**
  - Hero ~ Skills ~ Experience ~ Projects를 하나의 스테이지처럼 보이도록 구성
  - 섹션 배경은 투명, 공통 wave 배경만 공유
- 🔍 **글로우/그림자 최소화**
  - 카드, 버튼 hover 시 위치·그림자 변화 최소화
  - 내용이 먼저 읽히도록 시각적 노이즈 줄이기

---

## 🧍 PLAYER

- 👤 **Name**: 김준호 (Junho Kim)  
- 🐙 **GitHub**: https://github.com/zpzlzmz  
- ✉️ **Email**: 레포지토리 내 `SocialLinks` 설정 참고

> README만 8‑bit / 어드벤처 게임 설명서 느낌으로 작성했고,  
> 실제 사이트는 **모던 다크 포트폴리오**입니다.  
> “자기 포트폴리오를 하나의 작은 게임처럼 아끼는 개발자” 정도로 봐주시면 좋겠습니다. 🕹️
