import React from "react";
import { Col, Row } from "react-bootstrap";
import personal from "../../data/personal";

function Techstack() {
  const skills = personal.skills || [];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, idx) => (
        <Col xs={6} md={2} className="tech-icons" key={idx}>
          <div
            className="tech-icons-text"
            style={{ fontSize: "0.95rem", textAlign: "center", width: "100%" }}
          >
            {skill}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
