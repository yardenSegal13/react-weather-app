import Icon from "./Icon";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.daily.temp.max);
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.daily.temp.min);
    return `${minTemp}°`;
  }

  function daily() {
    let date = new Date(props.daily.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div className="forecast-day-wrapper">
      <div>{daily()}</div>
      <div className="icon-forecast">
        <Icon icon={props.daily.weather[0].icon} size={30} />
      </div>
      <span className="degrees-min">{minTemp()} </span>
      <span className="degrees-max">{maxTemp()} </span>
    </div>
  );
}
