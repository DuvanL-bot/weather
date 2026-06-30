import React from "react";
import { MapPin, Wind, Droplets } from "lucide-react";
import  styles  from "./card.module.css";

export default function WeatherCard({ weather, info }) {
  return (
    <div className={styles.card}>
      <div className={styles.location}>
        <MapPin size={16} className="text-blue-500" />
        <span>{weather.city}, {weather.country}</span>
      </div>

      <div className={styles.mainInfo}>
        <span className={styles.icon}>{info.icon}</span>
        <span className={styles.temperature}>{Math.round(weather.temp)}°C</span>
      </div>

      <div className={styles.condition}>{info.label}</div>

      <div className={styles.grid}>
        <div className={styles.subCard}>
          <div className={styles.subIcon}><Wind size={20} /></div>
          <div>
            <span className={styles.subLabel}>Viento</span>
            <span className={styles.subValue}>{weather.wind} km/h</span>
          </div>
        </div>

        {weather.humidity !== null && (
          <div className={styles.subCard}>
            <div className={styles.subIcon}><Droplets size={20} /></div>
            <div>
              <span className={styles.subLabel}>Humedad</span>
              <span className={styles.subValue}>{weather.humidity}%</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
