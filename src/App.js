import "./App.css";
import { Header } from "./components/header";
import { Main } from "./components/main";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <p>cuzinho a milanesa</p>
      </Main>
    </>
  );
}

export default App;
