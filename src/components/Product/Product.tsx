import { MdAddShoppingCart } from "react-icons/md";
import { ProductItem } from "./styles";

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

export const Product = (props: ProductProps) => {
  
  return (
    <ProductItem>
      <li>
        <img src={props.image} alt="Tênis de Caminhada Leve Confortável" />
        <strong>{props.title}</strong>
        <span>R$ {props.price}</span>
        <button
          type="button"
          data-testid="add-product-button"
          // onClick={() => handleAddProduct(product.id)}
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {/* {cartItemsAmount[product.id] || 0} */} 2
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductItem>
  );
};
