var React = require('react');

var WeatherMessage = ({temperature, location}) => {
    return (
      <div>
        <h5>The temperature is {temperature} in {location}!</h5>
      </div>
    )
}

module.exports = WeatherMessage;
