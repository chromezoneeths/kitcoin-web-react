import React from 'react';
import Header from './Header.jsx';

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {data: []};
	}

	// Async componentDidMount() {
	// 	const kc = window.kc;
	// 	if (window.kc.loggedIn) {
	// 		window.kc.send(JSON.stringify({action: 'getBalance'}));
	// 		this.state.balance = (await window.action('balance')).balance;
	// 	}
	// }

	render() {
		return (
			<div className="App">
				<Header /><br/>
				{this.state.balance}
			</div>
		);
	}
}
