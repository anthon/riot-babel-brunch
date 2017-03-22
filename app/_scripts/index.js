window.MOBILE = window.innerWidth <= 1024
require('./prototypes')
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import setupStore from './store'
import routes from './routes'

const store = setupStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>
,document.getElementById('app'))

if(window.ga)
	history.listen( location => {
		window.ga('set','page',location.pathname+location.search+location.hash)
		window.ga('send','pageView')
	})

// Inits - helpful

// window.domain = "http://" + document.domain

// document.querySelector('#body').addEventListener('click',(e)=> {
// 	const path = [e.target]
// 	let i = 0
// 	let p = null
// 	while((p = path[i++].parentNode) !== null)
// 		path.push(p)
// 	const a = path.find( el => {
// 		return el.nodeName === 'A'
// 	})
// 	if(a && !a.getAttribute('target')) {
// 	    const href = a.getAttribute('href')
// 	    if((href.indexOf('http') > -1 && href.indexOf(domain) === -1 && href.indexOf('mailto:') === -1) || href.indexOf('.pdf') !== -1 || href.indexOf('mailto:') !== -1) {
// 			a.setAttribute('target', '_blank')
// 	    }
// 	}
// })