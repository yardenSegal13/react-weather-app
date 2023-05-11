import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import Icon from "./Icon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>
        {props.data.name}
        {props.data.country}
      </h1>
      <h2>
        <Icon icon={props.data.icon} />
        <WeatherTemperature celsius={props.data.temperature} />
      </h2>
      <h3>{props.data.description}</h3>
      <ul>
        <div className="row">
          <div className="col-6">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              <FormattedTime date={props.data.date} />
            </li>
          </div>
          <div className="col-6">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </div>
        </div>
      </ul>
    </div>
  );
}
