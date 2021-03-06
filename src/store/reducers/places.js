import {
	SET_PLACES, REMOVE_PLACE
} from "../actions/actionTypes";

const initialState = {
	places: [],
	selectedPlace: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PLACES:
			return {
				...state,
				places: action.payload
			}
		case REMOVE_PLACE:
			return Object.assign({}, state, {
				places: state.places.filter(place => {
					return place.key !== action.payload
				})
			});
		default:
			return state;
	}
};

export default reducer;
