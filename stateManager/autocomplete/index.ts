import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const autocompleteSlice = createSlice({
	name: 'autocomplete',
	initialState: {
		showAutocomplete: false,
		products: [
			{
				name: 'default'
			}
		]
	},
	reducers: {
		showAutocompleteBox(state, action) {
			return {
				...state,
				...action.payload
			};
		}
	},
	extraReducers: {
		[HYDRATE]: (state: any, action: any) => {
			return {
				...state,
				...action.payload.autocomplete
			};
		}
	}
});

export const selectAutocompleteState = (state: any) => state.autocomplete;
export const { showAutocompleteBox } = autocompleteSlice.actions;
export default autocompleteSlice.reducer;
