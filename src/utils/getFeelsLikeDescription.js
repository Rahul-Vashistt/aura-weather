export default function getFeelsLikeDescription(currentTemp, feelsLikeTemp) {
    const feelsLikeText = {
        warmer: "Warmer than the actual temperature.",
        cooler: "Cooler than the actual temperature.",
        same: "Similar to the actual temperature.",
    };

    let key;

    if(Math.abs(currentTemp - feelsLikeTemp) <= 1) {
        key="same";
    } else if (feelsLikeTemp > currentTemp) {
        key="warmer";
    } else {
        key="cooler";
    }

    return feelsLikeText[key];
}