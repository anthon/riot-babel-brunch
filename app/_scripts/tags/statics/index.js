import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import StaticView from './static'

class StaticsView extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.props.fetchPages()
	}
	renderStatic(node) {
		return <StaticView key={node.id} node={node}></StaticView>
	}
	render() {
		const { rows } = this.props.statics
		return <div>
			{ rows.map(this.renderStatic.bind(this)) }
		</div>
	}
}

function MStP({ statics }) {
	return {
		statics
	}
}

export default connect(MStP,actions)(StaticsView)