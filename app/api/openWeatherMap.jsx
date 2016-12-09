var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.wunderground.com/api/377df2fc3888b004/conditions/q/';

//377df2fc3888b004

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}.json`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.response.error && res.data.response.error.description){
        throw new Error(res.data.response.error.description);
      } else {
        console.log(res.data);
          var weatherData = [];
          var weather = res.data.current_observation.weather;
          var temp = res.data.current_observation.temperature_string;
          var graphic = res.data.current_observation.icon_url;
          weatherData = [temp, weather, graphic];
          return weatherData
      }
    }, function (res) {
      throw new Error(res.data.response.error.description);
    });
  }
}
