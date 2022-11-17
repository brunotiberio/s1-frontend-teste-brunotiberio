import "./App.css";
import { Header } from "./components/header";
import { Main } from "./components/main";
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
