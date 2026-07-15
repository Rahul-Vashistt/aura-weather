
export default function WeatherDetails( { isLoading, details }) {

    return (
        <>
            <section className="w-full">
                <div className="w-full lg:w-[80%] p-2 mx-auto mt-4 md:mt-8 grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-4">
                    {details.map((item, index) => (
                        isLoading
                            ? (
                                <div
                                    key={index}
                                    className="animate-pulse relative w-full aspect-square bg-white/10 border border-white/20 rounded-2xl shadow-2xl text-white font-manrope font-semibold"
                                >
                                    <div className="flex gap-3 px-5 py-5 items-center">
                                        <span className="w-8 h-8 bg-white/10 rounded-full" />

                                        <span className="w-23 h-5 bg-white/10 rounded-2xl"/>
 
                                    </div>

                                    <div className="absolute bottom-0 p-5 flex flex-col gap-0.5 lg:gap-2">
                                        <span className="h-8 xl:h-10 w-20 xl:w-24 bg-white/10 rounded-2xl"/>

                                        <p className="w-42 xl:w-50 h-4 bg-white/10 rounded-2xl"/>
                                    </div>
                                </div>
                              )
                            
                            : (
                                <div
                                    key={index}
                                    className="relative w-full aspect-square bg-white/10 border border-white/20 rounded-2xl shadow-2xl text-white font-manrope font-semibold"
                                >
                                    <div className="flex gap-3 px-5 py-5 items-center">
                                        <span>
                                            {item.img
                                                ? <img src={item.img} className="opacity-70 w-5 xl:w-7"/>
                                                : item.icon
                                            }   
                                        </span>
                                        <span className={`opacity-60 tracking-wider ${item.topText === "AQI" ? "text-sm" : "text-xs"}`}>
                                            {item.topText}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-0 p-5 flex flex-col gap-0.5 lg:gap-2">
                                        <span className="text-2xl xl:text-4xl font-medium">
                                            {item.bottomText}
                                        </span>
                                        <p className="font-light text-xs xl:text-sm text-white/80 tracking-wider">
                                            {item.pText}
                                        </p>
                                    </div>
                                </div>
                            )  
                        
                    ))}
                </div>
            </section>
        </>
    )
}