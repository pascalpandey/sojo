import { useState, useContext, createContext } from "react";

const StoreContext = createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const initialState = {
    Page1: "Welder",
    Page2: "",
    Page3: "",
    Page4: "",
    Page5: "",
    Page6Item1: "",
    Page6Item2: "",
    Page6Item3: "",
    Page6Item4: "",
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
