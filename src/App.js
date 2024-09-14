import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

import { useState } from "react";
import { Badge } from "react-bootstrap";
import "./App.css";
import { CartContext } from "./store/cart-context";

// 1. load cards -> UI

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // add the same product
    // add to cart, already in cart
    setCart((prevState) => [...prevState, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">
                ECommerce
              </Navbar.Brand>
              <Nav className="ms-auto">
                <Nav.Link href="#features">
                  Wishlist{" "}
                  <Badge bg="info" text="dark">
                    9
                  </Badge>
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  Cart{" "}
                  <Badge bg="warning" text="dark">
                    {cart.length}
                  </Badge>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>{" "}
          <Container className="py-3">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
