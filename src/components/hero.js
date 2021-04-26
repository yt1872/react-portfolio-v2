import React, { Component } from "react";
import "./Hero.scss";
import "./Programmer.js";
import Programmer from "./Programmer.js";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-name">Hi, I am Yuichiro Toyama.</div>
        <div className="hero-name">
          A <i className="text-highlight">Fullstack</i>
          <i className="text-highlight">Developer</i> based in Tokyo.
        </div>
        <div className="hero-intro">
          I design and build <i className="text-highlight">interactive</i> and{" "}
          <i className="text-highlight">responsive</i> websites.
        </div>
      </div>
      <div>{/* <Programmer /> */}</div>
    </div>
  );
}

export default Hero;
