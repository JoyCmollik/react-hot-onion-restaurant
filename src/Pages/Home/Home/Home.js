import React from 'react';
import Banner from '../Banner/Banner';
import FoodGallery from './FoodGallery';

const Home = () => {
	return (
		<div className='min-h-screen space-y-20'>
			<Banner />
			<FoodGallery />
		</div>
	);
};

export default Home;
