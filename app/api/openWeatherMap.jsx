var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.wunderground.com/api/377df2fc3888b004/conditions/q/';

//377df2fc3888b004

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}${encodedLocation}.json`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        console.log(res.data);
          var weatherData = [];
          var temp = res.data.current_observation.temperature_string;
          var weather = res.data.current_observation.weather;
          var graphic = res.data.current_observation.icon_url
          weatherData = [temp, weather, graphic];
          return weatherData

        // console.log(res.data);
        // var temp = res.data.current_observation.temperature_string;
        // var weather = res.data.current_observation.weather;
        // console.log(temp);
        // console.log(weather);
        // return temp, weather
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
