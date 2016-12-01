var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

	getInitialState: function() {
		return  {
			isLoading: false
		}
	},

	handleSearch: function(location){
		var that = this;
		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errorMessage) {
			that.setState({isLoading: false});
			alert(errorMessage);
		});

	},

	render: function(){
		var {isLoading, temp, location} = this.state;

		function renderMessage () {

			if (isLoading) {
				return <h3 className="text-center"> fetching data</h3>;

			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}
		return (
			<div>
			<h1 className="text-center">Get weather </h1>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderMessage()}
			</div>
			);
	}

})
module.exports = Weather;