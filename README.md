# AuraWeather

<p align="center">
  <img src="./public/appLogo.svg" alt="AuraWeather Logo" width="120" />
</p>

<p align="center">
  A modern weather application built with React and Vite that provides real-time weather information, a 5-day forecast, Air Quality Index (AQI), and detailed weather insights for any city or your current location.
</p>

---

## Preview

<p align="center">
  <img src="./src/assets/preview.gif" alt="AuraWeather Demo" />
  <br>
  <em>Search by city, use your current location, switch temperature units, and explore the 5-day forecast.</em>
</p>

---

## Live Demo

https://aura-weather-sable.vercel.app/

---

## Features

* Search weather by city name
* Get weather using your current location
* Real-time weather conditions
* 5-day weather forecast
* Air Quality Index (AQI)
* Feels Like temperature analysis
* Humidity insights
* Wind condition summaries
* Dynamic weather-based backgrounds
* Weather condition icons
* Toggle between Celsius and Fahrenheit
* Persist weather data and last searched location using Local Storage
* Responsive interface for desktop and mobile devices

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* Tailwind CSS
* WeatherAPI
* Geolocation API
* Local Storage API

---

## Project Structure

```text
.
├── public
│   └── appLogo.svg
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   │   └── useWeather.js
│   ├── utils
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/aura-weather.git
cd aura-weather
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create an environment file

Create a `.env` file in the root directory.

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

You can get a free API key from:

https://www.weatherapi.com/

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## How It Works

* Users can search for weather information by entering a city name or use their current location through the browser's Geolocation API.
* Weather data is fetched from WeatherAPI.
* Current weather, a 5-day forecast, and air quality information are displayed in a clean and responsive interface.
* AQI values are calculated from PM2.5 concentration using standard AQI breakpoint calculations.
* Weather conditions dynamically update icons and background themes.
* The latest weather data and search input are stored in Local Storage, allowing the previous session to be restored after refreshing the page.

---

## Future Improvements

* Hourly weather forecast
* Search autocomplete
* Favorite locations
* Sunrise and sunset information
* UV Index
* Weather alerts
* PWA support
* Persist temperature unit preference
* Additional weather metrics

---

## License

This project is licensed under the MIT License.