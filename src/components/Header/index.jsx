import logo from "../../assets/logo.png";
import ButtonFilter from "../ButtonFilter";
import { Container, Buttons, ContainerHeader } from "./style";

const Header = () => {
  return (
    <Container>
      <ContainerHeader>
        <img src={logo} alt="logo da aplicação" />
        <Buttons>
          <ButtonFilter>Todos</ButtonFilter>
          <ButtonFilter>Acessórios</ButtonFilter>
          <ButtonFilter>Calçados</ButtonFilter>
          <ButtonFilter>Camisetas</ButtonFilter>
        </Buttons>
      </ContainerHeader>
    </Container>
  );
};

export default Header;
