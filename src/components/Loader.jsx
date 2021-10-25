import React, { Component } from "react";

export default class Loader extends Component {
	render() {
		return (
			<div className="myloader" key="loader">
				<div class="spinner-border text-secondary" role="status">
					<span class="sr-only"></span>
				</div>
			</div>
		);
	}
}


