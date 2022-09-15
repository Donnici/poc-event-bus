import EventEmitter from 'events';

import { registerAll } from './EventMapper';
import { IEventEmitter, TEventName } from './events.d';

class EventManager implements IEventEmitter {
	private eventEmmiter: EventEmitter;

	constructor() {
		this.eventEmmiter = new EventEmitter();
	}

	public registerEvent(
		event: TEventName,
		callback: (...args: any[]) => void
	): void {
		this.eventEmmiter.on(event, callback);
	}

	public emitEvent(
		event: TEventName,
		payload: Record<string, unknown>
	): void {
		this.eventEmmiter.emit(event, payload);
	}

    public bootstrap() {
        registerAll()
    }

	public destroy() {
		this.eventEmmiter.removeAllListeners()
	}
}

export default new EventManager();
