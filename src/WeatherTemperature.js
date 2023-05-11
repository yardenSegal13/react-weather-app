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
        <strong>{celsius}</strong>
        <small>
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </span>
    );
  } else {
    let fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span>
        <strong>{fahrenheit}</strong>
        <small>
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </small>
      </span>
    );
  }
}
