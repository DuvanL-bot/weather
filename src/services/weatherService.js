const GEO_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

export async function fetchCoordinates(city) {
    const response = await fetch(`${GEO_API_URL}?name=${encodeURIComponent(city)}&count=1&language=es`);
  if (!response.ok) throw new Error("Error en la red al buscar la ciudad.");{
        const data = await response.json();
    if(!data.results || data.results.length === 0) {
    throw new Error("No encontré esa ciudad. Intenta con otro nombre.");
  }
  return data.results[0];
    }
}

export async function fetchWeatherData(latitude, longitude){
    const response = await fetch(`${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relative_humidity_2m&timezone=auto`);
    if(!response.ok) throw new Error("Error en la red al obtener el clima.");
        return await response.json()
}