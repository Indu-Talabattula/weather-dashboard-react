import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiBarometer
} from "react-icons/wi";

export default function WeatherDetails({ weather }) {
  if (!weather) return null;

  return (
    <div className="details-grid">
      <div className="detail-card">
        <WiHumidity size={60} />
        <h3>Humidity</h3>
        <p>{weather.main.humidity}%</p>
      </div>

      <div className="detail-card">
        <WiStrongWind size={60} />
        <h3>Wind Speed</h3>
        <p>{weather.wind.speed} m/s</p>
      </div>

      <div className="detail-card">
        <WiThermometer size={60} />
        <h3>Feels Like</h3>
        <p>{Math.round(weather.main.feels_like)}°C</p>
      </div>

      <div className="detail-card">
        <WiBarometer size={60} />
        <h3>Pressure</h3>
        <p>{weather.main.pressure} hPa</p>
      </div>
    </div>
  );
}