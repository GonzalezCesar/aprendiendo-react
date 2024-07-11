import { useReducer } from "react";
import { Action, FromLanguage, Language, type State } from "../types";
import { AUTO_LANGUAGE } from "../constanst";

// 1. Create a initialState
const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

// 2. Create a reducer
function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    // lógica del estado dentro del reducer
    // porque lo evitamos en los componentes
    if (state.fromLanguage === AUTO_LANGUAGE) return state

    const loading = state.fromText !== ''  

    return {
      ...state,
      loading,
      result: '',
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    if (state.fromLanguage === action.payload) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      fromLanguage: action.payload,
      result: "",
      loading
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    if (state.toLanguage === action.payload) return state

    const loading = state.fromText !== ''

    return {
      ...state,
      toLanguage: action.payload,
      result: "",
      loading
    };
  }

  if (type === "SET_FROM_TEXT") {
    const loading = action.payload !== ''
    return {
      ...state,
      loading,
      fromText: action.payload,
      result: ""
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
}
// 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
// sk-proj-Rl0v2Jh0sO0tbMn76SaBT3BlbkFJyNL0OhKOD1H3cxd4hgT0
export function useStore() {
  // 3. Use the reducer
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: "INTERCHANGE_LANGUAGES" });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: "SET_FROM_LANGUAGE", payload });

  }
  const setToLanguage = (payload: Language) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload });
  }

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  }

  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  };
}