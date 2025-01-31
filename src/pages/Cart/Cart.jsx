import { useOutletContext } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cart, decrementInCart, incrementInCart, removeFromCart } =
    useOutletContext();
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
        {cart.reduce(
          (total, product) => total + product.price * product.quantity,
          0
        ).toFixed(2)}
      </div>
    </div>
  );
}
