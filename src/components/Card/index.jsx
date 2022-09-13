import { useContext } from "react";
import { Container, ContainerDescription } from "./style";

const Card = ({ product }) => {
  return (
    <Container>
      <img src={product.img} alt="imagem do produto 1" />
      <ContainerDescription>
        <span className="card-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="card-price">{product.price}</span>
        <button>Adicionar ao carrinho</button>
      </ContainerDescription>
    </Container>
  );
};

export default Card;
