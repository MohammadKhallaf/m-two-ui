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
import RegisterPage from "./pages/RegisterPage";

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
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="App">
            <Layout>
              <Container className="py-3">
                <Routes>
                  <Route path="register" element={<RegisterPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </Container>
            </Layout>
            <Toaster />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
