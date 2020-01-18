import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./css/main.css";
import Furniture from "../Components/Furniture";
import Footer from "../Components/Footer";
import Dimensions from "../Components/Dimensions";

class Main extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {
    // console.log("made it to function");
  }

  render() {
    return (
      <div id="main">
        <div id="container" className="img">
          <img id="mainImg" src="../images/bedStock.jpg" alt="bedroom main" />
          {/* <Nav /> */}
          <Nav />
        </div>
        <Furniture />
        <Dimensions />
        <Footer />
      </div>
    );
  }
}
export default Main;
