import React, { useState } from "react";
import "./project.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pM from "../../assets/pM.png";
import adminDash from "../../assets/adminDash.png";
import gU from "../../assets/gU.png";
import scanW from "../../assets/scanW.png";
import Modal from "react-bootstrap/Modal";

const projects = [
  {
    title: "Git Unemployed",
    image: gU,
    description: "This is my Personal website for my Youtube Channel.",
    link: "https://gitunemployed.netlify.app/",
  },
  {
    title: "Password Manager",
    image: pM,
    description:
      "This is a MERN stack project. You can manage passwords and generate.",
    link: "https://password-manager-client.onrender.com/",
  },
  {
    title: "Admin Dashboard",
    image: adminDash,
    description: "This is a pure React and CSS-based project. With ChartJS.",
    link: "https://gitunemployed.netlify.app/",
  },
  {
    title: "Super Market Billing System",
    image: scanW,
    description: "This is a MERN Project With Redux-toolkit and Material-UI",
    link: "https://github.com/muhazAhmed/scan-wise.git",
  },
];

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };
  return (
    <div className="project w-100" id="projects">
      <div className="d-flex align-items-center mb-5">
        <h2>Projects</h2>
        <div className="line"></div>
        <i className="fa-solid fa-circle-dot"></i>
      </div>
      <div className="cards d-flex align-items-center"  data-aos="fade-down">
        {projects.map((project, index) => (
          <Card key={index} style={{ width: "18rem", marginBottom: "1rem" }}>
            <Card.Img
              variant="top"
              src={project.image}
              onClick={() => openModal(project.image)}
              loading="lazy"
            />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              <Button
                className="w-100 text-black"
                style={{
                  borderRadius: "12px",
                  border: "3px solid #AAFCEE",
                  backgroundColor: "#AAFCEE",
                }}
                target="_blank"
                href={project.link}
              >
                Visit
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body className="p-0" style={{ borderRadius: "12px" }}>
          <img src={selectedImage} alt="Preview" style={{ width: "50vw" }} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Project;
