import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import Icon from "./Icon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>
        {props.data.name}
        {props.data.country}
      </h1>
      <h2>
        <Icon icon={props.data.icon} size={60} />
        <WeatherTemperature celsius={props.data.temperature} />
      </h2>
      <h3 className="description">{props.data.description}</h3>
      <ul className="weather-info">
        <div className="row">
          <div className="col-6">
            <li className="weather-info-element">
              <FormattedDate date={props.data.date} />
            </li>
            <li className="weather-info-element">
              <FormattedTime date={props.data.date} />
            </li>
          </div>
          <div className="col-6">
            <li className="weather-info-element">
              Humidity: {props.data.humidity}%
            </li>
            <li className="weather-info-element">
              Wind: {props.data.wind} km/h
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
}
