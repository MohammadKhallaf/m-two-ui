import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CartProvider from "./store/cart-context";

import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import AuthProvider from "./store/auth-context";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";

// 1. load cards -> UI
function Layout({ children }) {
  // composition
  return (
    <>
      <CustomNavbar />
      {children}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <Layout>
              <Container className="py-3">
                <Routes>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Container>
            </Layout>
            <Toaster />
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
