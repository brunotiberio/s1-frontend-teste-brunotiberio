import { StyledSectionResult } from "./style";
import aguarde from "../../img/aguardando.gif";

export const ResultLoading = () => {
  return (
    <>
      <StyledSectionResult>
        <h2>Aguardando simulação:</h2>
        <img src={aguarde} alt="Loading" />
      </StyledSectionResult>
    </>
  );
};
