import throttle from 'lodash/throttle'
import { createStore, applyMiddleware } from 'redux'
import logger from './middleware/logger'
import thunk from './middleware/thunk'
import reducers from './reducers'
import { loadState, saveState } from './localStorage'

const setupStore = (persist=false)=> {
	const storedState = persist ? loadState() : {}
	const storeWithMiddleware = applyMiddleware(thunk,logger)(createStore)(reducers,storedState)
	if(persist) {
		store.subscribe(throttle(()=> {
			saveState(store.getState())
		},1000))
	}
	return storeWithMiddleware
}

export default setupStore