import React from "react";
import "./style.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ForecastWeather = ({ weatherData }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = [
    "Tomorrow",
    ...WEEK_DAYS.slice(dayInAWeek + 1),
    WEEK_DAYS[0],
    ...WEEK_DAYS.slice(1, dayInAWeek),
  ];

  const { city, data } = weatherData;
  console.log(data);

  return (
    <div className="forecast-container">
      <h2 className="forecast-header animate__animated animate__bounceIn">
        Daily Forecast
      </h2>
      <div className="forecast-slider">
        {data.map((item, index) => (
          <div
            className={`forecast-card animate__animated animate__fadeIn animate__delay-${index-1}s`}
            key={index}
          >
            <div className="top">
              <img src={`icons/${item.weather.icon}.png`} width={80} alt="" />
              <div className="top-right">
                <label className="day">{forecastDays[index]}</label>
                <label className="description">{item.weather.description}</label>
                <label className="min-max">
                  {Math.round(item.min_temp)}°C / {Math.round(item.max_temp)}°C
                </label>
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-left">
                <div className="parameter-row">
                  <span className="parameter-label">Feels like</span>
                  <span className="parameter-value">
                    {Math.round(item.app_max_temp)}° C
                  </span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Wind</span>
                  <span className="parameter-value">{item.wind_spd} m/s</span>
                </div>
              </div>
              <div className="bottom-right">
                <div className="parameter-row">
                  <span className="parameter-label">Humidity</span>
                  <span className="parameter-value">{item.rh} %</span>
                </div>
                <div className="parameter-row">
                  <span className="parameter-label">Pressure</span>
                  <span className="parameter-value">{data[0].pres} hPa</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastWeather;
