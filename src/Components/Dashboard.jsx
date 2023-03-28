import React from "react";
import "./Dashboard.css";
const Dashboard = (props) => {
  return (
    <ul className="dashboard">
      <li className="weather-list list-header">
        <p>Date</p>
        <p>Temperature</p>
        <p>Wind Speed</p>
        <p>Clouds</p>
        <p>Weather</p>
      </li>
      {props.weatherList.map((item, index) => (
        <li key={index} className="weather-list list-item">
          <p>{item.date}</p>
          <p>{item.temperature}</p>
          <p>{item.windSpeed}</p>
          <p>{item.clouds}</p>
          <p>{item.weather}</p>
        </li>
      ))}
    </ul>
  );
};
export default Dashboard;
