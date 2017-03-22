import { renderComponent, expect } from '../test_helper'
import App from '../../app/components/app'

// Use 'describe' to group together similar tests
describe('App', ()=> {
	let component
	beforeEach(()=> {
		component = renderComponent(App)
	})

	// Use 'it' to test a single attribute of a target
	it('is mounted', ()=> {
		
		// Use 'expect' to make an assertion about a target
		expect(component.find('.app')).to.exist

	})
})