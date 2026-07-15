
export default function getWeatherAppearance (condition = "") {
  const text = condition.toLowerCase();

  // Thunderstorms
  if (text.includes("thunder"))
    return {
      icon: "thunderstorm",
      color: "#5C6BC0",
      background: "bg-storm",
    };

  // Rain & Drizzle
  if (
    text.includes("rain") ||
    text.includes("drizzle") ||
    text.includes("shower")
  )
    return {
      icon: "rainy",
      color: "#42A5F5",
      background: "bg-rainy",
    };

  // Snow & Blizzard
  if (
    text.includes("snow") ||
    text.includes("blizzard") ||
    text.includes("flurries")
  )
    return {
      icon: "weather_snowy",
      color: "#B3E5FC",
      background: "bg-cloudy",
    };

  // Sleet / Ice
  if (
    text.includes("sleet") ||
    text.includes("ice pellets") ||
    text.includes("freezing")
  )
    return {
      icon: "ac_unit",
      color: "#81D4FA",
      background: "bg-cloudy",
    };

  // Hail
  if (text.includes("hail"))
    return {
      icon: "weather_hail",
      color: "#90CAF9",
      background: "bg-cloudy",
    };

  // Fog & Mist
  if (
    text.includes("fog") ||
    text.includes("mist")
  )
    return {
      icon: "foggy",
      color: "#90A4AE",
      background: "bg-cloudy",
    };

  // Sand / Dust
  if (
    text.includes("sand") ||
    text.includes("dust")
  )
    return {
      icon: "filter_drama",
      color: "#C2A56D",
      background: "bg-cloudy",
    };

  // Smoke / Haze
  if (
    text.includes("smoke") ||
    text.includes("haze")
  )
    return {
      icon: "air",
      color: "#9E9E9E",
      background: "bg-cloudy",
    };

  // Windy
  if (text.includes("wind"))
    return {
      icon: "air",
      color: "#81D4FA",
      background: "bg-cloudy",
    };

  // Partly Cloudy
  if (text.includes("partly"))
    return {
      icon: "partly_cloudy_day",
      color: "#90A4AE",
      background: "bg-cloudy",
    };

  // Overcast
  if (text.includes("overcast"))
    return {
      icon: "cloud",
      color: "#607D8B",
      background: "bg-cloudy",
    };

  // Cloudy
  if (text.includes("cloud"))
    return {
      icon: "cloud",
      color: "#78909C",
      background: "bg-cloudy",
    };

  // Clear
  if (text.includes("clear"))
    return {
      icon: "clear_day",
      color: "#FDB813",
      background: "bg-clear",
    };

  // Sunny
  if (text.includes("sunny"))
    return {
      icon: "wb_sunny",
      color: "#FDB813",
      background: "bg-sunny",
    };

  // Default
  return {
    icon: "cloud",
    color: "#9E9E9E",
    background: "bg-storm",
  };
};