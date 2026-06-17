import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  
  const API_KEY = import.meta.env.VITE_API_KEY;
  const getWeather = async () => {
    if (!city) return;

    try {
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();

      if (data.cod !== 200) {
        setError("City not found!");
        setWeather(null);
        return;
      }

      setWeather(data);
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <Header />

      <SearchBar
        city={city}
        setCity={setCity}
        getWeather={getWeather}
      />

      {error && (
        <p className="error">{error}</p>
      )}

      <WeatherCard weather={weather} />

      <WeatherDetails weather={weather} />
    </div>
  );
}

export default App;