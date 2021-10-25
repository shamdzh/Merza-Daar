import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal } from "../store/Actions";

class Add extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className="add"
				onClick={() => {
					this.props.showModal();
				}}
			>
				<div className="add_btn">
					<img src="/img/add.png" alt="" />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		show: state.show,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		showModal: bindActionCreators(showModal, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
