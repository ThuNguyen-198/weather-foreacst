import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import NavBar from "./Components/NavBar";
import "./index.css";
import Layout from "./routes/Layout";
import WeatherDetail from "./Components/WeatherDetail";
import DateDetail from "./Components/DateDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path="/" element={<App />} />
          <Route
            index={false}
            path="/details/:location"
            element={<WeatherDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
