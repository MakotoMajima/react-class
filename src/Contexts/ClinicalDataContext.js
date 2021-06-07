import { createContext, useContext, useReducer } from "react"


const initialState = {
  query: "",
  selectedId: null
}

const ClinicalDataContext = createContext(initialState)

const ClinicalDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.query }
    case "SELECT_STUDY":
      return { ...state, selectedId: action.selectedId }
    default:
      break;
  }
}


export const ClinicalDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ClinicalDataReducer, initialState)

  return (
    <ClinicalDataContext.Provider value={{ state, dispatch }}>
      {children}
    </ClinicalDataContext.Provider>
  )
}

export const useClinicalDataContext = () => useContext(ClinicalDataContext)

