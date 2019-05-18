// Initialise storage class
const store = new Store();

// Get stored location data
const weatherLocation = store.getLocationData();

// Initialise instance of weather class
// const weather = new Weather('Lagos', 'NG');
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Initialise instance of UI class
const ui = new UI();

// Event listener to get weather
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
const modalBtn = document.getElementById('w-change-btn');
modalBtn.addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

  // Store location in Local Storage
  store.setLocationData(city, country);

  // Once we get the new location on the modal,
  // We need to call the getWeather function again
  // and paint the UI with the new weather information gotten for the new location

  // Call getWeather function
  getWeather();

  // We need to now close the modal, (sadly) using jQuery
  $('#locModal').modal('hide');
});

// To be called only when the DOM loads
function getWeather() {
  weather
    .getWeather()
    .then(res => {
      // We need to check if the city does exist first
      res.message === 'city not found'
        ? ui.showAlertMsg('City Not Found! Kindly click the Change Location button', 'alert alert-danger')
        : ui.paint(res);
    })
    .catch(err => console.log(err));
}
