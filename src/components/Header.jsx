import { Search, MapPin } from "lucide-react";

export default function Header({ location, setLocation, fetchWeatherByLocation, fetchWeatherByCity, isCelsius, setIsCelsius, history }) {

    return (
        <nav className="p-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                {/* Logo */}
                <div className="shrink-0 flex items-center gap-2 text-4xl text-zinc-200 p-4 font-manrope font-semibold">
                    <img src="/appLogo.svg" alt="Logo" className="w-12" />
                    AuraWeather
                </div>

                {/* Search + Toggle */}
                <div className="flex items-center gap-3 md:flex-1 md:justify-center">

                    {/* Search */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            location && fetchWeatherByCity(location);
                        }}
                        className="flex w-full items-center rounded-full border border-white/20
                                        bg-white/10 px-3 py-0.5 focus-within:shadow-xl  
                                        md:max-w-2xl lg:max-w-4xl"
                    >
                        <button
                            type="submit"
                            className="text-white/40 shrink-0 cursor-pointer hover:text-white/70 transition duration-100 active:scale-95"
                        >
                            <Search 
                                className="h-5 w-5"
                            />
                        </button>

                        <input
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                            enterKeyHint="search"
                            placeholder="Search city, region and country. . ."
                            className="w-full rounded-full bg-transparent
                                       pl-6 pr-17 py-2.5 text-white outline-none
                                       transition-all duration-200 placeholder:text-white/40 placeholder:font-manrope placeholder:translate-y-0.5"
                        />

                        <button 
                            onClick={fetchWeatherByLocation}
                            className="bg-white/10 rounded-full px-3 py-2 cursor-pointer hover:bg-white/20 transition-all duration-200 active:scale-95"
                        >
                            <MapPin className="text-white/70 w-4 h-4"/>
                        </button>
                    </form>

                    {/* Toggle Mobile*/}
                    <div className="block md:hidden">
                        <div className="md:shrink-0 flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-md shadow-xl">
                            <button
                                onClick={() => setIsCelsius(true)}
                                className={
                                    `px-4 py-2 text-sm font-semibold cursor-pointer
                                    ${isCelsius ? "text-white rounded-full bg-white/20" : "text-white/60 hover:text-white"}`
                                }
                            >
                                °C
                            </button>

                            <button
                                onClick={() => setIsCelsius(false)}
                                className={
                                    `px-4 py-2 text-sm font-semibold cursor-pointer
                                    ${!isCelsius ? "text-white rounded-full bg-white/20" : "text-white/60 hover:text-white"}`
                                }
                            >
                                °F
                            </button>
                        </div>
                    </div>
                </div>

                {/* Toggle Desktop*/}
                <div className="hidden md:block">
                    <div className="md:shrink-0 flex rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-md shadow-xl">
                        <button
                            onClick={() => setIsCelsius(true)}
                            className={
                                `px-4 py-2 text-sm font-semibold cursor-pointer active:scale-93 transition-transform duration-200
                                ${isCelsius ? "text-white rounded-full bg-white/20" : "text-white/60 hover:text-white"}`
                            }
                        >
                            °C
                        </button>

                        <button
                            onClick={() => setIsCelsius(false)}
                            className={
                                `px-4 py-2 text-sm font-semibold cursor-pointer active:scale-93 transition-transform duration-200
                                ${!isCelsius ? "text-white rounded-full bg-white/20" : "text-white/60 hover:text-white"}`
                            }
                        >
                            °F
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <section className="flex md:hidden gap-2 mt-2 overflow-x-auto">
            {[...history].reverse().map((city) => (
                <span
                key={`${city.name}-${city.region}-${city.country}`}
                onClick={() => fetchWeatherByCity(city.name)}
                className="bg-white/20 border border-white/30 text-sm
                            text-white rounded-2xl px-4 py-1 font-semibold
                            font-manrope hover:bg-white/30 transition duration-200
                            cursor-pointer shrink-0 active:scale-95"
                >
                {city.name}
                </span>
            ))}
            </section>

            {/* Desktop */}
            <section className="hidden md:flex gap-2 md:ml-4 mt-2 overflow-x-auto">
            {history.map((city) => (
                <span
                key={`${city.name}-${city.region}-${city.country}`}
                onClick={() => fetchWeatherByCity(city.name)}
                className="bg-white/20 border border-white/30 text-sm
                            text-white rounded-2xl px-4 py-1 font-semibold
                            font-manrope hover:bg-white/30 transition duration-200
                            cursor-pointer shrink-0 active:scale-95"
                >
                {city.name}
                </span>
            ))}
            </section>
        </nav>
    );
}