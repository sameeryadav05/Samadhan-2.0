import React from "react";
import {clear} from '../assets/Photos.js'
const Hourly = () => {
  return (
    <li className="weather-item">
      <p className="time">00:00</p>
      <img src={clear} alt="Clear weather" className="weather-icon" />
      <p className="temperature">
        20<span>&deg;C</span>
      </p>
    </li>
  );
};

export default Hourly;
