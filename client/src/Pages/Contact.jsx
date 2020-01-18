import React, { Component } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "./css/contact.css";

class Contact extends Component {
  state = {};

  componentDidMount() {
    console.log("contact page loaded");
  }

  render() {
    return (
      <div id="contact">
        <Nav />
        <div id="contactInfo" className="row">
          <div className="col s12 m4 offset-m4">
            {/* <p>Contact Us</p> */}
            <p>Nomad Furniture</p>
            <a
              className="black-text"
              href="mailto:info@nomadfurniture.com?Subject=Nomad%20Info"
              target="_top"
            >
              <p>info@nomadfurniture.com</p>
            </a>
            <a
              className="black-text"
              href="mailto:Orders@nomadfurniture.com?Subject=Nomad%20Order"
              target="_top"
            >
              <p>Orders@nomadfurniture.com</p>
            </a>
            <p>Phone 801-452-5860</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;
