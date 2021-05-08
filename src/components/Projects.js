import React from "react";
import ProjectsSection from "./ProjectsSection";
import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
} from "./Data";
import "./Projects.scss";

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="about-title">
        <h2>SOME OF MY WORK</h2>
      </div>
      <div>
        <ProjectsSection {...projectObjOne} />
        <ProjectsSection {...projectObjTwo} />
        <ProjectsSection {...projectObjThree} />
        <ProjectsSection {...projectObjFour} />
      </div>
    </div>
  );
}

export default Projects;
