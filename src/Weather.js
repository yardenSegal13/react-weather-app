import React from "react";

export default function Weather() {
  return (
    <div className="weather-app">
      <form>
        <div className="row">
          <div className="col-7">
            <input type="text" placeHolder="City Search.." className="w-100" />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className=" btn btn-primary" />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary my-location-button"
              value="My Location"
            />
          </div>
        </div>
      </form>
      <h1>Paris, France</h1>
      <h2>
        <strong> 14</strong>
        <small>°C</small>
      </h2>
      <h3>Overcast Clouds</h3>
      <ul>
        <div className="row">
          <div className="col-6">
            <li>Tuesday 09/05</li>
            <li>Last Updated: 18:21</li>
          </div>
          <div className="col-6">
            <li>Humidity: 76%</li>
            <li>Wind: 10 km/h</li>
          </div>
        </div>
      </ul>
    </div>
  );
}
