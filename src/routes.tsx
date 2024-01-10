import { Routes, Route } from 'react-router-dom';
import {Home} from './screens/Home/Home';
import { Products } from './screens/Products/Products';
import { ScreenCart } from './screens/ScreenCart/ScreenCart';


export const Router = (): JSX.Element => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<ScreenCart />} />
    </Routes>
  );
};

