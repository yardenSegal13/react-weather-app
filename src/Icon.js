import { ReactSkycon } from "react-skycons-extended";

export default function Icon(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SHOWERS_DAY",
    "09n": "SHOWERS_NIGHT",
    "10d": "SHOWERS_DAY",
    "10n": "SHOWERS_NIGHT",
    "11d": "THUNDER_SHOWERS_DAY",
    "11n": "THUNDER_SHOWERS_NIGHT",
    "13d": "SNOW_SHOWERS_DAY",
    "13n": "SNOW_SHOWERS_NIGHT",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactSkycon
      icon={iconMapping[props.icon]}
      color={{
        sun: "#ffd800",
        moon: "#628edb",
        light_cloud: "#848489",
        cloud: "#848489",
        dark_cloud: "#6f6f72",
        rain: "#6888e8",
        snow: "#ffffff",
        thunder: "#ffd800",
        fog: "#a2a2aa",
      }}
      size={props.size}
    />
  );
}
