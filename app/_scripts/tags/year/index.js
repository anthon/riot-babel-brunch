import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'

class YearView extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchYear(location.pathname)
	}
	render() {
		const { title } = this.props.year.node
		return <div>{ title }</div>
	}
}

function MStP({ year }) {
	return {
		year
	}
}

export default connect(MStP,actions)(YearView)