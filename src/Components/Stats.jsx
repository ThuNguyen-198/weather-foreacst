import React from "react";
import "./Widget.css";
const Stats = ({ stats }) => {
  return (
    <div className="widget-container">
      <div className="widgets-block">
        <div className="widget">
          <p className="widget-label">Average Temp</p>
          <p className="widget-value">{stats.average}&deg;</p>
        </div>
        <div className="widget">
          <p className="widget-label">Temp Range</p>
          <p className="widget-value">
            {stats.low}&deg; - {stats.high}&deg;
          </p>
        </div>
        <div className="widget">
          <p className="widget-label">Total Data Sets</p>
          <p className="widget-value">{stats.total}</p>
        </div>
      </div>
    </div>
  );
};
export default Stats;
