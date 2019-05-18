class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.icon_url = 'http://openweathermap.org/img/w/';
    this.degCelsius = '°C';
    this.windUnit = 'mph';
  }

  paint(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${(weather.main.temp - 273).toFixed(2)}${this.degCelsius}`;
    this.icon.setAttribute('src', `${this.icon_url}/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels like: ${(weather.main.temp_min - 273).toFixed(2)}${this.degCelsius}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}${this.windUnit}`;
  }
}
