import React, { useState } from "react";
import { fetchCoordinates, fetchWeatherData } from "../services/weatherService";

export function useWeather() {
  //set and State
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      //Coordinates
      const geoData = await fetchCoordinates(city);
      const { latitude, longitude, name, country } = geoData;
      //weather
      const weatherData = await fetchWeatherData(latitude, longitude);
      // Humidity
      const currentHourIndex = weatherData.hourly.time.findIndex(
        (t) => t === weatherData.current_weather.time.slice(0, 13) + ":00",
      );
      const humidity =
        currentHourIndex !== -1
          ? weatherData.hourly.relative_humidity_2m[currentHourIndex]
          : null;

      setWeather({
        city: name,
        country,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        code: weatherData.current_weather.weathercode,
        humidity,
      });
    } catch (err) {
      setError(err.message || "Algo salió mal. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  //Hooks
  return {
    city,
    setCity,
    weather,
    setWeather,
    loading,
    setLoading,
    setLoading,
    setError,
    error,
    handleSearch
  };
}
