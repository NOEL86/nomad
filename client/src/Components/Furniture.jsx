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
            <h5 id="fLink">Furniture</h5>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div id="bedCard" className="card">
              <div className="row">
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/Mission.jpg"
                      alt="Mission Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/RanchBed.jpg"
                      alt="Ranch Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/PlacitasBlue.jpg"
                      alt="Placitas Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/elPaso.jpg"
                      alt="Mission Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/4-Poster+Mission.jpg"
                      alt="4 Poster Mission Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/PecosOak.jpg"
                      alt="Pecos Oak Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/pecosLite.jpeg"
                      alt="Pecos Lite Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/Mission+Extra.jpg"
                      alt="Extra bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/Sandia.jpg"
                      alt="Sandia bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/fullMoon.jpg"
                      alt="Full Moon Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/A+Wave+Rainbow.jpg"
                      alt="Rainbow Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/TaosSlay.jpg"
                      alt="Sandia Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/OakTaosTwin.jpeg"
                      alt="Taos Twin Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="https://images.squarespace-cdn.com/content/v1/516edf49e4b0f564b2ab5dbb/1479242899275-VSP597IPLTDSH01FG8NL/ke17ZwdGBToddI8pDm48kA23-LYghCg-jfKD1rZEqcEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dhfE4xhzX12biq6f4rN7fUp5Y-qHbe0ax1O7wSvbemBYP7cJNZlDXbgJNE9ef52e8w/image-asset.jpeg?format=500w"
                      alt="Taos Bed + Table"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/Pinon.jpg"
                      alt="Pinon Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/VistaMapleQN.jpg"
                      alt="Vista Maple Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/VistaOakQN.jpg"
                      alt="Vista Oak Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        {" "}
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m4 l4">
                  <div className="imageContainer">
                    <img
                      id="bedImg"
                      src="../images/Vista.jpg"
                      alt="Vista Mesa Bed"
                    />
                    <div className="overlay">
                      <div className="text">
                        <div className="row">
                          <h6>Vista Mesa Bed</h6>
                          <h6>Price: $255</h6>
                        </div>
                      </div>
                    </div>
                  </div>
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
