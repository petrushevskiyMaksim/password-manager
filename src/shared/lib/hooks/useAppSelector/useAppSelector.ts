import { RootState } from 'app/providers/StoreProvider/store/store';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
