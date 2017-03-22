import {
	ADD_APP_CLASS,
	REMOVE_APP_CLASS
} from '../actions'

const INITIAL_STATE = {
	routeClass: [],
	queryClasses: [],
	appClasses: []
}

export default (state=INITIAL_STATE,action)=> {
	let _routeClass = []
	let _queryClasses = []
	let _appClasses = []
	let classList = []
	switch(action.type) {
		case ADD_APP_CLASS:
			_appClasses = [...state.appClasses]
			classList = action.payload
			classList.map( cls => {
				const index = _appClasses.indexOf(cls)
				if(index == -1) {
					_appClasses.push(cls)
				}
			})
			if(!state.appClasses.equals(_appClasses)) {
				return {
					...state,
					appClasses: _appClasses
				}
			}
			break
		case REMOVE_APP_CLASS:
			_appClasses = [...state.appClasses]
			classList = action.payload
			classList.map( cls => {
				const index = _appClasses.indexOf(cls)
				if(index != -1) {
					_appClasses = _appClasses.slice(0,index).concat(_appClasses.slice(index+1))
				}
			})
			if(_appClasses != state.appClasses) {
				return {
					...state,
					appClasses: _appClasses
				}
			}
			break
	}
	return state
}

export const getClassList = (state)=> (
	[...state.routeClass,
		...state.queryClasses,
		...state.appClasses].join(' ')
)