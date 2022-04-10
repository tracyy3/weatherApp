let weather = {
  apiKey: "c237510cf91410feb66c6741d1a4860c",

  FetchWeather: function (zipcode) {
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

displayWeather: function (data) {
    const {zipcode} = data;
    const {icon, description} = data.weather[0];
    const {temp_hi} = data.main;
    const {temp_lo} = data.main;
    const {timezone} data.timezone;
    console.log(zipcode,icon,description,temp_hi,temp_lo,timezone)
}