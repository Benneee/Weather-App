class Weather {
  constructor(city, country) {
    this.apiKey = '22d2ad90f1ede40083f2a230d4af3940';
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API

  async getWeather() {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`);

    const resData = await res.json();
    return resData;
  }

  // Change Weather Location

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
