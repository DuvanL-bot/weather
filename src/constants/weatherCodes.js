export const weatherCodeMap = {
  0: { label: "Despejado", icon: "☀️" },
  1: { label: "Mayormente despejado", icon: "🌤️" },
  2: { label: "Parcialmente nublado", icon: "⛅" },
  3: { label: "Nublado", icon: "☁️" },
  45: { label: "Niebla", icon: "🌫️" },
  48: { label: "Niebla helada", icon: "🌫️" },
  51: { label: "Llovizna ligera", icon: "🌦️" },
  61: { label: "Lluvia ligera", icon: "🌧️" },
  63: { label: "Lluvia moderada", icon: "🌧️" },
  65: { label: "Lluvia fuerte", icon: "🌧️" },
  71: { label: "Nieve ligera", icon: "🌨️" },
  80: { label: "Chubascos", icon: "🌦️" },
  95: { label: "Tormenta", icon: "⛈️" },
};

export function getWeatherInfo(code) {
  return weatherCodeMap[code] || { label: "Desconocido", icon: "❓" };
}