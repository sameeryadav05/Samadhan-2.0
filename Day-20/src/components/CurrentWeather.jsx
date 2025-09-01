import React, { useState } from "react";
import { clear } from "../assets/Photos.js";
const CurrentWeather = ({ data }) => {
  if (data) {
    return (
      <div className="curr-weather">
        <img src={clear} alt="Clear weather" />
        <h1>{data.city}</h1>
        <h1>
          {data.temperature} <span>&deg;C</span>
        </h1>
        <p className="description">{data.description}</p>
      </div>
    );
  }
  else{
    return(
        <h1>Loading ..</h1>
    )
  }
};

export default CurrentWeather;
