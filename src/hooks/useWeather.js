import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, ENDPOINTS } from "../utils/api";

export default function useWeather() {

    const [ weather, setWeather ] = useState(() => {
        try{
          const stored = localStorage.getItem("weather");
          return stored ? JSON.parse(stored) : null;
        } catch {
          return null;
        }
      });
    
    const [ location, setLocation ] = useState(() => {
        try{
          const stored = localStorage.getItem("location");
          return stored ? JSON.parse(stored) : "";
        } catch {
          return "";
        }
    });

    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState("")
    const [ hasSearched, setHasSearched ] = useState(() => !!weather);


    const fetchWeatherData = async (query) => {
        const url = `${BASE_URL}${ENDPOINTS.forecast}?key=${API_KEY}&q=${query}&days=6&aqi=yes`;

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Unable to fetch weather data.");
        }

        const data = await res.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        return data;
    }

    const getLocation = () => {
        if (!navigator.geolocation) {
        setError("Geolocation is not supported by your browser.");
        return;
        }

        setIsLoading(true);
        setError("");
        setHasSearched(true);

        navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const { latitude, longitude } = position.coords;
                const data = await fetchWeatherData(`${latitude},${longitude}`);

                setWeather(data);

            } catch (err) {
                setError(`Error fetching weather: ${err.message}`);

            } finally {
                setIsLoading(false);
            }
        },
        (error) => {
            setIsLoading(false);

            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setError("Location permission denied.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    setError("Location unavailable.");
                    break;
                case error.TIMEOUT:
                    setError("Location request timed out.");
                    break;
                default:
                    setError("Unable to retrieve location.");
            }
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
        }
        );
    };

    const fetchWeather = async(city) => {
        setIsLoading(true);
        setError("");
        setHasSearched(true);

        try{
            const data = await fetchWeatherData(city);

            setWeather(data);

        } catch (err) {
            setError(`Error fetching weather: ${err.message}`)

        } finally {
            setIsLoading(false);
            setLocation("");
        }
    }

    useEffect(() => {
        localStorage.setItem("location", JSON.stringify(location));
    }, [location]);

    useEffect(() => {
        localStorage.setItem("weather", JSON.stringify(weather));
    }, [weather]);

    return {
        weather,
        location,
        setLocation,
        isLoading,
        error,
        hasSearched,
        getLocation,
        fetchWeather
    };
}