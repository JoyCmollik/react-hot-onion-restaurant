import React from 'react';
import { useParams } from 'react-router';

const FoodDetail = () => {
	const { foodId } = useParams();

	return (
		<div>
			<h4>{foodId} details</h4>
		</div>
	);
};

export default FoodDetail;
