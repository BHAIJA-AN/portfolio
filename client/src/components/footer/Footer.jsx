import React, { useEffect, useState } from "react";
import "./footer.css";
import { Button, Card } from "react-bootstrap";
import Loading from "../../layout/Loading";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const email = "ahashanmansuri786@gmail.com";
  const URL = import.meta.env.VITE_URL;
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aosAnimation, setAosAnimation] = useState('slide-left');
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setAosAnimation(window.innerWidth <= 768 ? 'slide-up' : 'slide-left');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = () => {
    setLoading(false);
    setModal(false);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      if (response.status === 201) {
        setLoading(false);
        setModal(true);

        // Navigate to a success page after form submission
        navigate("/home");
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Something went wrong";
        throw new Error(errorMessage);
      }
    } catch (err) {
      setError(err.message || "Something Went Wrong");
      console.error(err.message);  // Log the error message
      setToast(true);
      setTimeout(() => {
        setToast(false);
        setError(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact d-flex align-items-center" id="contact">
      {loading && <Loading />}
      <div
        className="d-flex flex-column align-items-sm-start"
        style={{ gap: "1rem" }}
        data-aos="flip-right"
      >
        <h1>Let's Work Together</h1>
        <p>
          Have a project in mind, or do you want to work with me?
          <br />
          Feel free to reach out by writing an email.
        </p>
        <h6
          className="text-info"
          style={{ cursor: "pointer" }}
          onClick={handleEmailClick}
        >
          {email} <i className="fa-solid fa-arrow-right"></i>
        </h6>
        <div className="links">
          <a
            href="https://github.com/BHAIJA-AN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahashanmansuri786/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="http://www.youtube.com/@CoderSpace-x6u"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      <Card data-aos="zoom-in">
        <Card.Body>
          <Card.Title>Send me a message</Card.Title>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            autoComplete="off"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
          />
        </Card.Body>
        <Button onClick={handleSubmit}>Submit</Button>
      </Card>

      {modal && (
        <div className="blur">
          <div className="modal">
            <i className="fa-solid fa-circle-check fa-beat-fade"></i>
            <h4>
              Your request
              <br />
              has been submitted.
            </h4>
            <Button variant="info" onClick={closeModal}>
              Back
            </Button>
          </div>
        </div>
      )}

      {toast && (
        <div className="blur">
          <div className="toast" data-aos={aosAnimation}>
            <i className="fa-solid fa-circle-xmark"></i>
            <h4>{error}</h4>  {/* Ensure error is a string */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
