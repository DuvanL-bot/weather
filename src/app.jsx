import React from "react";
import { useWeather } from "./hooks/useWeather";
import { getWeatherInfo } from "./constants/weatherCodes";
import WeatherForm from "./components/WeatherForm"; 
import WeatherCard from "./components/WeatherCard"; 
import styles from "./App.module.css";

export default function App() {
  const { city, setCity, weather, loading, error, handleSearch } = useWeather();
  const info = weather ? getWeatherInfo(weather.code) : null;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>Clima</h1>
          <p className={styles.subtitle}>Consulta del tiempo al instante</p>
        </header>

        <WeatherForm city={city} setCity={setCity} onSubmit={handleSearch} loading={loading} />

        {error && <div className={styles.error}>{error}</div>}

        {weather && <WeatherCard weather={weather} info={info} />}

        {!weather && !error && !loading && (
          <p className={styles.placeholder}>Escribe el nombre de una ciudad para comenzar</p>
        )}
      </div>
    </div>
  );
}