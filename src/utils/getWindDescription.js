export default function getWindDescription(windSpeed) {
    const windText = {
        calm: "Calm conditions with little wind.",
        light: "A light breeze is present.",
        breezy: "A noticeable breeze is blowing.",
        windy: "Strong winds are expected.",
    };

    if (windSpeed == null) {
        return "Wind data unavailable.";
    }

    let windKey;

    if (windSpeed < 5) {
        windKey = "calm";
    } else if (windSpeed < 20) {
        windKey = "light";
    } else if (windSpeed < 40) {
        windKey = "breezy";
    } else {
        windKey = "windy";
    }

    return windText[windKey];
}