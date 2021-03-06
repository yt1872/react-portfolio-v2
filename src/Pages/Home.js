import React from "react";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default Home;
