import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hero} />
          {/* <Route path='/About' component={Services} />
                    <Route path='/Projects' component={Products} />
                    <Route path='/Contact' component={SignUp} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
