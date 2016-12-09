var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p className="text-center">This app was created using React, Foundation, Webpack, and the wunderground weather API</p>
      <p className="text-center">Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used.
        </li>
        <li>
          <a href="https://www.wunderground.com/weather/api/">Wunderground API</a> - I used this API to pull the temperature data.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
