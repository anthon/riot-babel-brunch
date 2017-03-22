import {
	REQUEST_NAV,
	RECEIVE_NAV
} from '../actions'

const INITIAL_STATE = {
	loading: false,
	years: [],
	statics: []
}

export default (state=INITIAL_STATE,action)=> {
	switch(action.type) {
		case REQUEST_NAV:
			return {
				...state,
				loading: true
			}
		case RECEIVE_NAV:
			const years = action.payload.data.filter( itm => {
				return itm.nodetype === 'Year'
			})
			const statics = action.payload.data.filter( itm => {
				return itm.nodetype === 'Static'
			})
			return {
				...state,
				loading: false,
				years,
				statics
			}
	}
	return state
}