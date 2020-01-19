import React, { Component } from "react";
import Nav from "../Components/Nav";
import M from "materialize-css";
import "./css/assembly.css";
import Footer from "../Components/Footer";

class Assembly extends Component {
  state = {};

  componentDidMount() {
    var instance = M.Carousel.init({
      fullWidth: true
    });
  }

  componentDidUpdate() {
    // console.log("made it to function");
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="carousel carousel-slider" id="carousel">
          <a className="carousel-item" href="#one!">
            <img src="https://lorempixel.com/800/400/food/1" />
          </a>
          <a className="carousel-item" href="#two!">
            <img src="https://lorempixel.com/800/400/food/2" />
          </a>
          <a className="carousel-item" href="#three!">
            <img src="https://lorempixel.com/800/400/food/3" />
          </a>
          <a className="carousel-item" href="#four!">
            <img src="https://lorempixel.com/800/400/food/4" />
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Assembly;
