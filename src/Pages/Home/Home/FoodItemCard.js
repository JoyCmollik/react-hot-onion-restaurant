import React from 'react';

const FoodItemCard = (props) => {
	const { food_img, food_title, food_price, food_intro } = props.foodItem;

	return (
		<article className='space-y-4 text-center'>
			<img
				className='object-contain h-52 mx-auto'
				src={food_img}
				alt='food thumbnail'
			/>
			<div className='space-y-1'>
				<h4 className='text-lg font-medium capitalize'>{food_title}</h4>
				<p className='text-gray-500 font-normal'>{food_intro}</p>
			</div>
			<p className='text-xl font-medium'>
				<span className='text-primary text-2xl'>$</span>
				{food_price}
			</p>
		</article>
	);
};

export default FoodItemCard;
