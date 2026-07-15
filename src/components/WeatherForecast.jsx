
export default function WeatherForecast({ days, isCelsius, isLoading }) {

  return (
    <>
      <section className="w-full mb-10 px-2">
        {
            isLoading
            ? 
            (
                <div
                    className="bg-white/10 border border-white/20 h-60 w-full lg:w-[80%]
                                p-2 mx-auto mt-4 md:mt-8 rounded-2xl shadow-2xl"
                    >
                    <div className="flex items-center gap-2 text-white/70 mb-sm">
                        <span className="material-symbols-outlined text-[20px]">
                        calendar_month
                        </span>
                        <span className="font-manrope text-sm font-semibold uppercase tracking-wider">
                        5-Day Forecast
                        </span>
                    </div>

                    <div className="w-full h-full grid grid-cols-5 gap-2 px-3">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-[80%] mb-8 w-full my-auto rounded-xl
                                    bg-white/5 animate-pulse"
                        >
                            <div className="h-full flex flex-col items-center justify-around p-5">
                            {/* Day */}
                            <div className="h-4 w-10 rounded bg-white/20" />

                            {/* Weather Icon */}
                            <div className="h-10 w-10 rounded-full bg-white/20" />

                            {/* Temperatures */}
                            <div className="flex gap-2">
                                <div className="h-5 w-8 rounded bg-white/20" />
                                <div className="h-5 w-8 rounded bg-white/10" />
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            )

            :
            (
                <div
                className="bg-white/10 border border-white/20 h-60 w-full lg:w-[80%] 
                            p-2 mx-auto mt-4 md:mt-8 rounded-2xl shadow-2xl
                                gap-2"
                >
                    <div className="flex items-center gap-2 text-white/70 mb-sm">
                        <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                        <span className="font-manrope text-sm font-semibold uppercase tracking-wider">5-Day Forecast</span>
                    </div>
                    <div className="w-full h-full grid grid-cols-5 gap-2 px-3">
                        {days?.map(day => (
                            <div
                                key={day.day}
                                className="bg-transparent cursor-pointer hover:bg-white/5
                                            h-[80%] mb-8 w-full my-auto rounded-xl
                                            transition-all duration-200 text-white"
                            >
                                <div className="h-full flex flex-col items-center p-5 justify-around font-manrope">
                                    <span className="font-semibold">{day.day}</span>
                                    <span 
                                        className="material-symbols-outlined"
                                        style={{
                                            color: day.color,
                                            fontSize: "35px",
                                            fontVariationSettings: `'FILL' ${day.fill}, 'wght' 400, 'GRAD' 0, 'opsz' 42`,
                                        }}
                                    >
                                        {day.icon}
                                    </span>
                                    <span className="flex gap-2">
                                        <p>{isCelsius ? Math.round(day.maxtemp_c) : Math.round(day.maxtemp_f)}°</p>
                                        <p className="text-white/60">
                                            {isCelsius ? Math.round(day.mintemp_c) : Math.round(day.mintemp_f)}°
                                        </p>
                                    </span>
                                </div>
                        </div>
                        ))}
                    </div>
                </div>
            )
        }
      </section>
    </>
  );
}
