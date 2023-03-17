import React, { Component } from "react";

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>Educations</strong>
            </h6>
            <table className="striped">
              <thead>
                <tr>
                  <th>Certificate</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Journalism</td>
                  <td>2010-2015</td>
                  <td>View</td>
                </tr>
                <tr>
                  <td>Teaching</td>
                  <td>2015-2017</td>
                  <td>View</td>
                </tr>
                <tr>
                  <td>Early educator</td>
                  <td>2019-2020</td>
                  <td>View</td>
                </tr>
                <tr>
                  <td>Fronend Developer</td>
                  <td>2022-2023</td>
                  <td>View</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  cl;
}
