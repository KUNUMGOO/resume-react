import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>Experience</strong>
            </h6>
            <div className="row">
              <div className="col s12 m4 l4 xl4 ">
                <p className="teal year_exp white-text ">
                  December<strong>2022</strong>-March<strong>2023</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom ">
                    <strong>Full Stack Web Developer</strong>
                  </h6>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation lobor.{" "}
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4 l4 xl4 ">
                <p className="teal year_exp white-text ">
                  December<strong>2017</strong>-March<strong>2020</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom ">
                    <strong>Sales Assistant</strong>
                  </h6>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation lobor.{" "}
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m4 l4 xl4 ">
                <p className="teal year_exp white-text ">
                  December<strong>2015</strong>-March<strong>2017</strong>
                </p>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom ">
                    <strong>Designer Coder</strong>
                  </h6>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation lobor.{" "}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
