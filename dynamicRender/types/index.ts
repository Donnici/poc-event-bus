export interface IResponsePage {
	id: number;
	attributes: PageCopnfig;
}

export interface PageCopnfig {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	nome: string;
	body: IBody;
	header: IHeader;
	footer: IFooter;
}

export interface IBody {
	id: number;
	estrutura: ListaProdutosCategoriaElement[];
	bannerTelaCheia: null;
	carouselBanner: any[];
	listaProdutosCategoria: ListaProdutosCategoriaElement[];
}

export interface ListaProdutosCategoriaElement {
	id: number;
	compontent?: string;
	identificadorConteudo: string;
	nome: string;
	idCategoria?: string;
}

export interface IFooter {
	id: number;
	politicaPrivacidade: string;
	logo: null;
	redesSociais: RedesSociai[];
	estrutura: FooterEstrutura[];
	listaLinks: ListaLink[];
}

export interface FooterEstrutura {
	id: number;
	component: string;
	identificadorConteudo: null | string;
}

export interface ListaLink {
	id: number;
	Texto: string;
	Url: string;
	identificadorConteudo: string;
}

export interface RedesSociai {
	id: number;
	Url: string;
	Tipo: string;
}

export interface IHeader {
	id: number;
	estrutura: HeaderEstrutura[];
	logo: Logo;
}

export interface HeaderEstrutura {
	id: number;
	component: string;
	identificadorConteudo?: string;
}

export interface Logo {
	id: number;
}
