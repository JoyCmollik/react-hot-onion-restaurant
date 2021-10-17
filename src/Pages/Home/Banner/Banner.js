import React from 'react';
import BtnPrimary from '../../Shared/BtnPrimary';
import './Banner.css';

const Banner = () => {
	return (
		<div className='banner flex flex-col justify-center items-center space-y-8'>
			<h1 className='text-5xl text-center'>
				Best food waiting for your belly.
			</h1>
			<div className='w-5/6 lg:w-1/3 bg-white flex justify-between overflow-hidden rounded-3xl'>
				<input
					className='outline-none text-sm px-4 md:px-8 text-gray-400'
					type='text'
					placeholder='Search food items'
				/>
				<BtnPrimary className='md:px-7 md:py-3'>Search</BtnPrimary>
			</div>
		</div>
	);
};

export default Banner;
