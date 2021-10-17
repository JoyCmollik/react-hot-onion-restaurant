import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
	return (
		<footer className='bg-black py-5 lg:py-10 text-gray-100'>
			<div className='container mx-auto'>
				<div className='grid md:grid-cols-2 gap-4'>
					<img className='h-8' src={logo} alt='brand' />
					<div className='grid md:text-base grid-cols-2'>
						<div className='space-y-2 flex flex-col text-sm'>
							<NavLink to='/'>About Online Food</NavLink>
							<NavLink to='/'>Read our blog</NavLink>
							<NavLink to='/'>Sign up to deliver</NavLink>
							<NavLink to='/'>Add your restaurant</NavLink>
						</div>
						<div className='space-y-2 flex flex-col text-sm'>
							<NavLink to='/'>Get help</NavLink>
							<NavLink to='/'>Read FAQs</NavLink>
							<NavLink to='/'>View all cities</NavLink>
							<NavLink to='/'>Restaurants near me</NavLink>
						</div>
					</div>
				</div>
				<div className='text-center md:flex justify-between my-10'>
					<p className='text-gray-400 text-xs'>
						Copyright &copy; 2021 Online food
					</p>
					<div className='space-x-4 space-y-4 text-sm'>
						<NavLink to='/'>Privacy Policy</NavLink>
						<NavLink to='/'>Terms of use</NavLink>
						<NavLink to='/'>Pricing</NavLink>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
