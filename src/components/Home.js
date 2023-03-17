import React, { Component } from "react";
import About from "./About";
import Educations from "./Educations";
import Experience from "./Experience";

import Portfolios from "./Portfolios";
import Profile from "./Profile";
import Skills from "./Skills";
export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="row">
            <div className="col s12 m4 l3">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Skills />
              <About />
              <Experience />
              <Educations />
              <Portfolios />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
