function fetchWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const current = data.current_weather;
      console.log(`Temp: ${current.temperature}°C`);

      // Update the DOM if you want the weather widget to actually show data
      const temperature = document.getElementById("temperature");
      const description = document.getElementById("description");
      if (temperature) temperature.textContent = `${current.temperature}°C`;
      if (description)
        description.textContent = `Wind: ${current.windspeed} km/h`;
    })
    .catch((err) => console.error("Weather fetch failed:", err));
}

export { fetchWeather };
