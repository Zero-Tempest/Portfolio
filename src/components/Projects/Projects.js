import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";
import personal from "../../data/personal";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <div style={{ marginBottom: 20, position: "relative", zIndex: 9999, textAlign: "center" }}>
          <Button
            variant="primary"
            href={personal.socials && personal.socials.itch ? personal.socials.itch : "https://zerotemp.itch.io"}
            target="_blank"
            style={{ position: "relative", zIndex: 9999 }}
          >
            Visit my itch.io page
          </Button>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {personal.projects &&
            personal.projects.map((proj, idx) => {
              const getImg = (img) => {
                try {
                  return require(`../../Assets/Projects/${img}`);
                } catch (e) {
                  return bitsOfCode;
                }
              };

              return (
                <Col md={4} className="project-card" key={idx}>
                  <ProjectCard
                    imgPath={proj.img ? getImg(proj.img) : bitsOfCode}
                    isBlog={false}
                    title={proj.title}
                    description={proj.description}
                    ghLink={proj.ghLink}
                    demoLink={proj.demoLink}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
