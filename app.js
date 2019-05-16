// Initialise instance of weather class
const weather = new Weather('Lagos', 'NG');

// Event listener to get weather
document.addEventListener('DOMContentLoaded', getWeather);

// To be called only when the DOM loads
function getWeather() {
  weather
    .getWeather()
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}
