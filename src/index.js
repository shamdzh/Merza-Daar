import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import FirebaseState from "./store/firebase/FirebaseState";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducer } from "./store/Reducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(Reducer);
console.log(store.getState());

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<FirebaseState>
				<App />
			</FirebaseState>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
