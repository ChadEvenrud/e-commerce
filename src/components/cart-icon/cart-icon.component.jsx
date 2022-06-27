import { ReactComponent as ShoppingIcon } from "../../assets/Logo/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-icon.context";

const CartIcon = () => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);
  const toggleCartOpen = () => setCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartOpen} />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;
