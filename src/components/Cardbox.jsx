import React, { Component } from "react";
import { connect } from "react-redux";
import Add from "../components/Add";
import { FirebaseContext } from "../store/firebase/FirebaseContext";
import Card from "./Card";
import Loader from "./Loader";

class Cardbox extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const cardsList = this.context.getCardsList();

		cardsList.then((res) => {
			console.log(this.props);
		});

		console.log("Component did Mount");
	}

	componentDidUpdate() {
		console.log("Component did update");
	}

	render() {
		const { loading, show, cards, currentTab } = this.props;

		return (
			<div className="cards">
				{loading && !show ? (
					<div class="loader d-flex justify-content-center">
						<Loader />
					</div>
				) : (
					<>
						<Add />
						{cards.filter(card => card.category == `${currentTab}`).map((card, index) => (
							<Card key={index} card={card} />
						))}
					</>
				)}
			</div>
		);
	}
}

Cardbox.contextType = FirebaseContext;

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		show: state.show,
		cards: state.cards,
		currentCard: state.currentCard,
		currentTab: state.currentTab
	};
};

export default connect(mapStateToProps)(Cardbox);
