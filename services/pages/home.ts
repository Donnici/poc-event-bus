import axios from 'axios';

export const getHomePage = async () => {
	const { data } = await axios.get(
		'http://localhost:1337/api/paginas/1?populate[body][populate]=*&populate[header][populate]=*&populate[footer][populate]=*'
	);

    console.log(JSON.stringify(data, null, 2));

    return data.data;
};
