import { useContext } from "react";
import { Container } from "./style";
import { ProductContext } from "../../contexts/ProductContext";
import Card from "../Card";

const CardList = () => {
  const { product } = useContext(ProductContext);

  console.log("Fora do contexto: ", product);

  return (
    <Container>
      {product.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default CardList;
