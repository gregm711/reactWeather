var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({


	render: function(){
		return (
			<div>
			<h3>weather component</h3>
			<WeatherForm/>
			<WeatherMessage/>
			</div>
			);
	}

})
module.exports = Weather;