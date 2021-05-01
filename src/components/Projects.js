import React from "react";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-title">
        <h2>PROJECTS</h2>
      </div>
      <div className="projects-cards">
        <div className="projects-card">
          <div className="projects-card-title">
            <h3>livetranslate</h3>
          </div>
          <div className="projects-card-images"></div>
          <div className="projects-info">
            <p>
              Project member which built an online platform where businesses can
              upload documents for language students to translate. Businesses
              can login to upload documents and check on progress. Students can
              log in to see what work they have been assigned. I handled the
              backend feature where the content of an imported pdf document
              would be evenly distributed across students taking a specific
              langauge class.
            </p>
          </div>
        </div>
        <div className="projects-card">
          <div className="projects-card-title">
            <h3>Airpaws</h3>
          </div>
          <div className="projects-info">
            <p>
              Project member which built an online platform where businesses can
              upload documents for language students to translate. Businesses
              can login to upload documents and check on progress. Students can
              log in to see what work they have been assigned. I handled the
              backend feature where the content of an imported pdf document
              would be evenly distributed across students taking a specific
              langauge class.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
