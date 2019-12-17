import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Furniture.css";

class Furniture extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div id="furnitureRow" className="row">
          <div className="col s12 m12 l12">
            <h5 id="furniture">Furniture</h5>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12">
            <div id="bedCard" className="card">
              <div className="row">
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/Mission.jpg"
                    alt="Mission Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/RanchBed.jpg"
                    alt="Ranch Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/PlacitasBlue.jpg"
                    alt="Placitas Bed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12">
            <div id="bedCard" className="card">
              <div className="row">
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/elPaso.jpg"
                    alt="Mission Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/4-Poster+Mission.jpg"
                    alt="4 Poster Mission Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/PecosOak.jpg"
                    alt="Pecos Oak Bed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12">
            <div id="bedCard" className="card">
              <div className="row">
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/pecosLite.jpeg"
                    alt="Pecos Lite Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/Mission+Extra.jpg"
                    alt="Extra bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/Sandia.jpg"
                    alt="Sandia bed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12">
            <div id="bedCard" className="card">
              <div className="row">
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/fullMoon.jpg"
                    alt="Full Moon Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/A+Wave+Rainbow.jpg"
                    alt="Rainbow Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/TaosSlay.jpg"
                    alt="Sandia Bed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12">
            <div id="bedCard" className="card">
              <div className="row">
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/OakTaosTwin.jpeg"
                    alt="Taos Twin Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/OakTalos+table.jpeg"
                    alt="Taos Bed + Table"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img id="bedImg" src="../images/Pinon.jpg" alt="Pinon Bed" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m12 l12">
            <div id="bedCard" className="card">
              <div className="row">
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/VistaMapleQN.jpg"
                    alt="Vista Maple Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/VistaOakQN.jpg"
                    alt="Vista Oak Bed"
                  />
                </div>
                <div className="col s12 m4 l4">
                  <img
                    id="bedImg"
                    src="../images/Vista.jpg"
                    alt="Vista Mesa Bed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Furniture;
