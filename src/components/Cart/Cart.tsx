import { MdShoppingBasket } from 'react-icons/md';
import { CartStyles } from "./styles.ts";

interface CartSizeProps {
  cartSize: number;
}

const Cart = ({cartSize}:CartSizeProps): JSX.Element => {
  return (
    <CartStyles to="/cart">
      <div>
        <strong>Meu carrinho</strong>
        <span data-testid="cart-size">
          {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
        </span>
      </div>
      <MdShoppingBasket size={36} color="#FFF" />
    </CartStyles>
  );
};

export default Cart;
