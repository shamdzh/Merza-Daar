import { SHOW_LOADER, HIDE_LOADER, ADD_CARD, GET_CARDS, HIDE_MODAL, SHOW_MODAL, GET_CURRENT_CARD, SET_TAB, ADD_ORDER, EDIT_ORDER } from "../store/types";

const initialState = {
	loading: true,
	show: false,
	cards: [],
	url: "",
	currentTab: "Баскеты",
	currentCard: "",
	basket: [],
};

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, loading: true };
		case HIDE_LOADER:
			return { ...state, loading: false };
		case ADD_CARD:
			return { ...state, cards: [...state.cards, action.payload] };
		case GET_CARDS:
			return { ...state, cards: action.payload, loading: false };
		case GET_CURRENT_CARD:
			return { ...state, currentCard: action.payload };
		case SHOW_MODAL:
			return { ...state, show: true };
		case HIDE_MODAL:
			return { ...state, show: false };
		case SET_TAB:
			return { ...state, currentTab: action.payload };
		case ADD_ORDER:
			return { ...state, basket: [...state.basket, action.payload] };
		case EDIT_ORDER:
			return { ...state, basket: action.payload };
		default:
			return state;
	}
};
