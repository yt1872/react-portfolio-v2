import React, { useRef, useEffect } from "react";
import "./Hero.scss";
import "./Programmer.js";
import Programmer from "./Programmer.js";
import { Link } from "react-router-dom";
import { TweenMax, Power3 } from "gsap";

function Hero() {
  let imageItem = useRef(null);
  let textItem = useRef(null);

  useEffect(() => {
    TweenMax.to(textItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(imageItem, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.2,
    });
  });

  return (
    <div className="hero-container" id="home">
      <div className="hero-left" ref={(el) => (textItem = el)}>
        <div className="hero-name">Hi &#x1f44b;, I am Yuichiro Toyama.</div>
        <div className="hero-name">
          A <i className="text-highlight">Fullstack Developer&nbsp;</i>
          based in Tokyo.
        </div>
        <div className="hero-intro">
          I design and build <i className="text-highlight">interactive</i> and{" "}
          <i className="text-highlight">responsive</i> websites.
        </div>
      </div>
      <div
        ref={(el) => {
          imageItem = el;
        }}
        className="svgProgrammer"
      >
        <Programmer />
      </div>
    </div>
  );
}

export default Hero;
