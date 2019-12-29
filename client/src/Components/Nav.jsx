import React, { Component, useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import M from "materialize-css";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
    window.onscroll = () => {
      const nav = document.querySelector("#nav");
      if (this.scrollY <= 500) nav.className = "";
      else nav.className = "scroll";
    };
  }
  render() {
    return (
      // <div>
      <nav id="nav" className="nav-extended">
        <div className="nav-wrapper">
          <Link to="/" id="logo" className="brand-logo">
            <img id="logoImg" src="../images/nomadLogo.png" alt="logo" />
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/#fLink">Furniture</Link>
            </li>
            <li>
              <Link to="/#Contact">Contact</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
        </div>
        {/* <div className="nav-content">
            <span className="nav-title">Title</span>
             <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
              <i className="material-icons">Cart</i>
            </a> 
          </div> */}
      </nav>
      // </div>
    );
  }
}
export default Nav;
