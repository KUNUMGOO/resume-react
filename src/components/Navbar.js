import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav
          className="light-blue darken-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="container">
            <div className="nav-wrapper">
              <Link
                to="/"
                className="brand-logo"
                style={{ margin: "0 100px 0 0" }}
              >
                CV
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul
                className="right-hide-on-med-and-down"
                style={{ margin: "0 340px" }}
              >
                <li>
                  <Link to="/">
                    <i className="fas fa-home"></i>Home
                  </Link>
                </li>
                <li>
                  <Link to="/skills">
                    <i className="fas fa-copy"></i>Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience">
                    <i className="fas fa-id-badge"></i>Experience
                  </Link>
                </li>
                <li>
                  <Link to="/educations">
                    <i className="fas fa-graduation-cap"></i>Educations
                  </Link>
                </li>
                <li>
                  <Link to="/portfolios">
                    <i className="fas fa-address-card"></i>Portfolios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav" id="side-nav">
          <li>
            <Link to="/">
              <i className="fas fa-home"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <i className="fas fa-copy"></i>Skills
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <i className="fas fa-id-badge"></i>Experience
            </Link>
          </li>
          <li>
            <Link to="/educations">
              <i className="fas fa-graduation-cap"></i>Educations
            </Link>
          </li>
          <li>
            <Link to="/portfolios">
              <i className="fas fa-address-card"></i>Portfolios
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
export default Navbar;
