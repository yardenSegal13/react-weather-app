import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    let celsius = props.celsius;
    return (
      <span>
        <strong className="temperature">{celsius}</strong>
        <small className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} className="unit-link">
            °F
          </a>
        </small>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span>
        <strong className="temperature">{fahrenheit}</strong>
        <small className="units">
          <a href="/" onClick={showCelsius} className="unit-link">
            °C
          </a>{" "}
          | °F
        </small>
      </span>
    );
  }
}
