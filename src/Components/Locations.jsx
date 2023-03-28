import React from "react";
import "./Locations.css";
const Locations = ({ locations }) => {
  return (
    <ul className="location-list">
      {locations.map((item, index) => (
        <li key={index} className="location-card">
          <div className="location-info">
            <p className="location-name">{item.location}</p>
            <p className="location-time">last update: {item.time}</p>
            <p className="location-weather">{item.weather}</p>
          </div>
          <div className="location-temp-block">
            <p className="location-temp">{item.temp}&deg;</p>
            <div className="high-and-low">
              <p className="high">H: {item.high}&deg;</p>
              <p className="low">L: {item.low}&deg;</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Locations;
