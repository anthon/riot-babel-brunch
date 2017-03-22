import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import Head from './components/head'
import YearView from './components/year'
import StaticsView from './components/statics'

export default (
	<Route path="/:year" component={App}>
		<IndexRoute name="index" components={{
			head:Head,
			torso:YearView,
			legs:StaticsView
		}}/>
	</Route>
)