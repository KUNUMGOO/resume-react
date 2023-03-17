import React, { Component } from "react";
import ImgProfile from "../components/Images/ME.jpg";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="card w-50">
          <div className="card-image">
            <div style={{ width: "180px", height: "200px" }}>
              <img
                className="activator"
                src={ImgProfile}
                alt="Kanykei Mukhanbedova"
              />
            </div>
            <Link className="btn-floating halfway-fab waves-effect wave-light red">
              <i className="material-icons activator">more_vert</i>
            </Link>
          </div>
          <div className="card-content">
            <span className="card-title-activator grey-text text-darken-4">
              Kanykei Mukhanbedova
            </span>
            <p>RFONTEND DEVELOPER</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Follow Me
              <i className="material-icons right">Close</i>
            </span>
            <p className="flex-container">
              <i className="fab fa-facebook-f grey-text text-darken-4 social-style"></i>
              <i className="fab fa-twitter grey-text text-darken-4 social-style"></i>
              <i className="fab fa-google-plus-g grey-text text-darken-4 social-style"></i>
              <i className="fab fa-instagram grey-text text-darken-4 social-style"></i>
            </p>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
