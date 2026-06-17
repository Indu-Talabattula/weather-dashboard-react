import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog
} from "react-icons/wi";

const getWeatherIcon = (condition) => {
  switch (condition) {
    case "Clear":
      return <WiDaySunny size={140} />;

    case "Clouds":
      return <WiCloud size={140} />;

    case "Rain":
      return <WiRain size={140} />;

    case "Thunderstorm":
      return <WiThunderstorm size={140} />;

    case "Snow":
      return <WiSnow size={140} />;

    case "Mist":
    case "Haze":
    case "Fog":
      return <WiFog size={140} />;

    default:
      return <WiCloud size={140} />;
  }
};

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="weather-top">
        <div>
          <h2>{weather.name}</h2>
          <p>{new Date().toLocaleDateString()}</p>
        </div>

        <span className="weather-status">
          {weather.weather[0].main}
        </span>
      </div>

      <div className="weather-main">
        <div className="weather-icon">
  {getWeatherIcon(weather.weather[0].main)}
</div>

        <div className="temp-section">
  <h1>{Math.round(weather.main.temp)}°C</h1>
  <p>{weather.weather[0].description}</p>
</div>
      </div>
    </div>
  );
}