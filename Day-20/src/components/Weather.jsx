import React, { useEffect, useState } from "react";
import "./Weather.css";
import {clear} from '../assets/Photos.js'
const Weather = () => {
    const [data,setData] = useState();
    const [city,setCity] = useState('');

    useEffect(()=>{

    })

    function handleSubmit(e)
    {
        e.preventDefault();
    }
  return (
    <div className="Weather-Box">
      <div className="search-box">
    <span className="material-symbols-outlined search-icon" id="search" onClick={handleSubmit}>
      search
    </span>
        <form onSubmit={handleSubmit}>
            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder="search your city .." required autoComplete="off" />
        </form>
        <button className="location">
            <span className="material-symbols-outlined">explore_nearby</span>
        </button>
      </div>

      <div className="weather-container">
        <div className="curr-weather">
            <img src={clear} alt="Clear weather" />
            <h2>Temperature 20<span>&deg;C</span></h2>
            <p className="description">party cloudy</p>
        </div>

        <div className="hourly-Forecast">
            <ul className="weather-list">

            </ul>

        </div>
      </div>
    </div>
  );
};

export default Weather;
