var React = require('react');

var WeatherMessage = ({temperature, location, weather, graphic}) => {
    return (
      <div>
        <h3 className="text-center">The temperature is {temperature} in {location}!</h3>
        <h3 className="text-center">Weather: {weather} <img className="text-center" src={graphic}/></h3>
      </div>
    )
}

module.exports = WeatherMessage;
