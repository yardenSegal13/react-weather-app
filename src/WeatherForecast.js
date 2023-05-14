import React, { useState } from "react";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecastDay, setForecastDay] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleSubmit(response) {
    setForecastDay(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col">
          <WeatherForecastDay daily={forecastDay} />
        </div>{" "}
      </div>
    );
  } else {
    let apiKey = `50fa4024e3b1d5eac2f51ab18a47e997`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
    return "loading";
  }
}
