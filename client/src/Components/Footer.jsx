import React, { Component } from "react";
// import { Link } from "react-router-dom";
import M from "materialize-css";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <footer className="page-footer">
        <div id="Contact" className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5>Contact Us</h5>
              <a
                className="white-text"
                href="mailto:info@nomadfurniture.com?Subject=Nomad%20Info"
                target="_top"
              >
                <h6>info@nomadfurniture.com</h6>
              </a>
              <h6 className="white-text">phone 801-452-5860</h6>
              <div id="flex" className="row">
                <img id="sMedia" src="../images/facebook.svg" alt="facebook" />
                <img id="sMedia" src="../images/instagram.svg" alt="insta" />
              </div>
            </div>

            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Furniture</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Type 1
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Type 2
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Type 3
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Type 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Nomad Furniture
            {/* <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a> */}
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
