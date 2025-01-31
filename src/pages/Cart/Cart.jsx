import { useOutletContext, useNavigate } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart, decrementInCart, incrementInCart, removeFromCart, clearCart } =
    useOutletContext();
  const navigate = useNavigate();
  const handleCheckout = () => {
    clearCart();
    navigate("/thankyou");
  };
  return (
    <div className={styles.cart}>
      {cart.map((product) => {
        return (
          <CartProduct
            product={product}
            key={product.id}
            decrementInCart={decrementInCart}
            incrementInCart={incrementInCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
      <div className={styles.total}>
        Total:{" $"}
        {cart
          .reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )
          .toFixed(2)}
      </div>
      <div className={styles.checkout}>
        <button onClick={handleCheckout}>Checkout and Pay</button>
      </div>
    </div>
  );
}
