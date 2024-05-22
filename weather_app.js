document.getElementById("get-weather").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  const apiKey = "your_api_key"; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${temperature}°C`;
      document.getElementById(
        "description"
      ).textContent = `Description: ${description}`;
      document.getElementById(
        "icon"
      ).src = `http://openweathermap.org/img/wn/${icon}.png`;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Could not retrieve weather data. Please try again.");
    });
});
