import "./App.css";
import { Header } from "./components/header";
import { Inputs } from "./components/inputs";
import { Main } from "./components/main";
import { Result } from "./components/result";
import Paths from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Paths />
      </Main>
    </>
  );
}

export default App;
