import React, { useEffect, useState } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  const [portfolioHover, setPortfolioHover] = useState(false);
  const [resumeHover, setResumeHover] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, []);

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250" style={{
          background: 'linear-gradient(180deg, #161b22 0%, #0d1117 100%)'
        }}>
          <div className="shape shape-style-1" style={{ background: 'transparent' }}>
            {/* 배경 도형들 - 다크모드 스타일 */}
            <span style={{ background: 'rgba(0, 217, 255, 0.1)' }} />
            <span style={{ background: 'rgba(124, 58, 237, 0.1)' }} />
            <span style={{ background: 'rgba(0, 217, 255, 0.05)' }} />
            <span style={{ background: 'rgba(124, 58, 237, 0.05)' }} />
            <span style={{ background: 'rgba(0, 217, 255, 0.1)' }} />
            <span style={{ background: 'rgba(124, 58, 237, 0.1)' }} />
            <span style={{ background: 'rgba(0, 217, 255, 0.05)' }} />
            <span style={{ background: 'rgba(124, 58, 237, 0.05)' }} />
            <span style={{ background: 'rgba(0, 217, 255, 0.1)' }} />
          </div>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="6">
                  <p style={{ color: '#58a6ff', fontSize: '1rem', marginBottom: '8px' }}>
                    {greetings.name}
                  </p>
                  <h1 className="display-4" style={{ 
                    color: '#e6edf3',
                    fontWeight: 600,
                    marginBottom: '1rem'
                  }}>
                    {greetings.title}
                  </h1>
                  <p className="lead" style={{ color: '#8b949e', fontSize: '1.1rem', lineHeight: '1.7' }}>{greetings.description}</p>
                  <SocialLinks />
                  <div className="btn-wrapper my-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {/* 포트폴리오 보기 버튼 */}
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      style={{
                        background: portfolioHover ? 'linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)' : 'transparent',
                        border: '2px solid #00d9ff',
                        borderRadius: '50px',
                        padding: '12px 32px',
                        fontWeight: 600,
                        color: portfolioHover ? '#fff' : '#00d9ff',
                        transition: 'all 0.3s ease',
                        minWidth: '180px'
                      }}
                      href="/portfolio"
                      onMouseEnter={() => setPortfolioHover(true)}
                      onMouseLeave={() => setPortfolioHover(false)}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-briefcase" />
                      </span>
                      <span className="btn-inner--text">
                        {portfolioHover ? '포트폴리오 보러가기 →' : '포트폴리오 보기'}
                      </span>
                    </Button>
                    {/* 이력서 보기 버튼 */}
                    {greetings.resumeLink && (
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        style={{
                          background: resumeHover ? 'linear-gradient(135deg, #7c3aed 0%, #00d9ff 100%)' : 'transparent',
                          border: '2px solid #7c3aed',
                          borderRadius: '50px',
                          padding: '12px 32px',
                          fontWeight: 600,
                          color: resumeHover ? '#fff' : '#7c3aed',
                          transition: 'all 0.3s ease',
                          minWidth: '180px'
                        }}
                        href={greetings.resumeLink}
                        onMouseEnter={() => setResumeHover(true)}
                        onMouseLeave={() => setResumeHover(false)}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-file" />
                        </span>
                        <span className="btn-inner--text">
                          {resumeHover ? '이력서 보러가기 →' : '이력서 보기'}
                        </span>
                      </Button>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <GreetingLottie animationPath="/lottie/coding.json" />
                </Col>
              </Row>
            </div>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon style={{ fill: '#0d1117' }} points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
