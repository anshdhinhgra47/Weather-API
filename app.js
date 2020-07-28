// Init storage

const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object

const weather = new Weather(weatherLocation.state, weatherLocation.country);

//Init UI

const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    // Change Location
    weather.changeLocation(state, country);

    // Set location in LS
    storage.setLocationData(state, country);

    // Get and display weather 
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
})


function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
    }