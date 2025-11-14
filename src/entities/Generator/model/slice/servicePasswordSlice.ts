import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Generator } from '../types/Generator';

const initialState: Generator = {
    id: '',
    service: '',
    password: '',
};

export const generatorSlice = createSlice({
    name: 'servicePassword',
    initialState,
    reducers: {
        addPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
});

export const { actions: generatorActions } = generatorSlice;
export const { reducer: generatorReducer } = generatorSlice;
