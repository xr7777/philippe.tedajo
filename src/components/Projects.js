import React from "react";
import "./Projects.css";
import Hero from "../toolsComponents/Hero";
import { Container, Row, Col } from "react-bootstrap";
import Slides from "../toolsComponents/Slides";

function Projects() {
  return (
    <Container className="projects" style={{ minHeight: "450px" }}>
      <Hero title="Projects" />
      <Row className="d-flex justify-content-center">
        <Col className="col-md-6 f18 text-center">
          From pure Javascript to React, Redux, NodeJS and more... Check out my
          latest web applications projects.
        </Col>
      </Row>
      <Row>
        <Col>
          <Slides />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;