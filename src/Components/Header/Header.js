import React, { Component } from 'react';
import TopSection from './TopSection'
import Navigation from './Navigation'

class Header extends Component {
	state = {
		navClasses: ['collapse navbar-collapse'],
		status:false
	}
	navigationHandler() {
		this.state.status === false
			?	this.setState({
				navClasses: ['collapse show navbar-collapse'],
				status:true
			})
			: this.setState({
				navClasses: ['collapse navbar-collapse'],
				status:false
		})
	}
	render(){
		return(
			<header className="fixed-top">
				<TopSection />
				<Navigation
					clicked={this.navigationHandler.bind(this)}
					navClasses={this.state.navClasses}
				/>
			</header>

		)
	}
}

export default Header;