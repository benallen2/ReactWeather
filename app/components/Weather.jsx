var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(weatherData) {
      that.setState({
        location: location,
        graphic: weatherData[2],
        weather: weatherData[1],
        temperature: weatherData[0],
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({isLoading: false})
    });
  },
  render: function () {
    var {isLoading, temperature, location, weather, graphic} = this.state;

    function renderMessage (){
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather... </h3>;
      }else if (temperature && location){
        return <WeatherMessage location={location} temperature={temperature} weather={weather} graphic={graphic}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
