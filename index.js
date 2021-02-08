import "./styles.css";

//Feature 1
let dateElement = document.querySelector("#date");
let currentTime = new Date();

let date = currentTime.getDate();
let year = currentTime.getFullYear();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let monthIndex = currentTime.getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

dateElement.innerHTML = `${date} ${months[monthIndex]} ${year} <br>${hours}:${minutes}`;

let weekdayElement = document.querySelector("#weekday");
let currentDay = new Date();

let dayIndex = currentDay.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

weekdayElement.innerHTML = `${days[dayIndex]}`;

//Feature 2

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "70e0d39ded7606c2dcf85c399bfc9f36";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

//Homework 5

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `${temperature}°C`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = message;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
