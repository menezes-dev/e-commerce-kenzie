import CardList from "../CardList";
import Header from "../Header";
import SearchBar from "../SearchBar";
import { Container } from "./style";

const Main = () => {
  return (
    <Container>
      <CardList />
      <SearchBar />
    </Container>
  );
};

export default Main;
