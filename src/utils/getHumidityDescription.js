export default function getHumidityDescription(humidityPercent) {
    const humidityText = {
        dry: "The air feels dry.",
        comfortable: "Comfortable humidity levels.",
        humid: "The air feels noticeably humid.",
        veryHumid: "High humidity may feel sticky and uncomfortable.",
    };

    if (humidityPercent == null) {
        return "Humidity data unavailable.";
    }

    let humidityKey;

    if (humidityPercent < 30) {
        humidityKey = "dry";
    } else if (humidityPercent < 60) {
        humidityKey = "comfortable";
    } else if (humidityPercent < 80) {
        humidityKey = "humid";
    } else {
        humidityKey = "veryHumid";
    }

    return humidityText[humidityKey];
}