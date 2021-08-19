import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./index.scss";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col xs={8} sm={9} md={6} className="vh-100 d-flex align-items-end">
            <h1 className="display-1 text-white pb-5 fw-bold">
              India matters to me and I would like to matter to India
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
