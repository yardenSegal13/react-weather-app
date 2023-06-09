import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getData(response) {
    setWeatherData({
      ready: true,
      name: `${response.data.name} ,`,
      country: response.data.sys.country,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  function geoLocation(position) {
    let apiKey = `9eca7aac0b071aa16e3cb063adba0785`;
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getData);
  }

  function showCurrentLocation() {
    navigator.geolocation.getCurrentPosition(geoLocation);
  }

  function search() {
    let apiKey = `9eca7aac0b071aa16e3cb063adba0785`;
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
        <div className="col-7 form-search">
          <input
            type="text"
            placeholder="City Search.."
            className="w-100"
            onChange={updateCity}
          />
        </div>
        <div className="col-2 search-engine-buttons">
          <input type="submit" value="Search" className=" btn btn-primary " />
        </div>
        <div className="col-3 search-engine-buttons">
          <input
            type="submit"
            className="btn btn-primary my-location-button "
            value="My Location"
            onClick={showCurrentLocation}
          />
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        {form}
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
