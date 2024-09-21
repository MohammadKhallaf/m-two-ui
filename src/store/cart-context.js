import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const cartInLocal = localStorage.getItem("cart");
    const cartInJS = JSON.parse(cartInLocal);
    return cartInJS ?? [];
  });

  const addToCart = (product) => {
    // add the same product
    // add to cart, already in cart
    // setCart((prevState) => [...prevState, product]);
    // if cart is empty or not
    // if product exists or not
    // find | findIndex

    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => {
        return item._id === product._id;
      });

      if (index === -1) {
        const currentProduct = product;
        currentProduct.quantity = 1;

        return [...prevCart, currentProduct];
      } else {
        // if exists
        // update product quantity -> set -> new Array
        const currentProduct = prevCart[index];
        currentProduct.quantity += 1;

        return [...prevCart];
      }
    });
  };

  // listen to cart update
  // save to local storage
  useEffect(() => {
    const ConvertedCart = JSON.stringify(cart);
    localStorage.setItem("cart", ConvertedCart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
