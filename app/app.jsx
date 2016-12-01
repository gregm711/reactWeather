var React = require('react');
var ReactDOM = require('react-dom');


var objOne = {
	name: 'Greg',
	location: 'cincy'
};
var objTwo = {
	age:'22',
	...objOne
};


ReactDOM.render(
	<h1> Boilerplate app</h1>,
    document.getElementById('app')
);