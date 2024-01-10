import { Product } from "../../components/Product/Product";
import { Container, Text } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Product
        image={
          "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
        }
        title={"Tênis de Caminhada Leve Confortável"}
        price={"179,90"}
      />
    </Container>
  );
};

