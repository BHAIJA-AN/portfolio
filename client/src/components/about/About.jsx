import React from "react";
import "./about.css";
import svg from "../../assets/about.svg";

const About = () => {
  return (
    <div className="about d-flex align-items-center" id="about">
      <div className="pic">
        <img src={svg} alt="svg" />
      </div>
      <div className="body d-flex flex-column w-50" data-aos="slide-up">
        <div className="d-flex align-items-center mb-5">
          <h2>About</h2>
          <div className="line"></div>
          <i className="fa-solid fa-circle-dot"></i>
        </div>
        <div className="para">
          <h5>
            Enthusiastic full-stack web developer with a passion for crafting
            seamless digital experiences. <br />
            Proven expertise in delivering dynamic and responsive websites,
            backed by a diverse portfolio of successful projects. <br />
            From intuitive user interfaces to robust backend solutions, I bring
            a holistic approach to web development. <br />
            With a keen eye for detail and a commitment to innovation, I ensure
            each project reflects my dedication to excellence. <br />
            Let's build the future of the web together.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
