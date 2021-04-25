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
        <div className="hero-name">A FullStack Developer based in Tokyo.</div>
        <div className="hero-intro">
          I design and build interactive and responsive websites.
        </div>
      </div>
      <div>
        <Programmer />
      </div>
    </div>
  );
}

export default Hero;
