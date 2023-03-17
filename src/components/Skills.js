import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>Professional Skills</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>HTML</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>PHP</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "39%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>JQUERY</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "49%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>CSS</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "89%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>JS</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "99%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>REACT</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "59%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
