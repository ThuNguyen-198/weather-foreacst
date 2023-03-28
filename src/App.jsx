import { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Locations from "./Components/Locations";
import NavBar from "./Components/NavBar";
import Stats from "./Components/Stats";
import Widget from "./Components/Widget";
// const API_KEY = import.meta.env.API_KEY;

const API_KEY = "a82fb6aee1f343b58d822def5549f7ed";
function App() {
  const [location, setLocation] = useState([]);
  const addLocation = (item) => {
    setLocation([...location, item]);
  };

  const [weather, setWeather] = useState([]);
  const currentWeather = (item) => {
    const weather = {
      location: item["city_name"] + ", " + item["country_code"],
      date: item["data"][0]["timestamp_local"],
      temperature: item["data"][0]["app_temp"],
      windSpeed: item["data"][0]["wind_spd"],
      clouds: item["data"][0]["clouds"],
      weather: item["data"][0]["weather"]["description"],
    };
    setWeather(weather);
  };
  const [weatherList, setWeatherList] = useState([]);
  const [stats, setStats] = useState({});

  const historyWeather = (list) => {
    console.log(list);
    const data = list["data"];
    const newWeatherList = Object.entries(data).map((entry) => {
      const [key, item] = entry;
      return {
        date: item["timestamp_local"],
        temperature: item["app_temp"],
        windSpeed: item["wind_spd"],
        clouds: item["clouds"],
        weather: item["weather"]["description"],
      };
    });
    setWeatherList(newWeatherList);

    let sum = 0;
    let average = 0;
    let low = 200;
    let high = -100;
    let total = 0;
    Object.entries(newWeatherList).map((entry) => {
      const [key, item] = entry;
      total = total + 1;
      sum = sum + parseInt(item["temperature"]);
      low = Math.min(low, parseInt(item["temperature"]));
      high = Math.max(high, parseInt(item["temperature"]));
    });
    average = sum / total;
    const stats_value = {
      average: average,
      low: low,
      high: high,
      total: total,
    };
    setStats(stats_value);
  };

  const locations = [
    {
      location: "Lubbock, US",
      time: "12AM",
      weather: "cloudy",
      temp: 56,
      high: 67,
      low: 45,
    },
    {
      location: "NewYork, US",
      time: "8AM",
      weather: "snowing",
      temp: 50,
      high: 58,
      low: 34,
    },
  ];
  useEffect(() => {
    fetch(
      "https://api.weatherbit.io/v2.0/history/subhourly?city=Raleigh&start_date=2023-03-21&end_date=2023-03-22&key=a82fb6aee1f343b58d822def5549f7ed"
    )
      .then((response) => response.json())
      .then((data) => {
        currentWeather(data);
        console.log(data);
        console.log("abc");
        historyWeather(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="body-container">
      <NavBar />
      <div className="app-container">
        <div className="locations-container">
          <Locations locations={locations} />
        </div>
        <div className="dashboard-container">
          <Widget weather={weather} />
          <Dashboard weatherList={weatherList} />
          <Stats stats={stats} />
        </div>
      </div>
    </div>
  );
}

export default App;
