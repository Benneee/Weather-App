// Initialise instance of weather class
const weather = new Weather('Lagos', 'NG');

// Initialise instance of UI class
const ui = new UI();

// Event listener to get weather
document.addEventListener('DOMContentLoaded', getWeather);

// To be called only when the DOM loads
function getWeather() {
  weather
    .getWeather()
    .then(res => {
      ui.paint(res);
    })
    .catch(err => console.log(err));
}
