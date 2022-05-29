import LightWave from "../Waves/LightWave";
import "./Contact.css";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-aos="fade-right" className="contact__body">
        <h2 className="contact__heading">Contact Me</h2>
        <p className="contact__p">
          Currently I am looking for a job as a Java Backend Developer
        </p>
        <div className="contact__option">
          <FaMailBulk className="contact__logo" size={45} />
          <a href="mailto: pratikjawanjal34@gmail.com">
            <span className="contact__text">pratikjawanjal34@gmail.com</span>
          </a>
        </div>
        <div className="contact__option">
          <FaLinkedin className="contact__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/pratik-jawanjal-264209193/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__text">ImErPratik</span>
          </a>
        </div>
      </div>
      <LightWave />
    </section>
  );
}

export default Contact;
