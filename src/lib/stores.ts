import { writable } from 'svelte/store';

export const mapStore = <T>() => {
	const unsubscribe = () => {};

	const { subscribe, update } = writable<Map<string, T>>(new Map<string, T>());

	const add = (key: string, value: T) => {
		update((state) => {
			state.set(key, value);
			return state;
		});
	};

	const removeById = (id: string) => {
		update((state) => {
			state.delete(id);
			return state;
		});
	};

	const updateValue = (key: string, value: Partial<T>) => {
		update((state) => {
			const current = state.get(key);
			if (current) {
				state.set(key, { ...current, ...value });
			}
			return state;
		});
	};

	return {
		subscribe,
		add,
		updateValue,
		removeById,
		unsubscribe
	};
};
