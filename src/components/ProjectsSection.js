import React from "react";
import Carousel from "./Carousel";

function ProjectsSection({ projectName, projectDesc, stack, image }) {
  let itemsToRender;
  if (stack) {
    itemsToRender = stack.map((item) => {
      return (
        <p className="stack-item" key={item}>
          {item}
        </p>
      );
    });
  }

  return (
    <div className="projects-card">
      {/* <Carousel {...{ images }} /> */}
      <div className="project-image-wrapper">
        <img src={image} className="project-image"></img>
      </div>
      <div className="projects-card-title">
        <h3>{projectName}</h3>
      </div>
      <div className="projects-info">
        <p>{projectDesc}</p>
      </div>
      <div className="projects-stack">{itemsToRender}</div>
    </div>
  );
}

export default ProjectsSection;
