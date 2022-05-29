import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";

function Project3() {
  return (
    <article className="project light">
      
      <div className="project__main">
        <img
          className="project__image"
          src="/images/shop.png"
          srcset="/images/shop.png 750w, /images/shop.png 1468w"
          sizes="50vw"
          alt="Flavout Flow Landing Page"
          width="50%"
          height="auto"
          loading="lazy"
        />
        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Clone of Shop.com</h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Shop.com</span> project
            created as an Unit Project during the bootcamp. Allows users to{" "}
            <span className="project__specialText">view E-commerce Website</span> based on {" "}
            <span className="project__specialText">location</span>. It uses the API
            and shows the Verious thing like dresses,necklace,etc. {" "}
            
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · Bootstrap · CSS · HTML · API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/ImErPratik/SHOP.COM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://vigilant-hodgkin-32192f.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            
            <h3 className="project__sourceCodeText">Live Demo</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project3;
