export type TEventName = 'search.product.change' | 'search.product.keypress' | 'addToCart.click';

export interface IEventEmitter {
	registerEvent: (
		event: TEventName,
		callback: (...args: any[]) => void
	) => void;
	emitEvent: (event: TEventName, payload: Record<string, unknown>) => void;
}

export interface IEventMapper {}
