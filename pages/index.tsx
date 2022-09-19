import type { NextPage } from 'next';
import { useCallback, useMemo } from 'react';

import { useStore, useSelector } from 'react-redux';

import debounce from 'lodash.debounce';

import EventManager from '../events/EventManager';
import { showAutocompleteBox } from '../stateManager/autocomplete';
import ProductCardWithEvent from '../components/ProductCardWithEvent';
import { useRouter } from 'next/router';
import { getHomePage } from '../services/pages/home';
import { renderScreen } from '../dynamicRender';

const Home: NextPage<{ pageJson: any }> = (props) => {
	const state = useSelector((state: any) => state.autocomplete);
	const store = useStore();
	const router = useRouter();

	// const [searchValue, setSearchValue] = useState('')

	const showProduct = useCallback(
		(products: any) => {
			store.dispatch(
				showAutocompleteBox({
					showAutocomplete: true,
					products
				})
			);
		},
		[store]
	);

	const searchChange = useCallback(
		(event) => {
			const { value } = event.target;
			EventManager.emitEvent('search.product.change', {
				value,
				showProduct
			});
		},
		[showProduct]
	);

	const searchKeyPress = useCallback(
		(event) => {
			const { key } = event;
			EventManager.emitEvent('search.product.keypress', { key, router });
		},
		[router]
	);

	const handleChange = useMemo(
		() => debounce(searchChange, 800),
		[searchChange]
	);

	return (
		<div className='bg-slate-200'>
			<div className='mb-8 px-5'>
				<label
					htmlFor='name'
					className='ml-px block pl-4 text-sm font-medium text-gray-700'
				>
					Busca
				</label>
				<div className='mt-1'>
					<input
						type='text'
						name='name'
						id='name'
						className='px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring'
						style={{
							width: 300
						}}
						placeholder='Buscar produtos'
						onChange={handleChange}
					/>
				</div>
			</div>
			{state.showAutocomplete && (
				<div className='flex flex-row bg-white'>
					{state.products.map((product) => (
						<ProductCardWithEvent
							key={product.id}
							name={product.name}
						/>
					))}
				</div>
			)}
			{renderScreen(props.pageJson.attributes)}
		</div>
	);
};

export async function getStaticProps() {
	const homeJson = await getHomePage();

	return {
		props: {
			pageJson: homeJson
		}
	};
}

export default Home;
