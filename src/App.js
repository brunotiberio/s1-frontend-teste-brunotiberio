import "./App.css";
import { Header } from "./components/header";
import { Inputs } from "./components/inputs";
import { Main } from "./components/main";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Inputs />
      </Main>
    </>
  );
}

export default App;
