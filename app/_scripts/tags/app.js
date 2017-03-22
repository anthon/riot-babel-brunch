import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="app">
				{this.props.head}
				{this.props.torso}
				{this.props.legs}
			</div>
		)
	}
}

export default App