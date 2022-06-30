import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const cartItemContainsProduct = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (cartItemContainsProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  itemCount: 0,
});

export const CartIconProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setItemCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    itemCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
