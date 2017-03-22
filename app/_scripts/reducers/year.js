import {
	REQUEST_YEAR,
	RECEIVE_YEAR
} from '../actions'

const INITIAL_STATE = {
	loading: false,
	node: []
}

export default (state=INITIAL_STATE,action)=> {
	switch(action.type) {
		case REQUEST_YEAR:
			return {
				...state,
				loading: true
			}
		case RECEIVE_YEAR:
			return {
				...state,
				loading: false,
				node: action.payload.data
			}
	}
	return state
}