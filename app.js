const apiKey = "d3b9541416c3887da52f08c6f043b4ed";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const val = searchBox.innerText.toLowerCase();
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = `${Math.round(
      data.main.temp
    )} °C`;
    document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
    document.querySelector(".wind").innerText = `${data.wind.speed} km/h`;
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "clouds.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "clear.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      weatherIcon.src = "mist.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "snow.png";
    } else if (data.weather[0].main === "Haze") {
      weatherIcon.src = "haze.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
