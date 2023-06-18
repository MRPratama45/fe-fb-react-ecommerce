import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

// GlobalContextProvider = pembungkus
// GlobalContext = pengirim perubahan
export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
const initialState = {
  isLogin: true,
};

const reducer = (state, action) => {};
