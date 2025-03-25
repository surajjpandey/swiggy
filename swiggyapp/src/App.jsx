import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/body/Home";
import Search from "./components/body/Search";
import Body from "./components/body/Body";
import Menu from "./components/Menu";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path={"/search"} element={<Search />} />
            <Route path={"/products"} element={<Body />} />
            <Route path="/products/:id" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
