import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Fade from "react-reveal/Fade";
import Navigation from "../components/Navigation";

const Resume = () => {
  return (
    <>
      <Navigation />
      <main style={{ background: '#0d1117', minHeight: '100vh', paddingTop: '80px' }}>
        <Container>
          <Fade bottom duration={800}>
            <div className="text-center py-5">
              <img 
                src="/profile.png" 
                alt="김준호"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '12px',
                  objectFit: 'cover',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                  marginBottom: '1.5rem'
                }}
              />
              <h1 style={{ color: '#e6edf3', fontSize: '2.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                김준호
              </h1>
              <p style={{ color: '#58a6ff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Backend Developer
              </p>
              <div style={{ color: '#8b949e', fontSize: '0.95rem' }}>
                <span style={{ marginRight: '24px' }}>zpzlzmz@gmail.com</span>
                <span style={{ marginRight: '24px' }}>010-2687-7488</span>
                <span>서울</span>
              </div>
            </div>
          </Fade>

          <Fade bottom duration={800} delay={100}>
            <Card style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', marginBottom: '24px' }}>
              <CardBody className="p-4">
                <p style={{ color: '#c9d1d9', lineHeight: '1.8', margin: 0 }}>
                  Spring Boot 기반 백엔드 개발자입니다. 그룹웨어, CMS 등 실무형 프로젝트를 진행하며 
                  API 설계부터 배포까지 전 과정을 경험했습니다. Next.js 프론트엔드 개발과 
                  YOLO, GPT-Vision 등 AI 모델 연동 경험도 있습니다. 
                  미국에서 1년간 근무하며 영어 커뮤니케이션 역량을 쌓았습니다.
                </p>
              </CardBody>
            </Card>
          </Fade>

          <Row>
            <Col lg="6">
              <Fade bottom duration={800} delay={150}>
                <Card style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', marginBottom: '24px' }}>
                  <CardBody className="p-4">
                    <h4 style={{ color: '#e6edf3', marginBottom: '1.2rem', fontWeight: 500 }}>경력</h4>
                    <div style={{ borderLeft: '2px solid #30363d', paddingLeft: '16px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>2022.03 - 2023.03</div>
                      <h5 style={{ color: '#e6edf3', margin: '4px 0', fontSize: '1rem', fontWeight: 500 }}>KW International Inc.</h5>
                      <div style={{ color: '#58a6ff', fontSize: '0.9rem', marginBottom: '8px' }}>Tech Support Intern, 미국 CA</div>
                      <ul style={{ color: '#8b949e', paddingLeft: '18px', margin: 0, fontSize: '0.9rem', lineHeight: '1.7' }}>
                        <li>Windows AD 환경에서 사용자 계정 및 권한 관리</li>
                        <li>Outlook, 프린터, 네트워크 장애 대응</li>
                        <li>반복 이슈 문서화 및 신입 교육 자료 제작</li>
                        <li>영어/한국어 이중 언어로 다국적 팀 협업</li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Fade>

              <Fade bottom duration={800} delay={200}>
                <Card style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', marginBottom: '24px' }}>
                  <CardBody className="p-4">
                    <h4 style={{ color: '#e6edf3', marginBottom: '1.2rem', fontWeight: 500 }}>학력</h4>
                    
                    <div style={{ borderLeft: '2px solid #30363d', paddingLeft: '16px', marginBottom: '20px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>2024.12 - 2025.06</div>
                      <h5 style={{ color: '#e6edf3', margin: '4px 0', fontSize: '1rem', fontWeight: 500 }}>네이버 클라우드 캠프</h5>
                      <div style={{ color: '#58a6ff', fontSize: '0.9rem' }}>웹 풀스택 개발자 과정 17기</div>
                    </div>

                    <div style={{ borderLeft: '2px solid #30363d', paddingLeft: '16px', marginBottom: '20px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>2023.03 - 2024.03</div>
                      <h5 style={{ color: '#e6edf3', margin: '4px 0', fontSize: '1rem', fontWeight: 500 }}>Columbia West College</h5>
                      <div style={{ color: '#58a6ff', fontSize: '0.9rem' }}>미국 LA, 영어 과정 수료</div>
                    </div>

                    <div style={{ borderLeft: '2px solid #30363d', paddingLeft: '16px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.85rem' }}>2016.03 - 2022.03</div>
                      <h5 style={{ color: '#e6edf3', margin: '4px 0', fontSize: '1rem', fontWeight: 500 }}>동서대학교</h5>
                      <div style={{ color: '#58a6ff', fontSize: '0.9rem' }}>컴퓨터공학부 학사, GPA 3.7/4.5</div>
                    </div>
                  </CardBody>
                </Card>
              </Fade>

              <Fade bottom duration={800} delay={250}>
                <Card style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', marginBottom: '24px' }}>
                  <CardBody className="p-4">
                    <h4 style={{ color: '#e6edf3', marginBottom: '1rem', fontWeight: 500 }}>수상</h4>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#c9d1d9', fontSize: '0.95rem' }}>동서대학교 아이디어 공모전 장려상</span>
                      <span style={{ color: '#8b949e', fontSize: '0.85rem' }}>2021</span>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col lg="6">
              <Fade bottom duration={800} delay={150}>
                <Card style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', marginBottom: '24px' }}>
                  <CardBody className="p-4">
                    <h4 style={{ color: '#e6edf3', marginBottom: '1.2rem', fontWeight: 500 }}>기술 스택</h4>
                    
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase' }}>Backend</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['Java', 'Spring Boot', 'JPA', 'FastAPI', 'Python'].map(s => (
                          <span key={s} style={{ background: '#21262d', color: '#c9d1d9', padding: '4px 10px', fontSize: '0.8rem', borderRadius: '4px' }}>{s}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase' }}>Frontend</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['Next.js', 'React', 'TypeScript', 'Tailwind'].map(s => (
                          <span key={s} style={{ background: '#21262d', color: '#c9d1d9', padding: '4px 10px', fontSize: '0.8rem', borderRadius: '4px' }}>{s}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase' }}>Database</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['MySQL', 'Redis'].map(s => (
                          <span key={s} style={{ background: '#21262d', color: '#c9d1d9', padding: '4px 10px', fontSize: '0.8rem', borderRadius: '4px' }}>{s}</span>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase' }}>AI/ML</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['YOLO', 'GPT-4o Vision', 'LangChain'].map(s => (
                          <span key={s} style={{ background: '#21262d', color: '#c9d1d9', padding: '4px 10px', fontSize: '0.8rem', borderRadius: '4px' }}>{s}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '6px', textTransform: 'uppercase' }}>DevOps</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['Docker', 'Jenkins', 'Kubernetes', 'Git'].map(s => (
                          <span key={s} style={{ background: '#21262d', color: '#c9d1d9', padding: '4px 10px', fontSize: '0.8rem', borderRadius: '4px' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Fade>

              <Fade bottom duration={800} delay={200}>
                <Card style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', marginBottom: '24px' }}>
                  <CardBody className="p-4">
                    <h4 style={{ color: '#e6edf3', marginBottom: '1rem', fontWeight: 500 }}>언어</h4>
                    <div style={{ display: 'flex', gap: '40px' }}>
                      <div>
                        <span style={{ color: '#c9d1d9' }}>한국어</span>
                        <span style={{ color: '#8b949e', marginLeft: '8px' }}>Native</span>
                      </div>
                      <div>
                        <span style={{ color: '#c9d1d9' }}>영어</span>
                        <span style={{ color: '#8b949e', marginLeft: '8px' }}>Business</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Fade>

              <Fade bottom duration={800} delay={250}>
                <Card style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', marginBottom: '24px' }}>
                  <CardBody className="p-4">
                    <h4 style={{ color: '#e6edf3', marginBottom: '1rem', fontWeight: 500 }}>링크</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <a href="https://github.com/zpzlzmz" target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', color: '#c9d1d9', textDecoration: 'none', padding: '10px 14px', background: '#21262d', borderRadius: '6px', fontSize: '0.9rem' }}>
                        <i className="fa fa-github" style={{ marginRight: '10px' }} />
                        github.com/zpzlzmz
                      </a>
                      <a href="mailto:zpzlzmz@gmail.com"
                        style={{ display: 'flex', alignItems: 'center', color: '#c9d1d9', textDecoration: 'none', padding: '10px 14px', background: '#21262d', borderRadius: '6px', fontSize: '0.9rem' }}>
                        <i className="fa fa-envelope" style={{ marginRight: '10px' }} />
                        zpzlzmz@gmail.com
                      </a>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>

          <div className="text-center py-4">
            <p style={{ color: '#484f58', fontSize: '0.85rem', margin: 0 }}>2025 김준호</p>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Resume;
