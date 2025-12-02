import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  // 피드백이 없으면 섹션 숨김
  if (!feedbacks || feedbacks.length === 0) {
    return null;
  }

  return (
    <Fade bottom duration={2000}>
      <section className="section section-lg" style={{ background: '#0d1117' }}>
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape shadow rounded-circle" style={{
                background: 'linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)'
              }}>
                <i className="fa fa-star" style={{ color: '#0d1117' }} />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3" style={{ color: '#00d9ff' }}>추천사</h4>
            </div>
          </div>
          <Row className="g-3">
            {feedbacks.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  <FeedbackCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fade>
  );
};

export default Feedbacks;
