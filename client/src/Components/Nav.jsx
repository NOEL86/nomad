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
    window.onscroll = () => {
      const nav = document.querySelector("#nav");
      if (window.scrollY <= 500) nav.className = "nav-extended";
      else nav.className = "scroll";
      console.log(window.scrollY);
    };
  }
  render() {
    const scrollWithOffset = el => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -90;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    };
    return (
      // <div>
      <nav id="nav" className="nav-extended">
        <div className="nav-wrapper">
          <Link to="/" id="logo" className="brand-logo">
            <img id="logoImg" src="../images/nomadLogo.png" alt="logo" />
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/#furnitureRow" scroll={el => scrollWithOffset(el)}>
                Furniture
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
