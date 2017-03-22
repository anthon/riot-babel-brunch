import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AppReducer from './app'
import DataReducer from './data'
import StaticsReducer from './statics'
import NavReducer from './nav'
import YearReducer from './year'

const RootReducer = combineReducers({
	routing: routerReducer,
	app: AppReducer,
	data: DataReducer,
	statics: StaticsReducer,
	nav: NavReducer,
	year: YearReducer
})

export default RootReducer