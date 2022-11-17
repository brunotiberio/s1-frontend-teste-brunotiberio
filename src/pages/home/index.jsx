import { Inputs } from "../../components/inputs";
import { Result } from "../../components/result";
import { useContext } from "react";
import { ResultsContext } from "../../contexts/ResultsContext";
import { StyledSectionMain } from "./style";
import { ResultLoading } from "../../components/result-loading";

export const Homepage = () => {
  const { data } = useContext(ResultsContext);
  return (
    <>
      <StyledSectionMain>
        <Inputs />
        {data ? <Result /> : <ResultLoading />}
      </StyledSectionMain>
    </>
  );
};
