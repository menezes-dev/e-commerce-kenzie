import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <CardList />
    </div>
  );
}

export default App;
