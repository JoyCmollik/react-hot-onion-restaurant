import Header from './Pages/Shared/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<div className='pt-16'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/home'>
							<Home />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
