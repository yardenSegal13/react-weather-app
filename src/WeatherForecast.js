import React, { useEffect, useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastDay, setForecastDay] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(response) {
    setForecastDay(response.data.daily);
    setLoaded(true);
  }

  useEffect(
    function () {
      setLoaded(false);
    },
    [props.data.coordinates]
  );

  if (loaded) {
    return (
      <div className="row">
        {forecastDay.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay daily={day} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = `50fa4024e3b1d5eac2f51ab18a47e997`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.coordinates.lat}&lon=${props.data.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return "loading";
  }
}
