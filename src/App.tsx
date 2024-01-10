import { GlobalStyle } from "../styles/global.ts";
import Home from "./screens/Home/Home.tsx";
import { Product } from "./components/Product/Product.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { ScreenCart } from "./screens/ScreenCart/ScreenCart.tsx";
export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<ScreenCart />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
