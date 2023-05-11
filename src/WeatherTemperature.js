import { useState } from "react";

export default function WeatherTemperature(props) {
  const [temperature, setTemperature] = useState(props.celsius);

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.celsius);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.celsius * 5) / 9 + 32));
  }

  if (temperature === props.celsius) {
    return (
      <span>
        <strong>{temperature}</strong>
        <small>
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </span>
    );
  } else {
    return (
      <span>
        <strong>{temperature}</strong>
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
