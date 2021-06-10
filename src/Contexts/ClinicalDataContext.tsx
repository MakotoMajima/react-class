import React, { Dispatch, FC, createContext, useContext, useReducer } from "react"

type CLINICAL_DATA_STATE = {
  query: string
  selectedId: string | null
}

type CLINICAL_DATA_ACTION =
  | { type: "SET_QUERY", query: string }
  | { type: "SELECT_STUDY", selectedId: string }

const initialState: CLINICAL_DATA_STATE = {
  query: "",
  selectedId: null
}

const ClinicalDataContext = createContext({ state: initialState, dispatch: (() => { }) as Dispatch<CLINICAL_DATA_ACTION> })

const ClinicalDataReducer = (state: CLINICAL_DATA_STATE, action: CLINICAL_DATA_ACTION): CLINICAL_DATA_STATE => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.query, selectedId: null }
    case "SELECT_STUDY":
      return { ...state, selectedId: action.selectedId }
    default:
      throw Error("Unknown action type.");
  }
}


export const ClinicalDataContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(ClinicalDataReducer, initialState)

  return (
    <ClinicalDataContext.Provider value={{ state, dispatch }}>
      { children}
    </ClinicalDataContext.Provider>
  )
}

export const useClinicalDataContext = () => useContext(ClinicalDataContext)

