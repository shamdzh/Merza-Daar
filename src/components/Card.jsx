import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addOrder } from "../store/Actions";
import { FirebaseContext } from "../store/firebase/FirebaseContext";

class Card extends Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		console.log(this.props.basket)
	}

	render() {
		return (
			<div
				className="mycard"
				onClick={(e) => {
					this.context.getCurrentCard(this.props.card);
				}}
			>
				<div className="mycard__img">
					<img src={`${this.props.card.img}`} alt="" />
					<div
						className="mycard__counter"
						onClick={(e) => {
							
							// Добавление товара в корзину
							this.props.addOrder(this.props.card);
						}}
					>
						<img src="/img/plus-solid.svg" width="11px" height="11x" />
					</div>
				</div>
				<div className="mycard__title">{this.props.card.title}</div>
			</div>
		);
	}
}

Card.contextType = FirebaseContext;



const mapStateToProps = (state) => {
	return {
		currentCard: state.currentCard,
		basket: state.basket
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addOrder: bindActionCreators(addOrder, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
