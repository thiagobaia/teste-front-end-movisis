import { useEffect, useState } from "react";
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { Container } from "./styles";
import { useCart } from '../../hooks/useCart';
import { api } from '../../services/api';
import { formatPrice } from '../../util/format';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

export const Home = () => {

  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();


  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount};
    newSumAmount[product.id] = product.amount;
    return newSumAmount;
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))
      setProducts(data)
    }

    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }
  
  return (
    <Container>
      {cart.map(product => (
            <ProductItem
            image={
              "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
            }
            title={"Tênis de Caminhada Leve Confortável"}
            price={"179,90"}
            cartItemsAmoutProductId={cartItemsAmount[product.id] || 0}
            addProducts={handleAddProduct(product.id)}
          />
      ))}
    </Container>
  );
};
