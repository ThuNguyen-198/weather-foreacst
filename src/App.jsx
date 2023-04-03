import { useState, useEffect } from "react";
import "./App.css";
// import Locations from "./Components/Locations";
import NavBar from "./Components/NavBar";
import WeatherDetail from "./Components/WeatherDetail";
// const API_KEY = import.meta.env.API_KEY;

const API_KEY = "a82fb6aee1f343b58d822def5549f7ed";
function App() {
  return (
    <div className="body-container">
      <div className="app-container">
        <WeatherDetail />
      </div>
    </div>
  );
}

export default App;
