import React, { Component } from "react";
import "./App.css";
import RouteDetailSAVOnly from "./components/RouteDetailSAVOnly.js";

class App extends Component {
  render() {
    return (
      <div className="map-container">
        <RouteDetailSAVOnly />
      </div>
    );
  }
}

export default App;
