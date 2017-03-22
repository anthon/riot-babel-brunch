import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Head extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchNav()
	}
	renderYearItem(item) {
		return <li key={`year-${item.id}`}>{ item.title }</li>
	}
	renderNavItem(item) {
		return <li key={`nav-${item.id}`}>{ item.title }</li>
	}
	render() {
		const { statics } = this.props.nav
		const { years } = this.props.nav
		return <div id="head">
			<ul id="years">
				{ years.map(this.renderYearItem.bind(this)) }
			</ul>
			<ul id="nav">
				{ statics.map(this.renderNavItem.bind(this)) }
			</ul>
		</div>
	}
}

function MStP({ nav }) {
	return {
		nav
	}
}

export default connect(MStP,actions)(Head)