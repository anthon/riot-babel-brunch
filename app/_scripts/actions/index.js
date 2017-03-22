import * as api from '../api'

export const REQUEST_NAV = 'request_nav'
export const RECEIVE_NAV = 'receive_nav'
export const fetchNav = (query)=> (dispatch,getState) => {
	dispatch(requestNav())
	return api.fetchNav(query).then( response => {
		dispatch(receiveNav(response))
	}, error => {
		console.error(error)
	})
}
const requestNav = ()=> ({
	type: REQUEST_NAV
})
const receiveNav = data => ({
	type: RECEIVE_NAV,
	payload: data
})

export const REQUEST_YEAR = 'request_year'
export const RECEIVE_YEAR = 'receive_year'
export const fetchYear = (query)=> (dispatch,getState) => {
	dispatch(requestYear())
	return api.fetchYear(query).then( response => {
		dispatch(receiveYear(response))
	}, error => {
		console.error(error)
	})
}
const requestYear = ()=> ({
	type: REQUEST_YEAR
})
const receiveYear = data => ({
	type: RECEIVE_YEAR,
	payload: data
})

export const REQUEST_PAGES = 'request_pages'
export const RECEIVE_PAGES = 'receive_pages'
export const fetchPages = (query)=> (dispatch,getState) => {
	dispatch(requestPages())
	return api.fetchPages(query).then( response => {
		dispatch(receivePages(response))
	}, error => {
		console.error(error)
	})
}
const requestPages = ()=> ({
	type: REQUEST_PAGES
})
const receivePages = data => ({
	type: RECEIVE_PAGES,
	payload: data
})

export const ADD_APP_CLASS = 'add_app_class'
export const addAppClass = (className)=> {
	if(className.constructor !== Array) className = [className]
	return {
		type: ADD_APP_CLASS,
		payload: className
	}
}

export const REMOVE_APP_CLASS = 'remove_app_class'
export const removeAppClass = (className)=> {
	if(className.constructor !== Array) className = [className]
	return {
		type: REMOVE_APP_CLASS,
		payload: className
	}
}