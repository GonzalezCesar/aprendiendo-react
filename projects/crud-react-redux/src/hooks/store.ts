import type { AppDispatch, RootState } from "../store/Index";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch