import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "김준호",
  title: "Backend Developer",
  description:
    "Spring Boot 기반 백엔드 개발자입니다. 그룹웨어, CMS 프로젝트를 진행하며 API 설계부터 배포까지 경험했습니다. Next.js 프론트엔드와 YOLO, GPT-Vision AI 연동 경험도 있습니다.",
  resumeLink: "/resume",
};

export const openSource = {
  githubUserName: "zpzlzmz",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:zpzlzmz@gmail.com",
  github: "https://github.com/zpzlzmz",
};

export const skillsSection: SkillsSectionType = {
  title: "Skills",
  subTitle: "Backend & Frontend & AI",
  data: [
    {
      title: "Backend / Frontend",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("Spring Boot 기반 RESTful API 설계 및 개발"),
        emoji("Next.js/React 웹 애플리케이션 구축"),
        emoji("Docker/Jenkins CI/CD 파이프라인 구축"),
      ],
      softwareSkills: [
        { skillName: "Java", iconifyTag: "logos:java" },
        { skillName: "Spring Boot", iconifyTag: "logos:spring-icon" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        { skillName: "React", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "Nextjs", iconifyTag: "vscode-icons:file-type-light-next" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
        { skillName: "Redis", iconifyTag: "logos:redis" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Kubernetes", iconifyTag: "logos:kubernetes" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
      ],
    },
    {
      title: "AI / ML",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json",
      skills: [
        emoji("YOLO (v8, v11) 객체 탐지 모델 연동"),
        emoji("GPT-4o Vision 멀티모달 AI 통합"),
        emoji("LangChain 기반 AI 챗봇 구현"),
      ],
      softwareSkills: [
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "TensorFlow", iconifyTag: "logos:tensorflow" },
        { skillName: "OpenAI", iconifyTag: "simple-icons:openai" },
        { skillName: "FastAPI", iconifyTag: "simple-icons:fastapi" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  { Stack: "백엔드 (Java/Spring Boot)", progressPercentage: "90" },
  { Stack: "프론트엔드 (React/Next.js)", progressPercentage: "80" },
  { Stack: "AI 통합 (YOLO/GPT)", progressPercentage: "75" },
  { Stack: "DevOps (Docker/K8s)", progressPercentage: "70" },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "네이버 클라우드 캠프",
    subHeader: "웹 풀스택 개발자 과정 17기",
    duration: "2024.12 - 2025.06",
    desc: "Spring Boot, Next.js 기반 프로젝트 4개 수행, AI 모델 통합 경험",
    grade: "수료 예정",
    descBullets: [
      "팀 프로젝트 리더 경험 (KCalculator, Dolpan-Eatso)",
      "YOLO, GPT-Vision, LangChain AI 통합 경험",
    ],
  },
  {
    schoolName: "Columbia West College",
    subHeader: "American Communication Program",
    duration: "2023.03 - 2024.03",
    desc: "미국 LA에서 영어 집중 과정 1년 이수",
    grade: "수료",
    descBullets: [
      "다국적 학생들과 팀 프로젝트 경험",
      "글로벌 커뮤니케이션 역량 강화",
    ],
  },
  {
    schoolName: "동서대학교",
    subHeader: "컴퓨터공학부 학사",
    duration: "2016.03 - 2022.03",
    desc: "알고리즘, DB, 운영체제, 네트워크 등 전공 이수",
    grade: "GPA 3.7 / 4.5",
    descBullets: ["2021 아이디어 공모전 장려상"],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Tech Support Intern",
    company: "KW International Inc.",
    companyLogo: "/img/icons/common/kw-international.png",
    date: "2022.03 - 2023.03 (미국, CA)",
    desc: "Windows AD 환경에서 사내 IT 지원, 계정 관리, 네트워크 이슈 대응. 영어/한국어 이중 언어로 다국적 직원들과 협업하며 문제 정의-해결-문서화 사이클 체득.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "KCalculator",
    desc: "AI 기반 건강한 식단 관리 서비스. YOLO11-large + GPT-4o Vision + MySQL DB 3단계 통합 파이프라인으로 음식 인식 정확도 향상. NRF9.3 건강 점수 시스템으로 영양 균형 수치화.",
    github: "https://github.com/food-calorie-vision/food-calorie-vision-frontend",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  {
    name: "Dolpan-Eatso",
    desc: "AI 기반 스마트 한우 개체 관리 시스템 (해커톤). YOLOv8 Segmentation + ResNet으로 BCS 5~9점 분석. LangChain AI Agent 챗봇으로 자연어 명령 처리.",
    github: "https://github.com/dolpan-eatso/dolpan-eatso-front",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
  },
  {
    name: "PostSmith",
    desc: "Spring Boot + Next.js 기반 CMS 플랫폼. React DnD 활용 카테고리 트리 관리, Naver Cloud Kubernetes 기반 MSA 배포.",
    github: "https://github.com/ncc-final-group",
    link: "https://www.postsmith.kro.kr/",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    name: "Ondam",
    desc: "Spring Boot 기반 사내 그룹웨어. SSE 실시간 알림, WebSocket 채팅, 4개 이상 파일 zip 일괄 다운로드 기능 구현.",
    github: "https://github.com/bitcamp17-semi/ondam",
    link: "http://223.130.151.54/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

export const feedbacks: FeedbackType[] = [];

export const seoData: SEODataType = {
  title: "김준호 | 풀스택 개발자",
  description: greetings.description,
  author: "김준호",
  image: "https://avatars.githubusercontent.com/u/zpzlzmz",
  url: "https://junho-portfolio.vercel.app",
  keywords: [
    "김준호",
    "Junho Kim",
    "zpzlzmz",
    "포트폴리오",
    "개발자",
    "풀스택",
    "Spring Boot",
    "Next.js",
    "AI",
  ],
};
