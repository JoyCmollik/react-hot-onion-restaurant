import React from 'react';
import { NavLink } from 'react-router-dom';

const FoodLink = ({ to, children, addClass }) => {
	return (
		<NavLink
			activeClassName='text-primary border-primary'
			className={`border-b-2 border-white transition duration-200 ${addClass}`}
			to={to}
		>
			{children}
		</NavLink>
	);
};

export default FoodLink;
