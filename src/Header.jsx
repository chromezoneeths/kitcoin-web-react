import React from 'react';
import K from './static/kitcoin-k.svg';
import Ring from './static/kitcoin-ring.svg';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './index.css';
const pages = require('./static/data/pages.json');

function Pages(props) {
	const {kind, current} = props;
	for (const page of pages.pages) {
		if (page[kind]) {
			if (page.name === current) {
				return (
					<Nav.Link href={page.path}>
						{page.name} <span className="sr-only">(current)</span>
					</Nav.Link>
				);
			}

			return <Nav.Link href={page.path}>{page.name}</Nav.Link>;
		}
	}
}

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {data: []};
	}

	render(props) {
		return (
			<Navbar bg="dark" expand="lg" className="blue">
				<Navbar.Brand href="#top">
					<img src={K} className="abs" alt="Kitcoin logo" />
					<img src={Ring} id="loading-ring" alt="Kitcoin logo" />
          &nbsp;&nbsp;&nbsp;KitCoin
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
				>
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse class="collapse navbar-collapse" id="navbarNav">
					<Nav bg="dark" expand="lg">
						<Pages kind="student" current="Wallet" />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

// https://reactjs.org/docs/conditional-rendering.html
