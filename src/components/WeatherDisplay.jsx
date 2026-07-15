import formatWeatherDate from "../utils/formatWeatherDate";

export default function WeatherDisplay({ isLoading, error, weather, isCelsius }) {

    function getTemperature(c, f, isCelsius) {
        return Math.round(isCelsius ? c : f);
    }

    const formattedDate = formatWeatherDate(weather?.location?.localtime)
    const currentTemp = getTemperature(
        weather?.current?.temp_c,
        weather?.current?.temp_f,
        isCelsius
    )
    const day = weather?.forecast?.forecastday[0]?.day;
    const highTemp = getTemperature(
        day?.maxtemp_c,
        day?.maxtemp_f,
        isCelsius
    );
    const lowTemp = getTemperature(
        day?.mintemp_c,
        day?.mintemp_f,
        isCelsius
    )

    const { name, region, country } = weather?.location ?? {};

    const locationParts = [...new Set([name, region !== name && region, country !== region && country].filter(Boolean))];
    const city = locationParts[0]

    const regionAndCountry = locationParts.slice(1).join(', ')

    return (
        <div className="w-full">
            {error
                ? (
                    <section className="font-manrope lg:w-[77%] w-[95%] mx-auto mt-4 md:mt-8 lg:mt-16">
                        <div className="rounded-3xl border border-red-500/30 bg-red-500/10 backdrop-blur-md p-8 text-center">

                            <span className="material-symbols-outlined text-6xl text-red-400">
                                error
                            </span>

                            <h2 className="mt-4 text-2xl font-bold text-red-300">
                                Couldn't fetch weather
                            </h2>

                            <p className="mt-2 text-red-200/80">
                                {error}
                            </p>

                            {!error.includes('Location') && (
                                <p className="mt-6 text-white/50">
                                    Check the city name and try again.
                                </p>
                            )}

                        </div>
                    </section>
                  )
                : (
                    isLoading 
                        ? (
                            <section className="flex justify-between font-manrope text-white p-4 lg:w-[77%] w-[95%] mx-auto mt-4 md:mt-8 lg:mt-16 animate-pulse">

                                {/* Left */}
                                <div className="flex flex-col gap-5 md:gap-7">

                                    <div className="flex flex-col gap-2 md:gap-4.5">
                                        <div className="h-10 w-48 md:h-12 md:w-64 lg:h-16 lg:w-80 rounded-lg bg-white/10"></div>

                                        <div className="h-5 w-36 rounded bg-white/10"></div>
                                    </div>

                                    <div className="flex items-center gap-2.5">
                                        <div className="h-9 w-9 rounded-full bg-white/10"></div>

                                        <div className="h-6 w-32 rounded bg-white/10"></div>
                                    </div>

                                </div>

                                {/* Right */}
                                <div className="flex flex-col items-end justify-end gap-2">

                                    <div className="h-16 w-32 md:h-20 md:w-40 rounded-lg bg-white/10"></div>

                                    <div className="h-6 w-28 rounded bg-white/10"></div>

                                </div>

                            </section>
                          )
                        : (
                            <section className="flex justify-between font-manrope text-white p-4 lg:w-[77%] w-[95%] mx-auto mt-4 md:mt-8 lg:mt-16">
                                <div className="flex flex-col justify-start gap-5 md:gap-7">
                                    <div className="flex flex-col gap-2 md:gap-4.5">
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold drop-shadow-xl">
                                            {city}
                                        </h1>
                                        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl opacity-83 font-semibold drop-shadow-xl -translate-y-2">
                                            {regionAndCountry}
                                        </h1>
                                        <p className="text-white/80 font-medium text-sm md:text-xl">{formattedDate}</p>
                                    </div>
                                    <span className="flex gap-0.5 items-center">
                                        <img
                                            src={`https:${weather?.current?.condition?.icon}`}
                                            alt={weather?.current?.condition?.text}
                                            className="w-10 h-10 lg:w-14 lg:h-14"
                                        />
                                        <h4 className="text-sm md:text-lg xl:text-2xl font-medium">{weather?.current.condition.text}</h4>
                                    </span>
                                </div>

                                <div className="text-right flex flex-col justify-end gap-1">
                                    <div 
                                        className="text-6xl xl:text-8xl font-extralight drop-shadow-xl tracking-tighter"
                                    >
                                        {currentTemp}°
                                    </div>
                                    <div 
                                        className="text-white/80 text-md md:text-lg xl:text-2xl font-medium"
                                    >
                                        H: {highTemp}° L: {lowTemp}°
                                    </div>
                                </div>
                            </section>
                          )
                  )
            }
        </div>
    )
}