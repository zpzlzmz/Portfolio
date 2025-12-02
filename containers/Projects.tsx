import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    projects && (
      <Fade bottom duration={2000}>
        <section className="section section-lg" style={{ background: '#0d1117' }}>
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape shadow rounded-circle" style={{
                  background: 'linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)'
                }}>
                  <i className="ni ni-laptop" style={{ color: '#0d1117' }} />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3" style={{ color: '#00d9ff' }}>프로젝트</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {projects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;
