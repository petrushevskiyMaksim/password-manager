import { AppDispatch } from "app/providers/StoreProvider/store/store";
import { useDispatch } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
