import pic1 from "../../assets/pic1.png";
import { Container } from "./style";

const Card = () => {
  return (
    <Container>
      <img src={pic1} alt="imagem do produto 1" />
      <span>Camisetas</span>
      <h3>Containeghtweigth Jacket</h3>
      <p>
        Adicione um pouco de energia ao seu guarda-roupa de inverno com esta
        jaqueta vibrante...
      </p>
      <span>R$ 100.00</span>
      <button>Adicionar ao carrinho</button>
    </Container>
  );
};

export default Card;
