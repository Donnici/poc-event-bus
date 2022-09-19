import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import CarouselProductsByCategory from '../components/CarouselProductsByCategory';
import { IBody, IFooter, IHeader, PageCopnfig } from './types';

const renderComponent = (structure: any, content: any): ReactNode => {
	switch (structure.compontent) {
		case 'carouse-products-by-category':
			return React.createElement(
				CarouselProductsByCategory,
				{ content },
				'Olá mundo'
			);
		default:
			return null;
	}
};

const getComponentData = (id: string, obj: any) => {
	const content = [];
	for (const key in obj) {
		if (key !== 'estrutura' && obj[key] !== null) {
			if (Array.isArray(obj[key]) && obj[key].length > 0) {
				const items = obj[key].filter(
					(item) => item?.identificadorConteudo === id
				);
				content.push(...items);
			}
		}
	}
	return content;
};

const renderContent = (content: IBody | IHeader | IFooter): ReactNode => {
	const carouselCategory = content.estrutura[1];
	let componentData = null;
	if (
		carouselCategory?.identificadorConteudo !== null &&
		carouselCategory?.identificadorConteudo !== ''
	) {
		componentData = getComponentData(
			carouselCategory.identificadorConteudo as string,
			content
		);
	}
	return renderComponent(carouselCategory, componentData);
};

export const renderBaseStructure = (
	componentName: string,
	content: any
): ReactNode => {
	switch (componentName) {
		case 'header':
			return React.createElement(Header, {}, renderContent(content));
		case 'body':
			return React.createElement(Body, {}, renderContent(content));
		default:
			return null;
	}
};

export const renderScreen = (data: PageCopnfig) => {
	const PagePieces = ['header', 'body', 'footer'].map((item) =>
		renderBaseStructure(item, data[item])
	);

	return PagePieces;
};
