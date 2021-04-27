import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-subheader">
          <h2>A little bit about me</h2>
        </div>
        <div>
          A bilingual web developer with an aerospace engineering background
          competent in front end and web design. <br />
          <br />
          Born and raised in the U.K. now living in Tokyo working as a full
          stack developer for a japanese system integration company. <br />
          <br />
          Studied graphic design at school, with a keen eye for aesthetics and
          fine detail. Looking for opportunities to focus on front end and learn
          more about UI/UX. <br />
          <br />
          In my spare time I like to swing a golf club and make the odd birdie.
        </div>
      </div>
      <div className="about-card">
        <div className="about-subheader">
          <h2>Some of my skills</h2>
        </div>
        <div className="skills-sublist-card">
          <h3>Frontend</h3>
          <div className="skills-sublist">
            <ul>
              <li>&gt; HTML</li>
              <li>&gt; CSS</li>
              <li>&gt; JavaScript</li>
            </ul>
            <ul>
              <li>&gt; React</li>
              <li>&gt; GSAP</li>
              <li>&gt; jQuery</li>
            </ul>
          </div>
        </div>
        <div className="skills-sublist-card">
          <h3>Backend</h3>
          <div className="skills-sublist">
            <ul>
              <li>&gt; C#</li>
              <li>&gt; .NET Core</li>
            </ul>
            <ul>
              <li>&gt; Ruby</li>
              <li>&gt; Rails</li>
            </ul>
          </div>
        </div>
        <div className="skills-sublist-card">
          <h3>Other</h3>
          <div className="skills-sublist">
            <ul>
              <li>&gt; Design</li>
              <li>&gt; UI/UX</li>
            </ul>
            <ul>
              <li>&gt; Git</li>
              <li>&gt; SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
