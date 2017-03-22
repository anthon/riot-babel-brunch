import {
	REQUEST_PAGES,
	RECEIVE_PAGES
} from '../actions'

const INITIAL_STATE = {
	loading: false,
	rows: []
}

export default (state=INITIAL_STATE,action)=> {
	switch(action.type) {
		case REQUEST_PAGES:
			return {
				...state,
				loading: true
			}
		case RECEIVE_PAGES:
			return {
				...state,
				loading: false,
				rows: action.payload.data
			}
	}
	return state
}