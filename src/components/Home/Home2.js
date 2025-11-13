import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import personal from "../../data/personal";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Hi — I'm <span className="purple">{personal.name}</span>
            </h1>
            <p className="home-about-body">{personal.shortBio}</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={personal.profileImage ? require(`../../Assets/${personal.profileImage}`) : myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
