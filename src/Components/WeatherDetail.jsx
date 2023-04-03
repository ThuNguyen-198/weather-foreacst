import React from "react";
import "./WeatherDetail.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import TempChart from "./TempChart";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const WeatherDetail = () => {
  let params = useParams();
  const [weather, setWeather] = useState([]);
  const [weatherList, setWeatherList] = useState([]);
  const [stats, setStats] = useState({});

  const currentWeather = (item) => {
    const weather = {
      location: item["city_name"] + ", " + item["country_code"],
      date: item["data"][0]["timestamp_local"].slice(0, 10),
      temperature: item["data"][0]["app_temp"],
      windSpeed: item["data"][0]["wind_spd"],
      clouds: item["data"][0]["clouds"],
      weather: item["data"][0]["weather"]["description"],
    };
    setWeather(weather);
  };

  const historyWeather = (list) => {
    const data = list["data"];
    const newWeatherList = Object.entries(data).map((entry) => {
      const [key, item] = entry;
      return {
        date: moment(item["timestamp_local"]).format("MM/DD-HH:mm"),
        temperature: item["app_temp"],
        windSpeed: item["wind_spd"],
        clouds: item["clouds"],
        weather: item["weather"]["description"],
      };
    });
    setWeatherList(newWeatherList);
  };

  useEffect(() => {
    let url = `https://api.weatherbit.io/v2.0/history/subhourly?city=${params.location}&units=I&start_date=2023-03-21&end_date=2023-03-22&key=a82fb6aee1f343b58d822def5549f7ed`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        currentWeather(data);
        historyWeather(data);
      })
      .catch((error) => console.error(error));
  }, [params.location]);

  return (
    <div className="weather-container">
      <div className="dashboard-container">
        //widget
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
        //Dashboard
        <div className="display-data">
          <div className="dashboard-block">
            <table className="dashboard">
              <tr className="weather-list list-header">
                <th>Date</th>
                <th>Temperature</th>
                <th>Wind Speed</th>
                <th>Clouds</th>
                <th>Weather</th>
              </tr>
              {weatherList.map((item, index) => (
                <tr key={index} className="weather-list list-item">
                  <td>{item.date}</td>
                  <td>{item.temperature}</td>
                  <td>{item.windSpeed}</td>
                  <td>{item.clouds}</td>
                  <td>{item.weather}</td>
                </tr>
              ))}
            </table>
          </div>
          <div>
            <LineChart
              width={600}
              height={340}
              data={weatherList}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis
                dataKey="date"
                tick={{
                  fill: "white",
                  angle: 45,
                  textAnchor: "start",
                  fontSize: 7,
                }}
                interval={10}
              />
              <YAxis tick={{ fill: "white" }} />
              <Tooltip />
            </LineChart>
            <p className="chart-title">Temperature</p>
          </div>
        </div>
        //Stats
        {/* <div className="widget-container">
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
        </div> */}
      </div>
    </div>
  );
};
export default WeatherDetail;
