import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../components/Navbar";
import { editOrder } from "../store/Actions";

class Basket extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<Navbar />
				<section className="mybasket">
					<div className="title">
						<h1>{this.props.basket.length == 0 ? "В корзине пока ничего нет" : "У вас отличный вкус!"}</h1>
					</div>
					<div className="mybasket__inner">
						{this.props.basket.map((item) => {
							return (
								<div className="mybasket__item">
									<div className="mybasket__item--img">
										<img src={`${item.img}`} alt="" />{" "}
									</div>
									<div className="mybasket__item--title">{item.title}</div>
									<div className="mybasket__item--price">
										{item.price} <span>₽</span>
									</div>
									<button type="button" className="mybasket__item--btn btn" 
									onClick={() => {
										const newBasket = this.props.basket.filter(card => card.id !== item.id)
										this.props.editOrder(newBasket)
									}}>
										Убрать из корзины
									</button>
								</div>
							);
						})}

						<button type="button" className="mybasket__btn btn">
							Оформить заказ
						</button>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		basket: state.basket,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		editOrder: bindActionCreators(editOrder, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
