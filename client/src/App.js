import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const Container = styled.div``;

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <BrowserRouter>
      <Container>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products/:category" element={<ProductList />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/carts" element={<Cart />} />
            <Route
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/" replace /> : <Register />}
            />
            <Route path="/success" element={<Success />} />
          </Routes>
        </AnimatePresence>
      </Container>
    </BrowserRouter>
  );
}

export default App;
