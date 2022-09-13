import { createContext, useState } from "react";
import { pic1 } from "../assets/pic1.png";

export const ProductContext = createContext({});

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([
    {
      id: 0,
      img: "../assets/pic1.png",
      category: "Camisetas",
      name: "Lightweight Jacket",
      description:
        "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
      price: 100,
    },
    {
      id: 1,
      img: "../assets/pic1.png",
      category: "Acessórios",
      name: "Black Hat",
      description:
        "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
      price: 100,
    },
    {
      id: 2,
      img: "../assets/pic1.png",
      category: "Acessórios",
      name: "Mask",
      description:
        "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
      price: 100,
    },
    {
      id: 3,
      img: "../assets/pic1.png",
      category: "Camisetas",
      name: "T-Shirt",
      description:
        "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
      price: 100,
    },
    {
      id: 4,
      img: "../assets/pic1.png",
      category: "Camisetas",
      name: "Short-Sleeve T-Shirt",
      description:
        "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais fino...",
      price: 100,
    },
    {
      id: 5,
      img: "../assets/pic1.png",
      category: "Camisetas",
      name: "Champion Packable Jacket",
      description:
        "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
      price: 100,
    },
  ]);

  console.log("Dentro do contexto: ", product);

  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
