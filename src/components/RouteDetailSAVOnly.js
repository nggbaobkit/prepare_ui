import React, { Component } from "react";

export default class RouteDetailSAVOnly extends Component {
  render() {
    return (
      <div className="route-detail">
        {/* <div className="my-trip">
          <div className="flex-container">
            <div className="my-trip-tag">My trip</div>
            <div className="cancel-trip-button">CANCEL TRIP</div>
          </div>
          <div>Sav icon</div>
        </div> */}

        <div className="detail">
          {/* <div>Detail tag</div> */}
          <div className="route-detail-flex-container">
            <div className="car-icon-container">
              <span class="helper" />
              <img
                src={"images/baseline-directions_car-24px.svg"}
                alt="car icon"
              />
            </div>
            <div className="line-detail">
              <div className="selection-grid-container">
                <div className="depart-icon">
                  <img
                    src={"images/departure-point-icon.png"}
                    alt={"Departure point"}
                  />
                  <div className="line" />
                </div>
                <div className="arrive-icon">
                  <img
                    src={"images/arrival-point-icon.png"}
                    alt={"Arrival point"}
                  />
                </div>
                <div className="depart-location">string1</div>
                <div className="arrive-location">string2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
