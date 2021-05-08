import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Navbar.scss";
import { Link } from "react-scroll";
import { Switch } from "react-router";

function Navbar() {
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

  // const PurpleSwitch = withStyles({
  //   switchBase: {
  //     color: purple[300],
  //     "&$checked": {
  //       color: purple[500],
  //     },
  //     "&$checked + $track": {
  //       backgroundColor: purple[500],
  //     },
  //   },
  //   checked: {},
  //   track: {},
  // })(Switch);

  return (
    <>
      <IconContext.Provider value={{ color: "#0e61fe" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <div className="nav-logo">
                <span>YUICHIRO</span>
                <span>TOYAMA</span>
              </div>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-items">
                <Link
                  to="home"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  to="about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  to="projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  to="/Contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  spy={true}
                  smooth={true}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            <div>
              <input type="checkbox" id="switch" />
              <label for="switch">Toggle</label>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
