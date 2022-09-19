import React, { FC } from 'react';

const Header: FC = ({ children }) => {
	return (
		<header className='bg-white shadow py-4'>
			{children}
		</header>
	);
};

export default Header;
