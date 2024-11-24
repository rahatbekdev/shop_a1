import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store/store";

// Типизированный хук для `dispatch`
export const useAppDispatch: () => AppDispatch = useDispatch;

// Типизированный хук для `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
