import React from "react";
import "./About.scss";
import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-section">
        <div className="about-title">
          <h2>A LITTLE BIT ABOUT ME</h2>
          {/* <div className="subheader-underline"></div> */}
        </div>
        <div className="about-content">
          <p>
            A <mark>bilingual</mark> web developer with an aerospace engineering
            background competent in <mark>front end</mark> and{" "}
            <mark>web design</mark>. <br />
            <br />
            Born and raised in the <mark>U.K.</mark> now living in{" "}
            <mark>Tokyo</mark> working as a full stack developer for a japanese
            system integration company. <br />
            <br />
            Studied graphic design at school, with a keen eye for aesthetics and
            fine detail. Looking for opportunities to focus on front end and
            learn more about <mark>UI/UX</mark>. <br />
            <br />
            In my spare time I like to swing a golf club and make the odd
            birdie.
          </p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          <h2>SOME OF MY SKILLS</h2>
          {/* <div className="subheader-underline"></div> */}
        </div>
        <div className="about-content">
          <div className="about-skills">
            <div className="about-skills-card">
              <h3>FRONTEND</h3>
              <div className="skills-sublist">
                <ul>
                  <li>&gt; HTML</li>
                  <li>&gt; CSS</li>
                  <li>&gt; JavaScript</li>
                  <li>&gt; React</li>
                  <li>&gt; GSAP</li>
                  <li>&gt; jQuery</li>
                </ul>
              </div>
            </div>
            <div className="about-skills-card">
              <h3>BACKEND</h3>
              <div className="skills-sublist">
                <ul>
                  <li>&gt; C#</li>
                  <li>&gt; .NET Core</li>
                  <li>&gt; Ruby</li>
                  <li>&gt; Rails</li>
                </ul>
              </div>
            </div>
            <div className="about-skills-card">
              <h3>OTHER</h3>
              <div className="skills-sublist">
                <ul>
                  <li>&gt; Design</li>
                  <li>&gt; UI/UX</li>
                  <li>&gt; Git</li>
                  <li>&gt; SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-resume">
        <a>My Resume</a>
        <FaArrowRight />
      </div>
    </div>
  );
}

export default About;
