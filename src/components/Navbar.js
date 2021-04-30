import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Navbar.scss";
import { Link } from "react-scroll";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
