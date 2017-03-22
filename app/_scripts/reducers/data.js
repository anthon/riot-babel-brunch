import {
	REQUEST_DATA,
	RECEIVE_DATA
} from '../actions'

const INITIAL_STATE = {
	loading: false,
	rows: []
}

export default (state=INITIAL_STATE,action)=> {
	switch(action.type) {
		case REQUEST_DATA:
			return {
				...state,
				loading: true
			}
		case RECEIVE_DATA:
			return {
				...state,
				loading: false,
				rows: action.payload.data
			}
	}
	return state
}