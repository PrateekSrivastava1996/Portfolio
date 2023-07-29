import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I'm a self-taught Front End developer from India. I build websites
              with a focus on providing the experience for everyone using them
              and responsiveness. Curious to learn more about developing
              scalable distribution systems, love problem solving, and care
              about writing and maintainable code.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <ul>
                    <li>HTML5/CSS3</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Bootsrap 5</li>
                    <li>React-Bootsrap</li>
                    <li>Material-ui</li>
                    <li>Web3.JS</li>
                  </ul>
                </Col>
                <Col md={5}>
                  <ul>
                    <li>Mongo DB</li>
                    <li>Express Js</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>React Redux</li>
                    <li>Git/Github</li>
                  </ul>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
