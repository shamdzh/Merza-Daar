// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCard, getCards, getCurrentCard, hideLoader, showLoader } from "../Actions";
import { ADD_CARD } from "../types";
import { FirebaseContext } from "./FirebaseContext";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDg0D1YquwnOA-gytr4shpkF-bnVCN7cfo",
	authDomain: "myapp-5dd01.firebaseapp.com",
	databaseURL: "https://myapp-5dd01-default-rtdb.firebaseio.com",
	projectId: "myapp-5dd01",
	storageBucket: "myapp-5dd01.appspot.com",
	messagingSenderId: "839434374887",
	appId: "1:839434374887:web:348468ac0358fa86719c42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

class FirebaseState extends Component {
	constructor(props) {
		super(props);
		this.url = "https://myapp-5dd01-default-rtdb.firebaseio.com";

		// this.getURL = this.getURL.bind(this);
	}

	// Функция добавления карточки

	addCard = async (category, title, desc, price, img) => {
		const card = {
			category,
			title,
			desc,
			price,
			img,
		};

		console.log("Пытаюсь отправить запрос на сервер...");

		const newCard = await axios.post(`${this.url}/cards.json`, card)
			.then((res) => {
				const payload = { ...card, id: res.data.name };

				this.props.addCard(payload);
				console.log(res);
			})
			.catch((e) => {
				throw new Error(e.message);
			});

		return newCard;
	};

	// Функция получения списка карточек

	getCardsList = async () => {
		console.log("Произошел вызов getCardsList()")
			const cardsList = await axios.get(`${this.url}/cards.json`).then((res) => {
				
				if (res.data == null) {
					
					this.props.hideLoader()
					return;
				}
				
				console.log(res);

				const payload = Object.keys(res.data).map((key) => {
					return {
						...res.data[key],
						id: key,
					};
				});

				this.props.getCards(payload);
			})
			.catch((e) => {
				console.log(e)
			});

			return cardsList;
		};

	getCurrentCard = (card) => {
			const payload = {
			  ...card,
			};	

			
			this.props.getCard(payload)
		}

	setRef(name) {
		return ref(storage, name);
	}

	uploadFile(storageRef, file, getURL) {
		uploadBytes(storageRef, file).then((snapshot) => {
			console.log("Uploaded a blob or file!");
			getURL();
		});
	}

	async getURL(name) {
		const src = getDownloadURL(ref(storage, `img/${name}`))
			.then((myurl) => {
				return myurl;
			})
			.catch((error) => {
				// Handle any errors
				console.log("Загрузка не удалась!");
			});

		return src;
	}

	render() {
		return (
			<FirebaseContext.Provider
				value={{
					uploadFile: this.uploadFile,
					printMessage: this.printMessage,
					setRef: this.setRef,
					getURL: this.getURL,
					addCard: this.addCard,
					getCurrentCard: this.getCurrentCard,
					getCardsList: this.getCardsList,
					FirebaseState: this.props,
				}}
			>
				{this.props.children}
			</FirebaseContext.Provider>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cards: state.cards,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addCard: bindActionCreators(addCard, dispatch),
		getCards: bindActionCreators(getCards, dispatch),
		getCard: bindActionCreators(getCurrentCard, dispatch),
		hideLoader: bindActionCreators(hideLoader, dispatch),
		showLoader: bindActionCreators(showLoader, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FirebaseState);
