function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "fb963945219d8365844e016b8eda02af";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Las Vegas&appid=fb963945219d8365844e016b8eda02af&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
