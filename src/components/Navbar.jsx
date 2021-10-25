import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav class="navbar navbar-light">
				<div className="contacts">
					<img src="/img/phone.svg" width="19px" height="19px" /> 8 (963) 583 01 05
				</div>

				<div className="logo">
					<Link to="/">
						<img src="/img/logo.png" width="90px" height="80px" class="d-inline-block align-top" alt="" />
					</Link>
				</div>

				<div className="basket">
					<Link to="/basket">
						<img src="/img/basket.svg" width="19px" height="19px" class="d-inline-block align-top" alt="" />
					</Link>
				</div>
			</nav>
		);
	}
}
