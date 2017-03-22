export default function({ dispatch, getState }) {
	return next => {
		if(process.env.NODE_ENV === 'production' || !console.groupCollapsed)
			return next
		return action => {
			console.groupCollapsed(action.type)
			console.log('%c Prev state','color:gray',getState())
			console.log('%c Action','color:blue',action)
			const toReturn = next(action)
			console.log('%c Next state','color:green',getState())
			console.groupEnd(action.type)
			return toReturn
		}
	}
}