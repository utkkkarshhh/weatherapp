import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weather }) => {
  //  const icon = weather.weather[0].icon;
  return (
    <div>
      {weather ? (
        <div className="box">
          <div className="left-pane">
            <p className="city-name">
              {weather.name}, {weather.sys.country}
            </p>
            <p>{weather.weather[0].description}</p>
            <p><span className="bold">Feels Like: </span>{weather.main.feels_like}°C</p>
          </div>
          <div className="right-pane">
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
          </div>
        </div>
      ) : (
        <p>No weather data to display</p>
      )}
    </div>
  );
};

export default WeatherCard;
