import React, { createContext, useContext, useReducer } from "react";
// prepare th dataLayer

export const StateContext = createContext();
// wrap our app and provide the data layer.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
 // Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);
