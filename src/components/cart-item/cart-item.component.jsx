import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <h2 className="name">{name}</h2>
      <span className="price">{`${quantity} X $${price}`}</span>
    </div>
  );
};

export default CartItem;
