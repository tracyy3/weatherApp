// api and weather retrieval functions

let weather = {
  apiKey: "c237510cf91410feb66c6741d1a4860c",
  searchFunction: function () {
    this.fetchWeather(document.querySelector(".searchBar").value);
  },

  // geocoding info
  fetchWeather: function (zipcode) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zipcode +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  // display current weather on the page
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp_max } = data.main;
    const { temp_min } = data.main;
    const { currentDate } = new Date();
    const { temp } = data.main;
    console.log(
      name,
      icon,
      temp,
      description,
      temp_max,
      temp_min,
      data.timezone
    );

    document.querySelector(".city").innerText = "Temperature in: " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".weatherCondition").innerText = description;
    document.querySelector(".High").innerText = temp_max + "°F";
    document.querySelector(".Low").innerText = temp_min + "°F";
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".currentDate").innerText =
      currentDate.toDateString();
  },
};

// insert event listeners to generate API calls
document.querySelector("button").addEventListener("click", function () {
  weather.searchFunction();
});
