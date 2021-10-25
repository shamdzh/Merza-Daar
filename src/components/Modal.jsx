import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { bindActionCreators } from "redux";
import { hideLoader, hideModal, showLoader, showModal } from "../store/Actions";
import { FirebaseContext } from "../store/firebase/FirebaseContext";
import Loader from "./Loader";

class Modal extends Component {
	constructor(props) {
		super(props);
		this.state = { category: "", title: "", desc: "", price: "", img: "" };
	}

	componentDidUpdate() {

	}

	render() {
		const { category, title, desc, price, img } = this.state;
		const { show, hideModal, loading, showLoader, hideLoader } = this.props;

		return (
			<>
				<CSSTransition in={show} timeout={200} classNames="myModal" unmountOnExit>
					<div
						className="myModal"
						onClick={() => {
							hideModal();
						}}
					>
						<div
							className="myModal__content"
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<h4>Новая карточка товара</h4>
							{loading ? (
								<Loader />
							) : (
								<>
									
									<div class="myModal__info">
										<select
											class="form-select"
											aria-label="Default select example"
											onChange={(e) => {
												this.setState({
													category: e.target.value,
												});
											}}
											value={category}
										>
											<option selected>Выберите раздел</option>
											<option value="Баскеты">Баскеты</option>
											<option value="Бургеры">Бургеры</option>
											<option value="Твистеры">Твистеры</option>
											<option value="Сочная курица">Сочная курица</option>
											<option value="Картофель">Картофель</option>
											<option value="Соусы">Соусы</option>
											<option value="Напитки">Напитки</option>
										</select>
										<input
											class="form-control"
											type="text"
											value={title}
											placeholder="Название карточки"
											aria-label="default input example"
											onChange={(e) => {
												this.setState({
													title: e.target.value,
												});
											}}
										/>
										<textarea
											class="form-control"
											value={desc}
											placeholder="Введите описание"
											id="floatingTextarea"
											onChange={(e) => {
												this.setState({
													desc: e.target.value,
												});
											}}
										></textarea>
										<input
											class="form-control"
											type="text"
											value={price}
											placeholder="Укажите цену"
											aria-label="default input example"
											onChange={(e) => {
												this.setState({
													price: e.target.value,
												});
											}}
										/>
										<label for="formFile" class="form-label">
											Загрузить фотографию
										</label>
										<input
											class="form-control"
											type="file"
											id="formFile"
											onChange={(e) => {
												const ref = this.context.setRef(`img/${e.target.files[0].name}`);
												this.context.uploadFile(ref, e.target.files[0], () => {
													const src = this.context.getURL(e.target.files[0].name);

													
													src.then((res) => {
														this.setState({ img: res });
													});
												});
											}}
										/>
										<button
											type="button"
											class="btn btn-primary"
											onClick={() => {
												// Здесь нужно передать action в Reducer
												showLoader()
												const addResult = this.context.addCard(category, title, desc, price, img);
												addResult.then(() => {
													hideLoader();
													hideModal()
													this.setState({
														category: '', title: '', desc: '', price: '', img: ''
													})
													
													setTimeout(() => {
														alert("Карточка была успешно добавлена")
													}, 100);
													
												})
												
											}}
										>
											Добавить карточку
										</button>
									</div>
								</>
							)}
						</div>
					</div>
				</CSSTransition>
			</>
		);
	}
}

Modal.contextType = FirebaseContext;

const mapStateToProps = (state) => {
	return {
		show: state.show,
		loading: state.loading,
		cards: state.cards
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		showModal: bindActionCreators(showModal, dispatch),
		hideModal: bindActionCreators(hideModal, dispatch),
		showLoader: bindActionCreators(showLoader, dispatch),
		hideLoader: bindActionCreators(hideLoader, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
