var React = require('react');

var {Link} = require('react-router');

var Examples = (props) =>  {
		return (
		<div>
			<h1 className="text-center page-title"> Examples</h1>
			<p className="text-center"> here are a few examples</p>
			<ol>
				<li>
					<Link to="/?location=london">London, UK</Link>
				</li>
				<li>
					<Link to="/?location=Rio">Rio, Brazil</Link>
				</li>
			</ol>
		</div>
			);
};
module.exports = Examples;