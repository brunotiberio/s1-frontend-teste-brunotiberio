import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const ResultsContext = createContext({});

export const ResultsProvider = ({ children }) => {
  const [data, setData] = useState();

  async function setResult(formData) {
    await api
      .post("", formData)
      .then((response) => setData(response.data))
      .catch((error) => toast.error("Erro de conexão, tente novamente"));
  }
  return (
    <ResultsContext.Provider value={{ data, setResult }}>
      {children}
    </ResultsContext.Provider>
  );
};
