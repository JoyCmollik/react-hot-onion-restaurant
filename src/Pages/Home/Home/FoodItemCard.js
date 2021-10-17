import React from 'react';
import { Link } from 'react-router-dom';

const FoodItemCard = (props) => {
	const { id, food_img, food_title, food_price, food_intro } = props.foodItem;
	const priceString = food_price + '';

	return (
		<Link to={`/fooditem/${id}`}>
			<article
				className='p-4 space-y-4 flex flex-col justify-between text-center rounded-lg cursor-pointer hover:shadow-2xl transition duration-200 h-full'
				style={{ width: '340px' }}
			>
				<img
					className='object-contain h-52 mx-auto'
					src={food_img}
					alt='food thumbnail'
				/>
				<div className='space-y-1'>
					<h4 className='text-lg font-medium capitalize'>
						{food_title}
					</h4>
					<p className='text-gray-500 text-sm font-normal'>
						{food_intro}
					</p>
				</div>
				<p className='text-xl font-medium'>
					<span className='text-2xl'>
						${priceString.split('.', 1)}
					</span>
					{priceString.slice(
						priceString.indexOf('.'),
						priceString.length
					)}
				</p>
			</article>
		</Link>
	);
};

export default FoodItemCard;
