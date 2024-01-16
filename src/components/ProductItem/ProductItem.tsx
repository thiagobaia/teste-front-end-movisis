import { MdAddShoppingCart } from "react-icons/md";
import { ProductItems } from "./styles";

interface ProductProps {
  image: string;
  title: string;
  price: string;
  cartItemsAmoutProductId: number;
  addProducts: any;
}

export const ProductItem = (props: ProductProps) => {
  
  return (
    <ProductItems>
      <li>
        <img src={props.image} alt="Tênis de Caminhada Leve Confortável" />
        <strong>{props.title}</strong>
        <span>R$ {props.price}</span>
        <button
          type="button"
          data-testid="add-product-button"
          onClick={() => props.addProducts}
          //handleAddProduct(product.id)
        >
          <div data-testid="cart-product-quantity">
            <MdAddShoppingCart size={16} color="#FFF" />
            {props.cartItemsAmoutProductId}
            {/* {cartItemsAmount[product.id] || 0} */} 
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductItems>
  );
};
