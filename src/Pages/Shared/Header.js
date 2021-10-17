import React from 'react';
import logo from '../../images/logo2.png';
import cartIcon from '../../images/cart-icon.svg';
import { Link } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';

const Header = () => {
	return (
		<div className='fixed top-0 left-0 w-full bg-white z-100'>
			<header className='container mx-auto py-4 flex justify-between items-center'>
				<Link to='/'>
					<img className='h-8' src={logo} alt='brand' />
				</Link>
				<div className='flex space-x-5 lg:space-x-10 items-center'>
					<img className='w-8' src={cartIcon} alt='cart' />
					<Link to='/login'>Login</Link>
					<Link to='/register'>
						<BtnPrimary>Sign up</BtnPrimary>
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Header;
