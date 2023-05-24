import { useState, useContext, createContext } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const initialState = {
    Page1: "Welder",
    Page2: "",
  };

  const [state, setState] = useState(initialState);

  const dispatch = (action) => {
    setState({
      ...state,
      [action.page]: action.data,
    });
  };

  const store = {
    state,
    dispatch,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
