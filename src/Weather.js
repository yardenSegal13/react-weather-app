import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getData(response) {
    setWeatherData({
      ready: true,
      name: `${response.data.name} ,`,
      country: response.data.sys.country,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: "Wedensday 10/05",
      LastUpdated: "12:24",
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    let apiKey = `cf6b50b908fa2e0baca3eed8a569a5f6`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function DisplayData(event) {
    event.preventDefault();
    search();
  }

  let form = (
    <form onSubmit={DisplayData}>
      <div className="row">
        <div className="col-7">
          <input
            type="text"
            placeholder="City Search.."
            className="w-100"
            onChange={updateCity}
          />
        </div>
        <div className="col-2">
          <input type="submit" value="Search" className=" btn btn-primary" />
        </div>
        <div className="col-3">
          <input
            type="submit"
            className="btn btn-primary my-location-button"
            value="My Location"
          />
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        {form}
        <h1>
          {weatherData.name}
          {weatherData.country}
        </h1>
        <h2>
          <strong>{weatherData.temperature}</strong>
          <small>°C</small>
        </h2>
        <h3>{weatherData.description}</h3>
        <ul>
          <div className="row">
            <div className="col-6">
              <li>{weatherData.date}</li>
              <li>{weatherData.lastUpdated}</li>
            </div>
            <div className="col-6">
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
