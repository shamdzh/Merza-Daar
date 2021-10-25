import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Basket from "./pages/Basket";
import Main from "./pages/Main";

class App extends React.Component {
	render() {
		return (
				<Switch>
					<Route exact path='/' component={Main}/>
					<Route exact path='/basket' component={Basket}/>
				</Switch>
		);
	}
}

export default App;
