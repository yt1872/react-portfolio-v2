import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./Navbar.scss";
import { Link } from "react-scroll";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

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

  const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      "&$checked": {
        color: purple[500],
      },
      "&$checked + $track": {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

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
              <FormGroup>
                <FormControlLabel
                  control={
                    <PurpleSwitch
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                    />
                  }
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
