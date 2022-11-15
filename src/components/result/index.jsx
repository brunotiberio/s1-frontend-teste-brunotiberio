import { useContext } from "react";
import { ResultsContext } from "../../contexts/ResultsContext";

export const Result = () => {
  const { data } = useContext(ResultsContext);

  return (
    <>
      <h2>VOCÊ RECEBERÁ:</h2>
      <ul>
        <li>
          <p>Amanhã: </p>
          <p>R$ {data ? `${data["1"]},00` : "0,00"}</p>
        </li>
        <li>
          <p>Em 15 dias: </p>
          <p>R$ {data ? `${data["15"]},00` : "0,00"}</p>
        </li>
        <li>
          <p>Em 30 dias: </p>
          <p>R$ {data ? `${data["30"]},00` : "0,00"}</p>
        </li>
        <li>
          <p>Em 90 dias: </p>
          <p>R$ {data ? `${data["90"]},00` : "0,00"}</p>
        </li>
      </ul>
    </>
  );
};
