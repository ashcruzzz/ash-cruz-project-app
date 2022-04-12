//city

function displayNewWeather(response) {
  console.log(response);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let newTemp = document.querySelector("#temperature");
  newTemp.innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#current-humidity").innerHTML =
    response.data.main.humidity;
  document.querySelector("#current-windspeed").innerHTML =
    response.data.wind.speed;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
}

function findCity(event) {
  event.preventDefault();
  let apiKey = "fb963945219d8365844e016b8eda02af";
  let city = document.querySelector("#current-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayNewWeather);

  //let currentCity = document.querySelector("#current-city");
  //console.log(currentCity.value);
  //let h1 = document.querySelector("h1");
  //h1.innerHTML = `${currentCity.value}`;
}
let newCity = document.querySelector("#search-city-form");
newCity.addEventListener("submit", findCity);

//city change + link to openweathermap

//current day and time
let now = new Date();
console.log(now);
function formatDate(date) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayList = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[dayList]} ${hours}:${minutes}`;
}
special.innerHTML = formatDate();

//farenheight button
function convertToFarenheight(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  // farenheight = Math.round((temperature * 9) / 5 + 32);
  temperatureElement.innerHTML = 54;
}
let farenheightLink = document.querySelector("#farenheight-link");
farenheightLink.addEventListener("click", convertToFarenheight);

//farenheight link
function displayFarenheight(response) {
  console.log(response);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function findFarenheight(event) {
  event.preventDefault();
  let apiKey = "fb963945219d8365844e016b8eda02af";
  let city = document.querySelector("#current-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayFarenheight);
}
let newFarenheight = document.querySelector("#farenheight-link");
newFarenheight.addEventListener("click", findFarenheight);
