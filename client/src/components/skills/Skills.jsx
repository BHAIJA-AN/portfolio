import React from "react";
import "./skills.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import mongodb from "../../assets/mongodb.svg";
import tailwind from "../../assets/tailwind.svg";
import firebase from "../../assets/firebase.svg";
import git from "../../assets/git.svg";
import rn from "../../assets/react-native.svg";
import aws from "../../assets/aws.svg";

const Skills = () => {
  const firstRowSkills = [
    { src: html, title: "HTML" },
    { src: css, title: "CSS" },
    { src: javascript, title: "JavaScript" },
    { src: react, title: "React" },
    { src: nodejs, title: "NodeJs" },
  ];

  const secondRowSkills = [
    { src: mongodb, title: "MongoDB" },
    { src: rn, title: "React Native" },
    { src: tailwind, title: "Tailwind" },
    { src: firebase, title: "Firebase" },
    { src: aws, title: "AWS" },
    { src: git, title: "GIT" },
  ];

  return (
    <div className="skills" id="skills">
      <div className="d-flex align-items-center mb-5">
        <h2>Skills</h2>
        <div className="line"></div>
        <i className="fa-solid fa-circle-dot"></i>
      </div>
      
      <div className="images first-row" data-aos="fade-up">
        {firstRowSkills.map((skill, index) => (
          <img key={index} src={skill.src} alt={skill.title} title={skill.title} loading="lazy" />
        ))}
      </div>
      
      <div className="images second-row" data-aos="fade-up">
        {secondRowSkills.map((skill, index) => (
          <img key={index} src={skill.src} alt={skill.title} title={skill.title} loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default Skills;
