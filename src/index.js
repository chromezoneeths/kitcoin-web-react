import React from 'react';
import ReactDOM from 'react-dom';
import Socket from 'simple-websocket';
import 'bootswatch/dist/flatly/_bootswatch.scss';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
let kc;

const path =
  localStorage.getItem('overrideURL') ||
  `${window.location.protocol === 'https:' ? 'wss://' : 'ws://'}${
  	window.location.host
  }/oauth`; // Oauth is the only path guaranteed to be forwarded to kitcoin.

// (async () => {
// 	kc = window.kc = new Socket(path);
// 	try {
// 		if (localStorage.secret) {
// 			kc.send(JSON.stringify({action: 'secret', secret: localStorage.secret}));
// 			const response = await action('secret');
// 			if (!response.status) {
// 				localStorage.removeItem('secret');
// 				throw new Error('Bad secret');
// 			}
// 		} else {
// 			throw new Error('No secret');
// 		}
// 	} catch (error) {
// 		kc.send(JSON.stringify({action: 'google'}));
// 		await action('login');
// 	}

// 	const ready = await action('ready');
// 	kc.loggedIn = true;
// })();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Async function action(name) {
// 	// Helper function for known responses
// 	return new Promise(resolve => {
// 		kc.once('data', h);
// 		function h(data) {
// 			const response = JSON.parse(data);
// 			if (response.action === name) {
// 				resolve(response);
// 			} else {
// 				kc.once('data', h);
// 			}
// 		}
// 	});
// }

// window.action = action;

