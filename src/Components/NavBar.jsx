import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav-container">
      <div></div>
      <div className="main-nav">
        <form>
          <input placeholder="Enter a location"></input>
          <ion-icon
            className="icon icon-search"
            name="search-outline"
          ></ion-icon>
        </form>
        <ion-icon className="icon icon-burger" name="menu-outline"></ion-icon>
      </div>
    </div>
  );
};
export default NavBar;
