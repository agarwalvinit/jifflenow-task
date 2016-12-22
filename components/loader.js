import React from "react";
import "../resources/css/loader.css";

let Loader = React.createClass({
	render: function() {
		return (
			<div className="loader-overlay">
				<div className="loader">Loading...</div>
			</div>
		);
	}
});

module.exports = Loader;