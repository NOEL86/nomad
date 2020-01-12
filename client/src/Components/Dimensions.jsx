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
        {/* <div className="row">
          <div className="col s12 m12 l12">
            <h5 style={{ textAlign: "center" }}>Bed Dimensions</h5>
          </div>
        </div> */}
        <div className="row">
          <div style={{ marginLeft: "0" }} className="col s12 m6 l6 offset-m3">
            <table>
              <thead style={{ textAlign: "center" }}>Bed Dimensions</thead>
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
      </div>
    );
  }
}
export default Dimensions;
