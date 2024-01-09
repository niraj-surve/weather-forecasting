import React, { useState } from "react";
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";
import ForecastWeather from "./components/ForecastWeather/ForecastWeather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  // const handleOnSearchChange = (searchData) => {
  //   const [lat, lon] = searchData.value.split(" ");

  //   const currentWeatherFetch = fetch(
  //     `${WEATHER_API_URL}/current?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}`
  //   );
  //   const forecastWeatherFetch = fetch(
  //     `${WEATHER_API_URL}/forecast/daily?lat=${lat}&lon=${lon}&key=${WEATHER_API_KEY}&days=7`
  //   );

  //   Promise.all([currentWeatherFetch, forecastWeatherFetch]) // Pass an array of promises
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forecastResponse = await response[1].json();

  //       setCurrentWeather({ city: searchData.label, ...weatherResponse });
  //       setForecastWeather({ city: searchData.label, ...forecastResponse });
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleOnSearchChange = (searchData) => {
    setCurrentWeather({
      city: "Mumbai",
      data: [
        {
          temp: 20,
          app_temp: 18,
          wind_spd: 5,
          rh: 60,
          pres: 1015,
          weather: {
            description: "Partly Cloudy",
            icon: "a01d",
          },
        },
      ],
    });

    // Sample data for 7-day forecast
    const sampleForecastData = Array.from({ length: 7 }).map((_, index) => ({
      date: new Date().toISOString(),
      temp: 25 + index, 
      weather: {
        description: "Clear Sky", 
        icon: "t01d", 
      },
      max_temp: 31,
      min_temp: 28,
      app_max_temp: 32, 
      app_min_temp: 26, 
      clouds: 20, 
      rh: 70, 
      wind_spd: 8,
      pres: 1011.2,
    }));

    setForecastWeather({
      city: "Sample City",
      data: sampleForecastData,
    });
  };

  return (
    <div className="container">
      <h1 className="header animate__bounceIn">Weather Forecast</h1>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather weatherData={currentWeather} />}
      {forecastWeather && <ForecastWeather weatherData={forecastWeather} />}
    </div>
  );
}

export default App;
