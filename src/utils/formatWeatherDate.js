export default function formatWeatherDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString.replace(" ", "T"));

  if (dateString.includes(" ")) {
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(date);
  }

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date);
}