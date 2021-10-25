import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cardbox from "../components/Cardbox";
import Menu from "../components/Menu";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import { hideModal, showModal } from "../store/Actions";
import { FirebaseContext } from "../store/firebase/FirebaseContext";

class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate() {
		console.log(this.props.show);
	}

	render() {
		return (
			<>
				<Modal />

				<div className="container">
					<Navbar />
					<Wrapper />
					<Menu />
					<Cardbox />
				</div>
			</>
		);
	}
}

Main.contextType = FirebaseContext;

const mapStateToProps = (state) => {
	return {
		show: state.show,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		showModal: bindActionCreators(showModal, dispatch),
		hideModal: bindActionCreators(hideModal, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
