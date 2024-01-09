import React from "react";
import "./style.css";

const CurrentWeather = ({ weatherData }) => {

  const { city, data } = weatherData;

  return (
    <div className="weather-card animate__fadeIn">
      <h2 className="card-head">Today</h2>
      <div className="top">
        <div>
          <p className="city">{city}</p>
          <p className="weather-type">{data[0].weather.description}</p>
        </div>
        <img src={`icons/${data[0].weather.icon}.png`} width={100} alt="" />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data[0].temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data[0].app_temp)}° C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data[0].wind_spd} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data[0].rh} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data[0].pres} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
