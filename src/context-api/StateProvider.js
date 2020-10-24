import React, { createContext, useContext, useReducer } from 'react'

// Preparing the DataLayer
export const StateContext = createContext()

// Wrap our App/setting everything up and it provides the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// Can pull information from this layer by calling this
export const useStateValue = () => useContext(StateContext)
