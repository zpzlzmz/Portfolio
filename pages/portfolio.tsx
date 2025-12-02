import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, Table } from "reactstrap";
import Fade from "react-reveal/Fade";
import Navigation from "../components/Navigation";

// 통일된 색상 팔레트 (모노톤 + 포인트)
const colors = {
  primary: '#58a6ff',      // 부드러운 파란색
  secondary: '#8b949e',    // 회색
  accent: '#30363d',       // 다크 그레이
  text: '#e6edf3',         // 밝은 텍스트
  muted: '#8b949e',        // 흐린 텍스트
  card: '#161b22',         // 카드 배경
  border: '#30363d',       // 테두리
};

const projects = [
  {
    id: "kcalculator",
    name: "KCalculator",
    subtitle: "AI 기반 건강 식단 관리 서비스",
    period: "2024.10 ~ 2024.12",
    team: "4인 팀 / 풀스택 개발 & AI 파이프라인",
    description: "음식 사진 한 장으로 칼로리 분석부터 맞춤 식단 추천까지",
    tech: ["Next.js 15", "TypeScript", "FastAPI", "YOLO11-large", "GPT-4o Vision", "MySQL", "Redis"],
    github: "https://github.com/food-calorie-vision",
    color: "#00d9ff",  // 시안
    features: [
      { name: "AI 음식 분석", desc: "YOLO11 탐지 → GPT-4o Vision 4개 후보 → 식약처 DB 매칭" },
      { name: "맞춤 식단 추천", desc: "Harris-Benedict 공식 기반 TDEE 계산, 3가지 스타일 옵션" },
      { name: "건강 점수", desc: "NRF9.3 기반 0~100점 영양 균형 수치화" },
      { name: "레시피 추천", desc: "Roboflow API로 냉장고 재료 인식 → 건강 레시피 제안" },
    ],
    highlights: [
      {
        title: "YOLO + GPT-Vision + DB 3단계 파이프라인",
        problem: "GPT-Vision만 사용 시 환각 문제, DB만 사용 시 인식 정확도 저하",
        solution: "YOLO11 탐지 → GPT-4o 추출 → MySQL 매칭 파이프라인 구축",
        result: "1차 음식명 → 2차 재료명 → 3차 대분류 폴백으로 매칭률 대폭 향상"
      },
      {
        title: "NRF9.3 건강 점수 시스템",
        problem: "단순 칼로리 계산만으로는 영양 균형 파악 어려움",
        solution: "권장 영양소 9개 / 제한 영양소 3개 기준 점수 알고리즘 적용",
        result: "일일 식단의 영양 균형을 직관적으로 수치화"
      }
    ],
  },
  {
    id: "dolpan-eatso",
    name: "Dolpan-Eatso",
    subtitle: "AI 기반 스마트 한우 개체 관리 시스템",
    period: "2025.07 (해커톤)",
    team: "5인 팀 / 풀스택 & AI 파이프라인",
    description: "스마트폰 카메라로 소의 BCS 분석 및 맞춤 사료 추천",
    tech: ["Next.js 14", "FastAPI", "YOLOv8", "ResNet", "LangChain", "GPT-4o-mini"],
    github: "https://github.com/dolpan-eatso",
    color: "#a855f7",  // 보라
    features: [
      { name: "AI BCS 분석", desc: "YOLOv8 후구 탐지 → ResNet BCS 5~9점 판정" },
      { name: "맞춤 사료 추천", desc: "BCS 점수 기반 조사료/곡물사료 배합비 자동 계산" },
      { name: "AI 챗봇", desc: "LangChain + Function Calling으로 자연어 명령 처리" },
      { name: "대시보드", desc: "Recharts로 BCS 변화 추이, 사료비 분석 시각화" },
    ],
    highlights: [
      {
        title: "YOLOv8 + ResNet 2단계 AI 파이프라인",
        problem: "전체 이미지에서 BCS 분석 시 정확도 저하",
        solution: "YOLOv8로 후구 영역만 탐지 → 크롭 이미지를 ResNet에 입력",
        result: "AI Hub 사전학습 모델 활용, BCS 5~9점 분류 및 신뢰도 제공"
      },
      {
        title: "LangChain AI Agent 챗봇",
        problem: "단순 FAQ 매칭으로는 다양한 요청 처리 불가",
        solution: "Function Calling으로 페이지 이동, 설정 변경 등 프로그램 제어",
        result: "자연어로 '대시보드로 이동해줘' 등 명령 처리 가능"
      }
    ],
  },
  {
    id: "postsmith",
    name: "PostSmith",
    subtitle: "Spring Boot + Next.js 기반 CMS 플랫폼",
    period: "2025.05 ~ 2025.06",
    team: "5인 팀 / 카테고리·메뉴 관리 담당 (기여도 30%)",
    description: "모두가 쉽게 사용할 수 있는 블로그 생성 및 관리 서비스",
    tech: ["Spring Boot", "Next.js", "TypeScript", "React DnD", "NKS", "Jenkins"],
    github: "https://github.com/ncc-final-group",
    demo: "https://www.postsmith.kro.kr/",
    color: "#22c55e",  // 초록
    features: [
      { name: "블로그 생성", desc: "사용자별 블로그 생성, 테마/플러그인 적용" },
      { name: "카테고리 관리", desc: "React DnD 드래그 앤 드롭 트리, 2단계 계층 구조" },
      { name: "메뉴 자동화", desc: "블로그 유형에 따라 URI 자동 생성" },
      { name: "MSA 배포", desc: "Naver Cloud Kubernetes 기반 마이크로서비스" },
    ],
    highlights: [
      {
        title: "React DnD 카테고리 트리 관리",
        problem: "텍스트 입력 방식의 카테고리 관리는 직관성 부족",
        solution: "드래그 앤 드롭 트리 UI 구현, 2단계 계층으로 DB 설계 단순화",
        result: "사용자가 직관적으로 카테고리 순서/계층 변경 가능"
      },
      {
        title: "NKS 기반 MSA 배포",
        problem: "단일 서버 배포 시 트래픽 변동에 취약",
        solution: "Naver Cloud Kubernetes Service로 마이크로서비스 배포",
        result: "오토스케일링으로 안정적인 서비스 운영"
      }
    ],
  },
  {
    id: "ondam",
    name: "Ondam",
    subtitle: "Spring Boot 기반 사내 그룹웨어",
    period: "2025.03 ~ 2025.04",
    team: "6인 팀 / 쪽지 시스템 & 공유 자료실 담당",
    description: "모든 구성원이 함께 소통하고 협업할 수 있는 공간",
    tech: ["Spring Boot", "Thymeleaf", "JPA", "MySQL", "WebSocket", "SSE", "Jenkins"],
    github: "https://github.com/bitcamp17-semi/ondam",
    demo: "http://223.130.151.54/",
    color: "#f59e0b",  // 주황
    features: [
      { name: "쪽지 시스템", desc: "SSE 실시간 알림, 중요 메시지 필터링, 검색 기능" },
      { name: "공유 자료실", desc: "부서별 자료 공유, 4개 이상 파일 zip 일괄 다운로드" },
      { name: "전자 결재", desc: "템플릿 기반 기안문 작성, 결재라인 순서 지정" },
      { name: "메신저", desc: "WebSocket 기반 1:1/그룹 채팅, 파일 전송" },
    ],
    highlights: [
      {
        title: "SSE 기반 실시간 알림 시스템",
        problem: "쪽지 수신 시 사용자가 새로고침해야 확인 가능",
        solution: "Server-Sent Events로 결재/쪽지/일정 등록 시 즉시 알림",
        result: "새로고침 없이 실시간 알림 수신, UX 향상"
      },
      {
        title: "파일 일괄 다운로드 기능",
        problem: "여러 파일을 하나씩 다운로드하는 번거로움",
        solution: "4개 이상 파일 선택 시 서버에서 zip 압축 후 제공",
        result: "대량 파일 다운로드 시 사용자 편의성 대폭 향상"
      }
    ],
  }
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "activity", "skills", ...projects.map(p => p.id)];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navigation />
      <main style={{ background: '#0d1117', minHeight: '100vh', paddingTop: '80px' }}>
        
        {/* 사이드 네비게이션 */}
        <div style={{
          position: 'fixed',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'none'
        }} className="d-lg-block">
          <div style={{
            background: colors.card,
            border: `1px solid ${colors.border}`,
            borderRadius: '12px',
            padding: '15px 10px'
          }}>
            {[
              { id: 'about', label: '소개' },
              { id: 'activity', label: '활동' },
              { id: 'skills', label: '스킬' },
              ...projects.map(p => ({ id: p.id, label: p.name }))
            ].map(item => (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  padding: '8px 15px',
                  margin: '3px 0',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  background: activeSection === item.id ? 'rgba(88, 166, 255, 0.1)' : 'transparent',
                  borderLeft: activeSection === item.id ? `2px solid ${colors.primary}` : '2px solid transparent',
                  color: activeSection === item.id ? colors.primary : colors.muted,
                  fontSize: '0.85rem',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <Container style={{ maxWidth: '900px' }}>
          
          {/* About Me */}
          <section id="about" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <Fade bottom duration={800}>
              <Card style={{ 
                background: colors.card, 
                border: `1px solid ${colors.border}`,
                borderRadius: '12px'
              }}>
                <CardBody className="p-4 p-md-5">
                  <h2 style={{ color: colors.text, marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                    About Me
                  </h2>
                  <Row className="align-items-center">
                    <Col md="3" className="mb-4 mb-md-0 d-flex justify-content-center">
                      <img 
                        src="/profile.png" 
                        alt="김준호 프로필"
                        style={{
                          width: '100%',
                          maxWidth: '180px',
                          aspectRatio: '1',
                          borderRadius: '12px',
                          objectFit: 'cover',
                          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
                        }}
                      />
                    </Col>
                    <Col md="5">
                      <p style={{ color: colors.text, fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                        <strong style={{ color: colors.primary }}>김준호</strong>
                      </p>
                      <p style={{ color: colors.muted, lineHeight: '1.8', marginBottom: '1rem' }}>
                        Spring Boot 기반 백엔드 개발자입니다. 그룹웨어, CMS 프로젝트를 진행하며 
                        API 설계부터 배포까지 경험했습니다. Next.js 프론트엔드와 YOLO, GPT-Vision AI 연동 경험도 있습니다.
                      </p>
                    </Col>
                    <Col md="4">
                      <div style={{ 
                        background: colors.accent, 
                        borderRadius: '8px', 
                        padding: '16px',
                        marginTop: '10px'
                      }}>
                        <div style={{ marginBottom: '12px', fontSize: '0.9rem' }}>
                          <span style={{ color: colors.muted }}>Email</span>
                          <a href="mailto:zpzlzmz@gmail.com" style={{ color: colors.text, marginLeft: '10px', textDecoration: 'none', display: 'block' }}>
                            zpzlzmz@gmail.com
                          </a>
                        </div>
                        <div style={{ marginBottom: '12px', fontSize: '0.9rem' }}>
                          <span style={{ color: colors.muted }}>GitHub</span>
                          <a href="https://github.com/zpzlzmz" target="_blank" rel="noopener noreferrer" style={{ color: colors.text, marginLeft: '10px', textDecoration: 'none', display: 'block' }}>
                            github.com/zpzlzmz
                          </a>
                        </div>
                        <div style={{ fontSize: '0.9rem' }}>
                          <span style={{ color: colors.muted }}>Location</span>
                          <span style={{ color: colors.text, marginLeft: '10px', display: 'block' }}>서울</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Fade>
          </section>

          {/* Activity & Certification - About Me 바로 아래로 이동 */}
          <section id="activity" style={{ paddingBottom: '40px' }}>
            <Fade bottom duration={800}>
              <Card style={{ 
                background: colors.card, 
                border: `1px solid ${colors.border}`,
                borderRadius: '12px'
              }}>
                <CardBody className="p-4 p-md-5">
                  <h2 style={{ color: colors.text, marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                    Activity
                  </h2>
                  <div>
                    {[
                      { period: '2024.12 ~ 2025.06', activity: '네이버 클라우드 캠프 웹 풀스택 개발자 과정 17기', type: 'education' },
                      { period: '2023.03 ~ 2024.03', activity: 'Columbia West College 영어 과정 수료 (미국)', type: 'education' },
                      { period: '2022.03 ~ 2023.03', activity: 'KW International Inc. Tech Support Intern (미국)', type: 'work' },
                      { period: '2021', activity: '동서대학교 아이디어 공모전 장려상', type: 'award' },
                      { period: '2016.03 ~ 2022.03', activity: '동서대학교 컴퓨터공학부 학사 (GPA 3.7/4.5)', type: 'education' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        padding: '12px 0',
                        borderBottom: idx < 4 ? `1px solid ${colors.accent}` : 'none',
                        alignItems: 'flex-start'
                      }}>
                        <div style={{ 
                          color: colors.muted, 
                          width: '150px', 
                          flexShrink: 0,
                          fontSize: '0.85rem'
                        }}>
                          {item.period}
                        </div>
                        <div style={{ color: colors.text, fontSize: '0.95rem' }}>
                          {item.activity}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </Fade>
          </section>

          {/* Skills */}
          <section id="skills" style={{ paddingBottom: '40px' }}>
            <Fade bottom duration={800}>
              <Card style={{ 
                background: colors.card, 
                border: `1px solid ${colors.border}`,
                borderRadius: '12px'
              }}>
                <CardBody className="p-4 p-md-5">
                  <h2 style={{ color: colors.text, marginBottom: '1.5rem', fontSize: '1.5rem' }}>
                    Skills
                  </h2>
                  <Row>
                    {[
                      { category: 'Frontend', skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'] },
                      { category: 'Backend', skills: ['Java', 'Spring Boot', 'JPA', 'FastAPI', 'Python'] },
                      { category: 'Database', skills: ['MySQL', 'Redis', 'SQLite'] },
                      { category: 'AI/ML', skills: ['YOLO', 'GPT-4o Vision', 'LangChain', 'Roboflow'] },
                      { category: 'DevOps', skills: ['Docker', 'Jenkins', 'Kubernetes', 'Git'] },
                    ].map((group, idx) => (
                      <Col md="6" lg="4" key={idx} className="mb-3">
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ color: colors.muted, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                            {group.category}
                          </span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {group.skills.map(skill => (
                            <span key={skill} style={{ 
                              background: colors.accent,
                              border: `1px solid ${colors.border}`,
                              color: colors.text,
                              padding: '4px 10px',
                              fontSize: '0.75rem',
                              fontWeight: 400,
                              borderRadius: '4px'
                            }}>{skill}</span>
                          ))}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            </Fade>
          </section>

          {/* Projects */}
          <h2 style={{ color: colors.text, marginBottom: '24px', paddingLeft: '10px', fontSize: '1.5rem' }}>
            Projects
          </h2>
          
          {projects.map((project, idx) => (
            <section key={project.id} id={project.id} style={{ paddingBottom: '30px' }}>
              <Fade bottom duration={800} delay={idx * 50}>
                <Card style={{ 
                  background: colors.card, 
                  border: `1px solid ${colors.border}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  borderLeft: `3px solid ${project.color}`
                }}>
                  {/* 프로젝트 헤더 */}
                  <div style={{ 
                    borderBottom: `1px solid ${colors.border}`,
                    padding: '20px 24px',
                    background: `linear-gradient(135deg, ${project.color}10 0%, transparent 100%)`
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                      <div>
                        <h3 style={{ color: project.color, margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
                          {project.name}
                        </h3>
                        <p style={{ color: colors.muted, margin: '4px 0 0', fontSize: '0.9rem' }}>{project.subtitle}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ color: colors.muted, fontSize: '0.85rem' }}>{project.period}</div>
                        <div style={{ color: colors.muted, fontSize: '0.8rem' }}>{project.team}</div>
                      </div>
                    </div>
                  </div>

                  <CardBody className="p-4">
                    {/* 설명 */}
                    <p style={{ color: colors.muted, marginBottom: '16px', fontSize: '0.95rem' }}>
                      {project.description}
                    </p>

                    {/* 기술 스택 */}
                    <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {project.tech.map(t => (
                        <span key={t} style={{ 
                          background: colors.accent,
                          border: `1px solid ${colors.border}`,
                          color: colors.text,
                          padding: '4px 10px',
                          fontSize: '0.75rem',
                          fontWeight: 400,
                          borderRadius: '4px'
                        }}>{t}</span>
                      ))}
                    </div>

                    {/* 주요 기능 테이블 */}
                    <div style={{ marginBottom: '20px' }}>
                      <h5 style={{ color: colors.text, marginBottom: '12px', fontSize: '0.95rem', fontWeight: 500 }}>주요 기능</h5>
                      <Table style={{ marginBottom: 0 }} borderless size="sm">
                        <tbody>
                          {project.features.map((f, i) => (
                            <tr key={i} style={{ borderBottom: i < project.features.length - 1 ? `1px solid ${colors.accent}` : 'none' }}>
                              <td style={{ color: colors.text, fontWeight: 500, width: '120px', padding: '10px 0', fontSize: '0.9rem', verticalAlign: 'top' }}>
                                {f.name}
                              </td>
                              <td style={{ color: colors.muted, padding: '10px 0', fontSize: '0.9rem' }}>
                                {f.desc}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>

                    {/* 핵심 경험 */}
                    <div style={{ marginBottom: '16px' }}>
                      <h5 style={{ color: colors.text, marginBottom: '12px', fontSize: '0.95rem', fontWeight: 500 }}>핵심 경험</h5>
                      {project.highlights.map((h, i) => (
                        <div key={i} style={{ 
                          background: colors.accent, 
                          borderRadius: '8px', 
                          padding: '14px 16px',
                          marginBottom: '10px',
                          borderLeft: `2px solid ${project.color}`
                        }}>
                          <div style={{ color: colors.text, marginBottom: '8px', fontSize: '0.9rem', fontWeight: 500 }}>{h.title}</div>
                          <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                            <div style={{ color: colors.muted, marginBottom: '4px' }}>
                              <span style={{ color: '#f47067' }}>문제</span> {h.problem}
                            </div>
                            <div style={{ color: colors.muted, marginBottom: '4px' }}>
                              <span style={{ color: colors.primary }}>해결</span> {h.solution}
                            </div>
                            <div style={{ color: colors.muted }}>
                              <span style={{ color: '#57ab5a' }}>결과</span> {h.result}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 링크 */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '6px 14px',
                          background: colors.accent,
                          border: `1px solid ${colors.border}`,
                          borderRadius: '6px',
                          color: colors.text,
                          textDecoration: 'none',
                          fontSize: '0.85rem'
                        }}
                      >
                        <i className="fa fa-github" style={{ marginRight: '6px' }} />
                        GitHub
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '6px 14px',
                            background: 'transparent',
                            border: `1px solid ${colors.border}`,
                            borderRadius: '6px',
                            color: colors.muted,
                            textDecoration: 'none',
                            fontSize: '0.85rem'
                          }}
                        >
                          <i className="fa fa-external-link" style={{ marginRight: '6px' }} />
                          Demo
                        </a>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </section>
          ))}

          {/* 푸터 */}
          <div className="text-center py-5">
            <p style={{ color: colors.muted, fontSize: '0.85rem' }}>
              © 2025 김준호
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Portfolio;
