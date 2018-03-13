// Init UI object
const ui = new UI;
// Init storage
const storage = new Storage();
// Get stored location data 
const weatherLocation = storage.getLocationData();
console.log(weatherLocation);
// Init weather object
const weather = new Weather(weatherLocation.country, weatherLocation.city);


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  weather.changeLocation(country, city);

  // Set location in LS

  storage.setLocationData(country, city);

  // Get and display weather
  getWeather();
  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err))
}