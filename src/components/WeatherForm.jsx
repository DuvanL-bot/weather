import React from "react";
import { Search, Loader2 } from "lucide-react";
import styles from "./from.module.css";

export default function WeatherForm({ city, setCity, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Escribe una ciudad (ej: Bogotá)"
        className={styles.input}
      />
      <button type="submit" disabled={loading} className={styles.button}>
        {loading ? (
          <Loader2 className={styles.spinner} size={20} />
        ) : (
          <Search size={20} />
        )}
      </button>
    </form>
  );
}