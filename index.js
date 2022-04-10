let weather = {
  apiKey: "c237510cf91410feb66c6741d1a4860c",
  fetchWeather: function (zipcode) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?zip=" +
        zipcode +
        "&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => console.log(data));
  },
};
