import React from 'react';
import { useParams } from 'react-router';
import useFoods from '../../../hooks/useFoods';
import FoodItemCard from './FoodItemCard';

const FoodCategory = () => {
	const { foodCategory } = useParams();
	const { foods } = useFoods();

	const category = foodCategory || 'breakfast';

	const foodList = foods.filter((food) => food.food_category === category);

	return (
		<div className='py-10'>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-4'>
				{foodList.map((food) => (
					<FoodItemCard key={food.id} foodItem={food} />
				))}
			</div>
		</div>
	);
};

export default FoodCategory;
