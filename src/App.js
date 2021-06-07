import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { ClinicalDataContextProvider } from "src/Contexts/ClinicalDataContext"

import { ClinicalDataPage } from "src/Pages/ClinicalDataPage"

function App() {

  return (
    <div className="App">
      <ClinicalDataContextProvider>
        <ClinicalDataPage />
      </ClinicalDataContextProvider>
    </div>
  );
}

export default App;
