import React from 'react'

class StaticView extends React.Component {
	constructor(props) {
		super(props)
	}
	renderAttribute(attribute) {
		const { attributetype, id, data } = attribute
		const atypeName = attributetype.name.replace(' ','')
		const className = `attribute ${atypeName}`
		const renderFuncName = this[`render${atypeName}`] ? `render${atypeName}` : `render${attributetype.datatype}`
		return <div key={`attribute-${atypeName}-${id}`} className={className}>
			{ this[renderFuncName](data) }
		</div>
	}
	renderParagraph(data) {
		return <div className="text data"
				dangerouslySetInnerHTML={{__html:data.content}}></div>
	}
	renderImage() {

	}
	render() {
		const { ownAttribute } = this.props.node
		return <div className="static">
			{ ownAttribute.map(this.renderAttribute.bind(this)) }
		</div>
	}
}

export default StaticView