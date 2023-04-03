import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [location, setLocation] = useState([]);
  const addLocation = (item) => {
    setLocation([...location, item]);
  };

  const [locations, setLocations] = useState([
    {
      location: "Lubbock",
      time: "12AM",
      weather: "cloudy",
      temp: 56,
      high: 67,
      low: 45,
    },
    {
      location: "NewYork",
      time: "8AM",
      weather: "Cloudy",
      temp: 50,
      high: 58,
      low: 34,
    },
    {
      location: "Dallas",
      time: "8AM",
      weather: "Sunny",
      temp: 60,
      high: 78,
      low: 53,
    },
  ]);
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
  };
  return (
    <div className="nav-and-sidebar">
      <div className="nav-container">
        <Link to="/" className="app-home">
          <ion-icon name="home-outline"></ion-icon>
          <p>Home</p>
        </Link>
        <div className="main-nav">
          <form>
            <input
              placeholder="Enter a location"
              onChange={handleInputChange}
            ></input>
            <ion-icon
              className="icon icon-search"
              name="search-outline"
            ></ion-icon>
          </form>
          <ion-icon className="icon icon-burger" name="menu-outline"></ion-icon>
        </div>
      </div>
      {/* Side NavBar */}
      <div className="locations-container">
        <ul className="location-list">
          {locations.map((item, index) => (
            <Link
              className="link"
              to={`/details/${item.location}`}
              key={item.location}
            >
              <li key={index} className="location-card">
                <div className="location-info">
                  <p className="location-name">{item.location}</p>
                  {/* <p className="location-time">last update: {item.time}</p> */}
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
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
