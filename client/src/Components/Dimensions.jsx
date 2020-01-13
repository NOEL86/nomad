import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./Footer.css";

class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m12 l12">
            <h5 style={{ textAlign: "center" }}>Bed Dimensions</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <table>
              {/* <thead style={{ textAlign: "center" }}>Bed Dimensions</thead> */}
              <tr>
                <td>Cot</td>
                <td>Twin</td>
                <td>Full</td>
                <td>Queen</td>
                <td>East King</td>
                <td>Cal King</td>
                <td>Taos Beds</td>
              </tr>
              <tr>
                <td>30" X 75"</td>
                <td>41-1/2" X 78-1/2"</td>
                <td>56-1/2 X 78-1/2"</td>
                <td>62-1/2" X 84"</td>
                <td>80-1/2" X 84"</td>
                <td>74-1/2" X 87-1/2"</td>
                <td>-- ADD 3-1/2" TO LENGTH</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m12">
            <h5 style={{ textAlign: "center" }}>
              Bed Upgrades and Custimizables
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <p>
              Premium Bed Upgrade - FOR 5-3/4" RAILS (SIDES) AND FOOT BOARD
              CROSS PIECE.
            </p>
            <p>
              Premium Head Board - CROSS PIECE UPGRADE AVAILABLE SEPARATELY.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <h5 style={{ textAlign: "center" }}>Slat Options</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <ul>
              <li>
                Regular Slats ARE MADE FROM POPLAR HARDWOOD WITH A 3.2" GAP
                BETWEEN SLATS
              </li>
              <li>
                Premium Slats ARE MADE FROM POPLAR HARDWOOD WITH A 1.65" GAP
                BETWEEN SLATS
              </li>
              <li>
                Extra Filler Slats ARE MADE FROM POPLAR HARDWOOD WITH A .5" GAP
                BETWEEN SLATS (REQUIRED FOR SOME MATTRESSES). EXTRA FILLER SLATS
                FIT INTO REGULAR SLATS.
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <h5 style={{ textAlign: "center" }}>Finish Options</h5>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6 offset-m3">
            <ul>
              <li>WATCO DANISH NATURAL OIL *</li>
              <li>TRIED & TRUE NATURAL OIL FINISH </li>
              <li>UNFINISHED FOR THOSE WHO WANT TO GO ALL NATURAL </li>
              <li>
                DARK DANISH OIL FINISH - DARK WALNUT FINISH ON OAK WOOD ONLY
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <p>
              {" "}
              * Danish Oil is a unique blend of penetrating oil and varnish that
              hardens in the wood, not on the wood. Watco Danish Oil penetrates
              deep into wood pores to protect from within and to enhance the
              natural look and feel of the wood. It creates the rich, warm glow
              of a traditional hand-rubbed finish. Many projects can be
              completed in less than an hour - simply brush or wipe on and wipe
              off. Watco Danish Oil is the choice of fine woodworkers and
              novices alike. Comes completely non-toxic and odor free to you.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Dimensions;
