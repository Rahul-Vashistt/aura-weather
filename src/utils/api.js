export const BASE_URL = "https://api.weatherapi.com";

export const ENDPOINTS = {
    current: "/v1/current.json",
    forecast: "/v1/forecast.json"
  };
  
export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY