import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-bottom">
              <strong>About Me</strong>
            </h6>
            <p className="grey-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation lobor.
            </p>
          </div>
          <div className="card-action">
            <h6>
              <strong>Personal Info</strong>
            </h6>
            <div className="row mt">
              <div className="col s12 m6 l6 x16">
                <p>
                  <strong>Address: </strong>69, Kyzgaldak street
                </p>
                <p>
                  <strong>Email: </strong>kunusuperit@gmail.com
                </p>
                <p>
                  <strong>Phone: </strong>0220-60-62-33
                </p>
              </div>
              <div className="s12 m6 l6 x16">
                <p>
                  <strong>Main language: </strong>Kyrgyz
                </p>
                <p>
                  <strong>Second language: </strong> Russian
                </p>
                <p>
                  <strong>Third language </strong>English
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
