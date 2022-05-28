import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";
import "./ProjectLight.css";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        {/* <img
          className="project__image project__specialMobileImage"
          src="/images/health_fusion_home.png"
          alt="Health Fusion Project Home Page"
          width="15%"
          height="auto"
          loading="lazy"
        /> */}
        {isDesktopOrLaptop ? (
          <>
            {/* <img
              className="project__image"
              src="/images/health_fusion_add.png"
              alt="Health Fusion Map Page"
              width="15%"
              height="auto"
              loading="lazy"
            /> */}
            <img
              className="project__image"
              src="/images/myntra.png"
              alt="Health Fusion Project Add Page"
              width="50%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <> </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Myntra Clone</h3>
          <p className="project__description project__body">
          Myntra is a <span className="project__specialText"> one stop shop</span> for all your fashion and lifestyle needs.{" "}
            <span className="project__specialText">
            Being India's largest e-commerce store  
            </span>
             {" "} and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal.{" "}
            <span className="project__specialText">The brand is </span> making a conscious effort to bring the power of {" "}
            <span className="project__specialText">fashion to shoppers with </span>
            an array of the latest and trendiest products{" "}
            <span className="project__specialText">available in the country.</span>
            {"\n"}Cloned it with a team of 4 members executed in 5 days!
          </p>
          <p className="project__tech project__body">
            &gt; Javascript · Bootstrap · CSS · HTML 
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/jatindevnani/Myntra-clone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
          <a
            className="project__sourceCode"
            href="https://myntra-x1.netlify.app/"
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

export default Project1;
