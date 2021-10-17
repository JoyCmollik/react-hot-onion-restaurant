import Header from './Pages/Shared/Header';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer';
import FoodDetail from './Pages/FoodDetail/FoodDetail';

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<div className='pt-16'>
					<Switch>
						<Redirect exact from='/' to='/home' />
						<Route path='/home'>
							<Home />
						</Route>
						<Route path='/fooditem/:foodId'>
							<FoodDetail />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
