import React, { useEffect, useState } from "react";
import "./Weather.css";
import { clear } from "../assets/Photos.js";
import Hourly from "./Hourly.jsx";
import CurrentWeather from "./CurrentWeather.jsx";
const Weather = () => {
  const [Data, setData] = useState({});
  const [city, setCity] = useState("");
//   console.log(import.meta.env.VITE_Api_Key);
  const Api_Url = `http://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_Api_Key
  }&q=${city}`;

  

  const FetchDataByCity = async () => {
    try {
        const response = await fetch(Api_Url);
        const data = await response.json();
        console.dir(data)
        const city = data.location.name
        const temperature = Math.floor(data.current.temp_c);
        const description = data.current.condition.text;
        const longitude = data.location.lon;
        const latitude = data.location.lat;
        const icon = data.current.condition.icon

        setData({city,temperature,description,latitude,longitude,icon})
        

        
        
        
    } catch (error) {
        console.log(error)
    }
    // console.dir(data);
    // setData(data)
  };

  function handleSubmit(e) {
    if(city.trim() != '')
    {
        FetchDataByCity();
    }
    e.preventDefault();
  }
  return (
    <div className="Weather-Box">
      <div className="search-box">
        <span
          className="material-symbols-outlined search-icon"
          id="search"
          onClick={handleSubmit}
        >
          search
        </span>
        <form onSubmit={handleSubmit}>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="search your city .."
            required
            autoComplete="off"
          />
        </form>
        <button className="location">
          <span className="material-symbols-outlined">explore_nearby</span>
        </button>
      </div>

      <div className="weather-container">
      <CurrentWeather  data={Data}/>

        <div className="hourly-Forecast">
          <ul className="weather-list">
            <Hourly data={Data}/>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Weather;
