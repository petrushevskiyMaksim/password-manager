import { RootState } from 'app/providers/StoreProvider/store/store';

export const getGeneratorPassword = (state: RootState) =>
    state.generator.password || '';
