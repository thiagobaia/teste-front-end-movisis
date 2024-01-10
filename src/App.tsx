import { GlobalStyle } from "../styles/global.ts";
import { CartProvider } from "./hooks/useCart.tsx";
import { ToastContainer } from "react-toastify";
import { Router } from './routes.tsx'
import { Header } from "./components/Header/Header.tsx";

export const App = () => {
  return (

      <CartProvider>
        <Header />
        <GlobalStyle />
        <Router />
        <ToastContainer autoClose={3000} />
      </CartProvider>
  );
};
