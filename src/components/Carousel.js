import React from "react";
import "./Carousel.scss";

function Carousel({ images }) {
  let imagesToRender;
  if (images) {
    imagesToRender = images.map((image) => {
      return <img src={image} className="project-image" />;
    });
  }
  return <div className="carousel-container">{imagesToRender}</div>;
}

export default Carousel;
