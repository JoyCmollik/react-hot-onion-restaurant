import gapProperties from 'postcss-gap-properties';
import React from 'react';

const BtnPrimary = ({ children, className, ...rest }) => {
	return (
		<button
			{...rest}
			className={
				'bg-primary text-sm px-5 py-2 text-white rounded-3xl transform hover:scale-90 transition duration-200 ' +
				className
			}
		>
			{children}
		</button>
	);
};

export default BtnPrimary;
