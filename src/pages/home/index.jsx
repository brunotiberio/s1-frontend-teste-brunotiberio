import { Inputs } from "../../components/inputs";
import { Result } from "../../components/result";
import { useContext } from "react";
import { ResultsContext } from "../../contexts/ResultsContext";
import ContentLoader from "react-content-loader";

export const Homepage = () => {
  const { data } = useContext(ResultsContext);
  return (
    <>
      <Inputs />
      {data ? (
        <Result />
      ) : (
        <ContentLoader
          speed={2}
          width={400}
          height={160}
          viewBox="0 0 400 160"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="-7" y="29" rx="3" ry="3" width="158" height="139" />
        </ContentLoader>
      )}
    </>
  );
};
