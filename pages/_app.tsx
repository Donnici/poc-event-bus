import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';

import EventManager from '../events/EventManager';
import { wrapper } from '../stateManager';

function MyApp({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);

	useEffect(() => {
		EventManager.bootstrap();

		return () => {
			EventManager.destroy();
		};
	}, []);
	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	);
}

export default MyApp;
