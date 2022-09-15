import EventManager from '../EventManager';

const callAPI = async (value: string) => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				id: 1,
				name: `Produto 1 ${value}`,
				price: 200
			});
		}, 2000);
	});
};

export const registerEvents = () => {
	EventManager.registerEvent(
		'search.product.change',
		async (payload: { value: string; showProduct: any }) => {
			const products = await callAPI(payload.value);
			payload.showProduct();
			// console.log(products);
		}
	);
};
