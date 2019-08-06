import React, { Component } from "react";
import "./App.css";
import RouteDetailSAVOnly from "./components/RouteDetailSAVOnly.js";
import StartBookingButton from "./components/StartBookingButton";

class App extends Component {
  render() {
    return (
      <div className="map-container">
        <RouteDetailSAVOnly />
        <StartBookingButton />
      </div>
    );
  }
}

export default App;
