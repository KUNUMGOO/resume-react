import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Educations from "./components/Educations";
import Portfolios from "./components/Portfolios";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" Component={Home} />

        <Route path="/Skills" Component={Skills} />

        <Route path="/Experience" Component={Experience} />
        <Route path="/Educations" Component={Educations} />
        <Route path="/Portfolios" Component={Portfolios} />
        <Route path="/Profile" Component={Profile} />
      </Routes>
    </>
  );
}

export default App;
