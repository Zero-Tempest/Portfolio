import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import personal from "../../data/personal";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi — I’m <span className="purple">{personal.name}</span>.
            <br />
            {personal.shortBio}
            <br />
            <br />
            Here are a few things I enjoy outside of work:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Game Jams & Rapid Prototyping
            </li>
            <li className="about-activity">
              <ImPointRight /> Level & Systems Design
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build experiences players remember."
          </p>
          <footer className="blockquote-footer">{personal.name.split(" ")[0]}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
