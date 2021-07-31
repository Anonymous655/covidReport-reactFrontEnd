import React, { Component } from "react";

export default class header extends Component {

  render() {
    let date = new Date().toDateString()
    return (
      <div className="container">
        <div style={
          {
            padding: "10px",
            fontFamily: "cursive",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#38363a",
            color: "white",
            borderRadius: "20px"
          }
        }>
          <h1>COVID-19 IN-Report</h1>
          <h1>{date}</h1>
        </div>
      </div>

    );
  }
}
