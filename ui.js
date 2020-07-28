class UI {
    constructor() {
        this.state = document.getElementById('w-state');
        this.country = document.getElementById('w-country');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.state.textContent = weather.name;
        this.country.textContent = weather.sys.country;
        for (let x of weather.weather){
        this.desc.textContent = x.description.toUpperCase();
        }
        this.string.textContent = `${weather.main.temp} fahrenhits`;
        this.icon.setAttribute('src', weather.weather.icon)
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.dewpoint.textContent = `Dew Point: ${weather.dt}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;

    }
}