import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch,
	NavLink,
} from 'react-router-dom';
import FoodCategory from './FoodCategory';

const FoodGallery = () => {
	let { url, path } = useRouteMatch();
	console.log(url, path);
	const foodUrl = url !== '/' ? `${url}/` : '/';

	return (
		<div className='container mx-auto'>
			<Router>
				<div className='flex justify-center space-x-8'>
					<NavLink
						activeClassName='text-primary border-b-2 border-primary'
						className='border-b-2 border-white transition duration-200'
						to={foodUrl + 'breakfast'}
					>
						Breakfast
					</NavLink>
					<NavLink
						activeClassName='text-primary border-b-2 border-primary'
						className='border-b-2 border-white transition duration-200'
						to={foodUrl + 'lunch'}
					>
						Lunch
					</NavLink>
					<NavLink
						activeClassName='text-primary border-b-2 border-primary'
						className='border-b-2 border-white transition duration-200'
						to={foodUrl + 'dinner'}
					>
						Dinner
					</NavLink>
				</div>
				<Switch>
					<Route exact path={path}>
						<FoodCategory />
					</Route>
					<Route exact path='/:foodCategory'>
						<FoodCategory />
					</Route>
					<Route path={`${path}/:foodCategory`}>
						<FoodCategory />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default FoodGallery;
