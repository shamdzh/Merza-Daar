import React, { Component } from "react";
import $ from "jquery";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideLoader, setTab, showLoader } from "../store/Actions";

class Menu extends Component {

	constructor(props) {
		super(props)

	}

	handleClick(onShow, onHide, setTab) {
		$(".nav .nav-item .nav-link").click(function (e) {
			e.preventDefault()
			$(".nav .nav-item .nav-link").removeClass("active");
			$(this).addClass("active");
			onShow()

			const tab = $(this).html()

			setTab(tab)
			setTimeout(() => {
				onHide()
			}, 1000)
		});
	}

	componentDidMount() {
		console.log("Component Did Mount");
		this.handleClick(this.props.showLoader, this.props.hideLoader, this.props.setTab);
	}
	

	componentDidUpdate() {
		console.log(this.props)
	}

	render() {
		return (
			<>
				<section className="menu">
					<div className="title">
						<h1>Меню</h1>
					</div>

					<ul class="nav">
					<li class="nav-item">
							<a class="nav-link active" href="#">
								Баскеты
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Бургеры
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Твистеры
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Сочная курица
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Картофель и Снэки
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Соусы
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">
								Напитки
							</a>
						</li>
					</ul>
				</section>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		currentTab: state.currentTab
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		showLoader: bindActionCreators(showLoader, dispatch),
		hideLoader: bindActionCreators(hideLoader, dispatch),
		setTab: bindActionCreators(setTab, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
