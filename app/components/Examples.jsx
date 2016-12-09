var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Washington%20DC'>Washington, DC</Link>
        </li>
        <li>
          <Link to="/?location=London%20UK">London, UK</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
