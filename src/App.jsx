import "./App.css";
import CardList from "./components/CardList";
import Header from "./components/Header";
import Main from "./components/Main";
import SearchBar from "./components/SearchBar";
import ProductProvider from "./contexts/ProductContext";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Main />
        {/* <CardList />
      <SearchBar /> */}
      </div>
    </ProductProvider>
  );
}

export default App;
