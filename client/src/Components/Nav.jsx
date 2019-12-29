import React, { Component } from "react";
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

    var myNav = document.getElementById("nav");
    window.onscroll = function() {
      "use strict";
      if (document.body.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
      } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
      }
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
