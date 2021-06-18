import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import smgs from "../../Assets/Projects/smgs.png";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smgs}
              isBlog={false}
              title="Student-Mentor Guidance System"
              description="The Student-Mentor Guidance System is a web-based application that helps people to gather and analyze data related to
              students and mentors and efficiently assigns students to the mentors depending upon the total number of students and available
              mentors. The application provides functionality to maintain relationships between the two.Users can provide their personal
              details as well as courses enrolled information using web portal.
              "
              link="https://github.com/arpitk95/Student-Mentor-Guidance-System"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
