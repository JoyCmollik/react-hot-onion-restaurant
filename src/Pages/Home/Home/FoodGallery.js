import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import FoodCategory from './FoodCategory';
import FoodLink from './FoodLink';

const FoodGallery = () => {
	const { pathname } = useLocation();

	return (
		<div className='container mx-auto'>
			<div className='flex justify-center space-x-8'>
				<FoodLink
					addClass={
						pathname === '/home'
							? 'text-primary border-b-2 border-primary'
							: ''
					}
					to='/home/breakfast'
				>
					Breakfast
				</FoodLink>
				<FoodLink to='/home/lunch'>Lunch</FoodLink>
				<FoodLink to='/home/dinner'>Dinner</FoodLink>
			</div>

			<Route exact path='/home'>
				<FoodCategory />
			</Route>
			<Route path={'/home/:foodCategory'}>
				<FoodCategory />
			</Route>
		</div>
	);
};

export default FoodGallery;
