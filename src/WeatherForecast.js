import React from "react";
import Icon from "./Icon";

export default function WeatherForecast(props) {
  return (
    <div className="row">
      <div className="col">
        <div className="forecast-day-wrapper">
          <div>Mon</div>
          <div className="icon-forecast">
            <Icon icon={props.data.icon} size={30} />
          </div>
          <span className="degrees-max">13°</span>
          <span className="degrees-min"> 8°</span>
        </div>
      </div>{" "}
    </div>
  );
}
