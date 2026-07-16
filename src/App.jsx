import { useState } from "react";
import useWeather from "./hooks/useWeather";
import Header from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherDetails from "./components/WeatherDetails";
import WeatherForecast from "./components/WeatherForecast";
import feelsLike from "./assets/feelsLike.svg";
import humidity from "./assets/humidity.svg";
import wind from "./assets/wind.svg";
import AQIIcon from "./components/AQIIcon";
import formatWeatherDate from "./utils/formatWeatherDate";
import getWeatherAppearance from "./utils/getWeatherAppearance";
import getFeelsLikeDescription from "./utils/getFeelsLikeDescription";
import getHumidityDescription from "./utils/getHumidityDescription";
import getWindDescription from "./utils/getWindDescription";
import getAQI from "./utils/getAQI";


export default function App() {
  const {
    weather,
    location,
    setLocation,
    isLoading,
    error,
    hasSearched,
    getLocation,
    fetchWeather
  } = useWeather();

  const [ isCelsius, setIsCelsius ] = useState(true);

  const currentAppearance = getWeatherAppearance(weather?.current?.condition?.text);
  const bgClass = currentAppearance.background;


  // Feels Like
  // ======================
  const currentTemp = isCelsius ? weather?.current?.temp_c : weather?.current?.temp_f;
  const feelsLikeTemp = isCelsius ? weather?.current?.feelslike_c : weather?.current?.feelslike_f;
  const feelsLikeDescription = getFeelsLikeDescription(currentTemp, feelsLikeTemp);


  // Humidity
  // ======================
  const humidityPercent = weather?.current?.humidity;
  const humidityDescription = getHumidityDescription(humidityPercent);


  // Wind
  // ======================
  const windSpeed = weather?.current?.wind_kph;
  const windDescription = getWindDescription(windSpeed);


  // AQI
  // ======================
  const pm25 = weather?.current?.air_quality?.pm2_5;
  const { aqi, aqiRotation, aqiDescription } = getAQI(pm25)


  // WeatherDetails
  // ======================
  const details = [
    {
      topText: "FEELS LIKE",
      img: feelsLike,
      bottomText: feelsLikeTemp != null
        ? `${Math.round(feelsLikeTemp)}°`
        : "--",
      pText: feelsLikeDescription,
    },
    {
      topText: "HUMIDITY",
      img: humidity,
      bottomText: humidityPercent != null
        ? `${humidityPercent}%`
        : "--",
      pText: humidityDescription,
    },
    {
      topText: "WIND",
      img: wind,
      bottomText: windSpeed != null 
        ? `${Math.round(windSpeed)} km/h`
        : "--",
      pText: windDescription,
    },
    {
      topText: "AQI",
      icon: <AQIIcon aqiRotation={aqiRotation}/>,
      bottomText: aqi,
      pText: aqiDescription,
    },
  ];


  // WeatherForecast
  // ======================
  const forecast = weather?.forecast?.forecastday?.slice(1, 6);

  const days = forecast?.map((day) => {
    const iconData = getWeatherAppearance(day.day.condition.text);

    return {
      day: formatWeatherDate(day.date),
      icon: iconData.icon,
      color: iconData.color,
      fill: 1,
      maxtemp_c: day.day.maxtemp_c,
      mintemp_c: day.day.mintemp_c,
      maxtemp_f: day.day.maxtemp_f,
      mintemp_f: day.day.mintemp_f,
      condition: day.day.condition.text,
    };
  });
  


  return (
    <>
      <div className="relative">
        <div className="relative min-h-screen overflow-x-hidden -z-30 bg-[#101415] text-white">
          <div className={`fixed inset-0 -z-20 ${bgClass}`}></div>
          <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_55%)] mix-blend-overlay opacity-90"></div>
        </div>

        <main className="absolute inset-0 overflow-y-auto">
            <Header
              location={location}
              setLocation={setLocation}
              getLocation={getLocation}
              fetchWeather={fetchWeather}
              isCelsius={isCelsius}
              setIsCelsius={setIsCelsius}
            />

            {hasSearched && (
              <>
                <WeatherDisplay
                  isLoading={isLoading}
                  error={error}
                  weather={weather}
                  isCelsius={isCelsius}
                />
                {!error && (
                  <>
                    <WeatherDetails
                      isLoading={isLoading}
                      details={details}
                    />
                    <WeatherForecast
                      days={days}
                      isCelsius={isCelsius}
                      isLoading={isLoading}
                    />
                  </>
                )}
              </>
            )}

        </main>
      </div>
    </>
  );
}
