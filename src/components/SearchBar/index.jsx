import { Container } from "./style";

const SearchBar = () => {
  return (
    <Container>
      <input placeholder="Digite sua pesquisa" />
      <button>Pesquisar</button>
    </Container>
  );
};

export default SearchBar;
