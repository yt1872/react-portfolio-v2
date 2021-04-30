import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
