import { Link, NavLink } from "react-router-dom";
import { Container, List, Nav } from "./styles";
import logo from "../../assets/logo.svg";
import Cart from "../Cart/Cart";

export const Header = () => {
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
      <Cart cartSize={2} />
    </Container>
  );
};
