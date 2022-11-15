import { createContext, useState } from "react";
import { api } from "../components/services/api";

export const ResultsContext = createContext({});

export const ResultsProvider = ({ children }) => {
  const [data, setData] = useState();

  async function setResult(formData) {
    
      await api
        .post("", formData)
        .then((response) => setData(response.data))   
  
  }
  return (
    <ResultsContext.Provider value={{ data, setResult }}>
      {children}
    </ResultsContext.Provider>
  );
};
