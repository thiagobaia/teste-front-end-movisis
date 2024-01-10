import { Link, NavLink } from "react-router-dom";
import { Container, List, Nav } from "./styles";
import logo from "../../assets/shoes-icon.png";
import Cart from "../Cart/Cart";
import { useCart } from "../../hooks/useCart";

export const Header = () => {

  const { cart } = useCart();
  const cartSize = cart.length

  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src={logo} alt="Rocketshoes" />
        </Link>
        <List to="/" as={NavLink}>
          Home
        </List>

        <List to="/product" as={NavLink}>
          Produtos
        </List>
      </Nav>
      <Cart cartSize={cartSize} />
    </Container>
  );
};
