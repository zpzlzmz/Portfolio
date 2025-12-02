import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { greetings, socialLinks } from "../portfolio";
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  
  const onExiting = () => setCollapseClasses("collapsing-out");
  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 맨 위인지 체크 (50px 이하)
      const atTop = currentScrollY < 50;
      setIsAtTop(atTop);
      
      // 스크롤 방향에 따라 헤더 표시/숨김
      if (atTop) {
        // 맨 위면 항상 보임
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // 위로 스크롤하면 보임
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 아래로 스크롤하면 숨김 (100px 이상일 때만)
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // 초기 상태 설정
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => router.pathname === path;

  // 간소화된 헤더 스타일 (스크롤 중)
  const compactStyle = {
    position: 'fixed' as const,
    top: isVisible ? '20px' : '-100px',
    left: '20px',
    right: 'auto',
    width: 'auto',
    backgroundColor: 'rgba(22, 27, 34, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    border: '1px solid #30363d',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    padding: '8px 16px',
    zIndex: 1000,
    transition: 'all 0.3s ease',
  };

  // 기본 헤더 스타일 (맨 위)
  const fullStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#161b22',
    borderBottom: '1px solid #30363d',
    borderRadius: 0,
    boxShadow: 'none',
    padding: undefined,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  };

  return (
    <>
      <header className="header-global">
        {isAtTop ? (
          // 맨 위일 때: 전체 헤더
          <Navbar 
            className="navbar-main" 
            expand="lg" 
            id="navbar-main"
            style={fullStyle}
          >
            <Container>
              <NavbarBrand href="/" className="mr-lg-5">
                <h2 style={{ color: '#00d9ff', margin: 0 }} id="nav-title">
                  {greetings.name}
                </h2>
              </NavbarBrand>
              <button className="navbar-toggler" aria-label="navbar_toggle" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <h3 style={{ color: '#0d1117' }} id="nav-title">
                        {greetings.name}
                      </h3>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      href="/portfolio"
                      style={{
                        color: isActive('/portfolio') ? '#00d9ff' : '#e6edf3',
                        fontWeight: isActive('/portfolio') ? 600 : 400,
                        padding: '10px 16px',
                        borderBottom: isActive('/portfolio') ? '2px solid #00d9ff' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i className="fa fa-briefcase mr-2" />
                      포트폴리오
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/resume"
                      style={{
                        color: isActive('/resume') ? '#00d9ff' : '#e6edf3',
                        fontWeight: isActive('/resume') ? 600 : 400,
                        padding: '10px 16px',
                        borderBottom: isActive('/resume') ? '2px solid #00d9ff' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i className="fa fa-file-text mr-2" />
                      이력서
                    </NavLink>
                  </NavItem>
                  <div style={{ 
                    width: '1px', 
                    height: '24px', 
                    backgroundColor: '#30363d', 
                    margin: '0 10px'
                  }} className="d-lg-block d-none" />
                  {socialLinks.github && (
                    <NavItem>
                      <NavLink
                        rel="noopener"
                        aria-label="Github"
                        className="nav-link-icon"
                        href={socialLinks.github}
                        target="_blank"
                        style={{ color: '#e6edf3' }}
                      >
                        <i className="fa fa-github" style={{ fontSize: '1.3rem' }} />
                        <span className="nav-link-inner--text d-lg-none ml-2">Github</span>
                      </NavLink>
                    </NavItem>
                  )}
                  {socialLinks.email && (
                    <NavItem>
                      <NavLink
                        rel="noopener"
                        aria-label="Email"
                        className="nav-link-icon"
                        href={socialLinks.email}
                        style={{ color: '#e6edf3' }}
                      >
                        <i className="fa fa-envelope" style={{ fontSize: '1.2rem' }} />
                        <span className="nav-link-inner--text d-lg-none ml-2">Email</span>
                      </NavLink>
                    </NavItem>
                  )}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        ) : (
          // 스크롤 중일 때: 간소화된 헤더 (왼쪽 위)
          <div style={compactStyle}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <Link href="/" style={{ 
                color: '#00d9ff', 
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.1rem'
              }}>
                {greetings.name}
              </Link>
              <span style={{ color: '#30363d' }}>|</span>
              <Link href="/portfolio" style={{ 
                color: isActive('/portfolio') ? '#00d9ff' : '#8b949e', 
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}>
                포트폴리오
              </Link>
              <Link href="/resume" style={{ 
                color: isActive('/resume') ? '#00d9ff' : '#8b949e', 
                fontSize: '0.85rem',
                textDecoration: 'none'
              }}>
                이력서
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
