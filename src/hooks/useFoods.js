import { useEffect, useState } from 'react';

const useFoods = () => {
	const [foods, setFoods] = useState([]);

	useEffect(() => {
		fetch('/food_db.json')
			.then((response) => response.json())
			.then((data) => {
				setFoods(data);
			});
	}, []);

	return {
		foods,
	};
};

export default useFoods;
