import { MdAddShoppingCart } from "react-icons/md";
import { ProductItems } from "./styles";

interface ProductProps {
  image: string;
  title: string;
  price: string;
  cartItemsAmoutProductId: number;
  onClick: () => void;
}

export const ProductItem: React.FC<ProductProps> = (props) => {
  return (
    <ProductItems>
      <li>
        <img src={props.image} alt={props.title} />
        <strong>{props.title}</strong>
        <span>R$ {props.price}</span>
        <button
          type="button"
          data-testid="add-product-button"
          onClick={props.onClick}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {props.cartItemsAmoutProductId}
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductItems>
  );
};
