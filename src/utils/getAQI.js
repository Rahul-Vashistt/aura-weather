export default function getAQI(pm25) {
    const aqiLevels = [
        {
        max: 50,
        rotation: -90,
        text: "Air quality is good. It's a great day to be outdoors.",
        },
        {
        max: 100,
        rotation: -45,
        text: "Air quality is moderate. Most people can enjoy outdoor activities.",
        },
        {
        max: 150,
        rotation: 0,
        text: "Sensitive groups may experience minor health effects.",
        },
        {
        max: 200,
        rotation: 45,
        text: "Air quality is unhealthy. Limit prolonged outdoor activities.",
        },
        {
        max: 300,
        rotation: 90,
        text: "Very unhealthy air. Reduce outdoor exposure if possible.",
        },
        {
        max: 500,
        rotation: 135,
        text: "Hazardous air quality. Stay indoors whenever possible.",
        },
    ];

    const PM25_BREAKPOINTS = [
        { cLow: 0.0, cHigh: 12.0, iLow: 0, iHigh: 50 },
        { cLow: 12.1, cHigh: 35.4, iLow: 51, iHigh: 100 },
        { cLow: 35.5, cHigh: 55.4, iLow: 101, iHigh: 150 },
        { cLow: 55.5, cHigh: 150.4, iLow: 151, iHigh: 200 },
        { cLow: 150.5, cHigh: 250.4, iLow: 201, iHigh: 300 },
        { cLow: 250.5, cHigh: 350.4, iLow: 301, iHigh: 400 },
        { cLow: 350.5, cHigh: 500.4, iLow: 401, iHigh: 500 }
      ];
    
      const calculateAQIFromPM25 = pm25 => {
        const bp = PM25_BREAKPOINTS.find(b => (pm25 >= b.cLow) && (pm25 <= b.cHigh));
    
        if(!bp) return null;
        
        return Math.round(((bp.iHigh - bp.iLow) / (bp.cHigh - bp.cLow)) * (pm25 - bp.cLow) + bp.iLow);
    
      }
    
      const aqi = pm25 == null ? null : calculateAQIFromPM25(pm25);
    
      const aqiLevel = aqi == null ? -90 : aqiLevels.find(level => aqi != null && aqi <= level.max);
      const aqiRotation = aqiLevel.rotation ?? -90;
      const aqiDescription = aqiLevel.text ?? "Air quality unavailable.";

      return { aqi, aqiRotation, aqiDescription };
}