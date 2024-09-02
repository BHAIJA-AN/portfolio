import React from "react";
import "./home.css";
import DP from "../../assets/dp.png";
import { Button } from "react-bootstrap";
import cv from "../../assets/cv.pdf";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      className="home d-flex align-items-center justify-content-around"
      id="home"
    >
      <div className="body d-flex flex-column" data-aos="slide-right">
        <div className="d-flex align-items-center">
          <h2>Hello</h2>
          <div className="line"></div>
          <i className="fa-solid fa-circle-dot"></i>
        </div>
        <div>
          <h1>I am Ahashan Mansuri</h1>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
              "Android Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
          <Button variant="info" href="#contact">
            Hire Me
          </Button>
          <Button variant="outline-info" href={cv} download>
            Download CV
          </Button>
        </div>
      </div>
      <div className="pic" data-aos="slide-left">
        <img src={DP} alt="Image" />
      </div>
    </div>
  );
};

export default Home;
