import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, image }: ProjectType) => {
  return (
    <Col lg="6">
      <Fade bottom duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4" style={{ overflow: 'hidden', borderRadius: '16px' }}>
          {image && (
            <div style={{ 
              width: '100%', 
              height: '200px', 
              overflow: 'hidden',
              borderBottom: '1px solid var(--dark-border, #30363d)'
            }}>
              <img 
                src={image} 
                alt={name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          )}
          <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3 style={{ color: 'var(--accent-primary, #00d9ff)' }}>{name}</h3>
                <p className="description mt-3" style={{ color: 'var(--dark-text-secondary, #8b949e)' }}>{desc}</p>
                <div className="mt-3">
                  {github ? (
                    <Button
                      className="btn-icon mr-2"
                      color="github"
                      href={github}
                      target="_blank"
                      rel="noopener"
                      aria-label="Github"
                      style={{
                        backgroundColor: 'var(--dark-bg-tertiary, #21262d)',
                        border: '1px solid var(--dark-border, #30363d)',
                        borderRadius: '8px'
                      }}
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-github" style={{ color: 'var(--dark-text, #e6edf3)' }} />
                      </span>
                    </Button>
                  ) : null}
                  {link ? (
                    <Button
                      className="btn-icon"
                      color="success"
                      href={link}
                      target="_blank"
                      rel="noopener"
                      aria-label="Demo"
                      style={{
                        background: 'linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)',
                        border: 'none',
                        borderRadius: '8px'
                      }}
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-external-link mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">Demo</span>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
