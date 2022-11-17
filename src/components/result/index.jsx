import { useContext } from "react";
import { ResultsContext } from "../../contexts/ResultsContext";
import { StyledSectionResult } from "./style";

export const Result = () => {
  const { data } = useContext(ResultsContext);

  return (
    <>
      <StyledSectionResult>
        <h2>VOCÊ RECEBERÁ:</h2>
        <ul>
          <li>
            <p>Amanhã: </p>
            <span>R$ {data ? `${data["1"]},00` : "0,00"}</span>
          </li>
          <li>
            <p>Em 15 dias: </p>
            <span>R$ {data ? `${data["15"]},00` : "0,00"}</span>
          </li>
          <li>
            <p>Em 30 dias: </p>
            <span>R$ {data ? `${data["30"]},00` : "0,00"}</span>
          </li>
          <li>
            <p>Em 90 dias: </p>
            <span>R$ {data ? `${data["90"]},00` : "0,00"}</span>
          </li>
        </ul>
      </StyledSectionResult>
    </>
  );
};
