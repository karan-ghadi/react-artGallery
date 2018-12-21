import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Aux from '../Hoc/Aux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = (props) => (
	<Aux>
		<Header />
			<main className="custom-container">
				<BrowserRouter>
					{props.children}
				</BrowserRouter>
			</main>
		<Footer />
	</Aux>
)

export default Layout;
