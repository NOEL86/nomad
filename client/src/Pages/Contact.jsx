import React, { Component } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "./css/contact.css";

class Contact extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {
    // console.log("made it to function");
  }

  render() {
    return (
      <div id="contact">
        <Nav />
        <div id="contactInfo" className="row">
          <div className="col s12 m3">
            <p>Contact Us</p>
            <p>Nomad Furniture</p>
            <p>Orders@nomadfurniture.com</p>
            <p>Info@nomadfurniture.com</p>
            <p>Phone 801-452-5860</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;
