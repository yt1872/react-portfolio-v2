import React, { useState } from "react";
import "./Carousel.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";

function Carousel({ images }) {
  const imageCount = images.length;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  let imagesToRender;
  if (images) {
    imagesToRender = images.map((image) => {
      return <img src={image} className="project-image" />;
    });
  }

  let dots;
  dots = imageCount;
  return (
    <div className="carousel-container">
      <FaChevronLeft />
      <div>{imagesToRender}</div>
      <FaChevronRight />
      <GoPrimitiveDot />
    </div>
  );
}

export default Carousel;
