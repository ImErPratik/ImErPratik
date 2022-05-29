import { Link } from "react-router-dom";
import "./ResumeButton.css";

function ResumeButton() {
  return (
    <Link
      className="navItem resumeButton"      
      target="_blank"
    >
    <a href="https://docs.google.com/document/d/1q7CMxpJ5hvqDFe0kv9NzhK0M2TzKg_0J/edit?usp=sharing&ouid=113928785396180435484&rtpof=true&sd=true"><h3>Resume</h3></a>
      
    </Link>
  );
}

export default ResumeButton;
