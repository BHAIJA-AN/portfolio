import React from "react";
import "./services.css";
import WebApplication from "../../assets/web.png";
import MobileApplication from "../../assets/mobile.png";
import backend from "../../assets/backend.png"; 

const data = [
  {
    img:  WebApplication,
    title: "Web Application Development",
    para: "Web design involves various skills and disciplines for creating and maintaining websites, including graphic design, UI/UX design, coding, and SEO.",
  },
  {
    img: MobileApplication,
    title: "Mobile Application Development",
    para: "We offer mobile app development services, including custom Android apps, cross-platform solutions, UX design, and advanced features like chat and voice integration.",
  },
  {
    img:  backend,
    title: "Backend Development",
    para:  "Backend development involves creating and managing server-side logic, databases, and APIs, ensuring security, data integrity, and optimal performance for web and mobile applications.",
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="d-flex align-items-center mb-5">
        <h2>Services</h2>
        <div className="line"></div>
        <i className="fa-solid fa-circle-dot"></i>
      </div>
      <div
        className="d-flex align-items-center"
        style={{
          justifyContent: "space-evenly",
          gap: "1rem",
          flexWrap: "wrap",
        }}
        data-aos="flip-up"
      >
        {data.map((items, index) => (
          <div key={index} className="cards" style={{ flexWrap: "wrap" }}>
            <div className="d-flex flex-column align-items-center" style={{gap: "1rem"}}>
              <img src={items.img} className="card-img-top" alt={items.title} />
              <h3 className="fw-bold">{items.title}</h3>
              <p>{items.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
