import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Section from "../Section";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <Section>
      <Row className="mb-5">
        <h2 className="h5 text-uppercase text-secondary">About</h2>
      </Row>
      <Row>
        <Col sm={6}>
          <StaticImage
            src="../../assets/about1.jpg"
            alt="shashi tharoor"
            className="h-75 w-50 rounded-3"
          />
        </Col>
        <Col sm={6}>
          <div>
            <h3 className="fw-bold h2 text-primary mb-5">
              An author, politician, and former international civil servant,
              Shashi Tharoor straddles several worlds of experience.
            </h3>
            {/* <div
              style={{ height: "10px", width: "150px" }}
              className="bg-info my-3"
            ></div> */}
            <p className="fs-5">
              Currently a third-term Lok Sabha MP representing the
              Thiruvananthapuram constituency and Chairman of the Parliamentary
              Standing Committee on Information Technology, he has previously
              served as Minister of State for Human Resource Development and
              Minister of State for External Affairs in the Government of India.
              During his nearly three-decade long prior career at the United
              Nations, he served as a peacekeeper, refugee worker, and
              administrator at the highest levels, serving as Under-Secretary
              General during Kofi Annan's leadership of the organisation.
            </p>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default About;
