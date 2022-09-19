import React, { FC } from 'react';

const Body: FC = ({ children }) => {
	return (
		<main className='container w-screen h-screen mx-auto'>
			{children}
		</main>
	);
};

export default Body;
