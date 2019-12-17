import React, { Component } from "react";
import Nav from "../Components/Nav";
import "./css/main.css";
import Furniture from "../Components/Furniture";
import Footer from "../Components/Footer";

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
          <img id="mainImg" src="../images/bedStock.jpg" />
          <Nav />
        </div>
        <Furniture />
        <Footer />
      </div>
    );
  }
}
export default Main;
