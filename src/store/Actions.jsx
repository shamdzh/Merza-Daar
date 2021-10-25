import { ADD_CARD, ADD_ORDER, ADD_PRODUCT, EDITE_ORDER, EDIT_ORDER, GET_CARDS, GET_CURRENT_CARD, HIDE_LOADER, HIDE_MODAL, REMOVE_ORDER, SET_TAB, SHOW_LOADER, SHOW_MODAL } from "./types";

export const showModal = (value) => {
	return {
		type: SHOW_MODAL,
		payload: value,
	};
};

export const hideModal = (value) => {
	return {
		type: HIDE_MODAL,
		payload: value,
	};
};

export const showLoader = (value) => {
	return {
		type: SHOW_LOADER,
		payload: value,
	};
};


export const hideLoader = (value) => {
	return {
		type: HIDE_LOADER,
		payload: value,
	};
};



export const addCard = (value) => {
	return {
		type: ADD_CARD,
		payload: value,
	};
};

export const getCards = (value) => {
	return {
		type: GET_CARDS,
		payload: value,
	};
};

export const getCurrentCard = (value) => {
	return {
		type: GET_CURRENT_CARD,
		payload: value,
	};
};

export const setTab = (value) => {
	return {
		type: SET_TAB,
		payload: value,
	};
};

export const addOrder = (value) => {
	return {
		type: ADD_ORDER,
		payload: value,
	};
};


export const editOrder = (value) => {
	return {
		type: EDIT_ORDER,
		payload: value,
	};
};

