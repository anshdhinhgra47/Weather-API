class Weather{
    constructor(state, country) {
        this.apiKey = '3b95db4835e4e74bd85a98230568a445';
        this.state = state;
        this.country = country;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state},${this.country}&appid=${this.apiKey}`)
        
        const responseData = await response.json();

        return responseData;
    }

    // Change the weather location
    changeLocation(state, country){
        this.state = state;
        this.country = country;
    }
}

