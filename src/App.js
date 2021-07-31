import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";


import State from "./components/state/state";

import Header from "./components/header/header";

import Chart from "./components/chart/chart";

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid p-3 main">
        <center>
          <Header />

          <State />
        </center>

        <center>
          <div>
            <button
              className="btn btn-dark mt-2"
              onClick={() => window.location.reload()}
            >
              Refresh Data
            </button>
          </div>
        </center>

        <center>
          <div>
            <Chart />
          </div>
        </center>

        {/* <center>
          <div className="container main p-3 mt-3">
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <India />
              </Col>
              <Col xs={12} sm={12} md={12} lg={12}>
                <All />
              </Col>
            </Row>
          </div>
        </center> */}
      </div>
    );
  }
}
