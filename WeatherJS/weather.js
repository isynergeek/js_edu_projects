class Weather {
  constructor(country, city) {
    this.apiKey = 'd10bed605946a352';
    this.country = country;
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/lang:RU/q/${this.country}/${this.city}.json`);
    console.log(response);
    const responseData = await response.json();
    return responseData.current_observation;
  }

  changeLocation(country, city) {
    this.country = country;
    this.city = city;
  }


}