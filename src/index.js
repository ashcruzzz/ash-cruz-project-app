function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "fb963945219d8365844e016b8eda02af";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

function farenheightChange(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let farenheightTemperature = (temperatureElement.innerHTML * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farenheightTemperature);
}

function celciusChange(event) {
  event.preventDefault();
  let celciusTemperature = Math.round((75 - 32) * (5 / 9));
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = celciusTemperature;
}

//(0°C × 9/5) + 32 ---- celcius to farenheight equation

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let farenheight = document.querySelector("#farenheight-link");
farenheight.addEventListener("click", farenheightChange);

let celcius = document.querySelector("#celcius-link");
celcius.addEventListener("click", celciusChange);

search("Las Vegas");
