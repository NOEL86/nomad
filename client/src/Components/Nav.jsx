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
    const top = el => {
      const top = el.getBoundingClientRect().top;
      window.scrollTo({ top: top });
    };
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to="/#furnitureRow" scroll={el => scrollWithOffset(el)}>
              Platform Beds
            </Link>
          </li>
          <li>
            <Link to="/#pRow" scroll={el => scrollWithOffset(el)}>
              Premium Upgrade
            </Link>
          </li>
          <li>
            <Link to="/#dRow" scroll={el => scrollWithOffset(el)}>
              Cot Size Daybeds
            </Link>
          </li>
          <li>
            <Link to="/#aRow" scroll={el => scrollWithOffset(el)}>
              Accessories
            </Link>
          </li>
        </ul>

        <nav id="nav" className="nav-extended">
          <div className="nav-wrapper">
            <a
              href="#"
              data-target="mobile-demo"
              className="sidenav-trigger show-on-small"
            >
              <i className="material-icons">menu</i>
            </a>
            <Link to="/" id="logo" className="brand-logo">
              <img id="logoImg" src="../images/nomadLogo.png" alt="logo" />
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link
                  to="#"
                  className="dropdown-trigger accent-3"
                  data-target="dropdown1"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link to="/contact/#contact">Contact</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
            </ul>
          </div>

          <ul className="sidenav" id="mobile-demo">
            <li>
              <Link to="/#furnitureRow" scroll={el => scrollWithOffset(el)}>
                Platform Beds
              </Link>
            </li>
            <li>
              <Link to="/#pRow" scroll={el => scrollWithOffset(el)}>
                Premium Upgrade
              </Link>
            </li>
            <li>
              <Link to="/#dRow" scroll={el => scrollWithOffset(el)}>
                Cot Size Daybeds
              </Link>
            </li>
            <li>
              <Link to="/#aRow" scroll={el => scrollWithOffset(el)}>
                Accessories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;
