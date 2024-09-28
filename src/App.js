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
import { Provider } from "react-redux";
import store from "./store/redux-store";
import ProductDetails from "./pages/ProductDetails";
import WishlistPage from "./pages/WishlistPage";

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
      <Provider store={store}>
        <AuthProvider>
          <CartProvider>
            <div className="App">
              <Layout>
                <Container className="py-3">
                  <Routes>
                    <Route path="products/:id" element={<ProductDetails />} />
                    <Route path="products" element={<HomePage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="wishlist" element={<WishlistPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="/" element={<HomePage />} />
                  </Routes>
                </Container>
              </Layout>
              <Toaster />
            </div>
          </CartProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
