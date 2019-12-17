import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
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
              <Link to="#furnitureRow">Furniture</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
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
