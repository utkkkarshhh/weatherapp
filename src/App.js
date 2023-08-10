import React, {useState} from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";

const apiKey = "63a378bab0a62b860af04c3142ff2816&units=metric";

const App = () => {
  const[weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (location) =>{
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
          setErrorMessage('');
        } else {
          setWeatherData(null);
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
        setWeatherData(null);
        setErrorMessage('Error retrieving weather data');
      });
  }

  return (
    <div>
      <WeatherForm onSubmit={handleSearch}/>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <WeatherCard weather={weatherData} />
    </div>
  );
};

export default App;
