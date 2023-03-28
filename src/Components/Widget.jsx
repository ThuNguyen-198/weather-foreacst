import React from "react";
import "./Widget.css";
const Widget = ({ weather }) => {
  return (
    <div className="widget-container">
      <p className="location">{weather.location}</p>
      <div className="widgets-block">
        <div className="widget">
          <p className="widget-label">Temperature</p>
          <p className="widget-value">{weather.temperature}&deg;</p>
        </div>
        <div className="widget">
          <p className="widget-label">Wind Speed</p>
          <p className="widget-value">{weather.windSpeed}</p>
        </div>
        <div className="widget">
          <p className="widget-label">Weather</p>
          <p className="widget-icon">{weather.weather}</p>
        </div>
      </div>
    </div>
  );
};
export default Widget;
