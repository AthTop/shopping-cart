import styles from "./CartProduct.module.css";
export default function CartProduct({
  product,
  decrementInCart,
  incrementInCart,
  removeFromCart,
}) {
  return (
    <div className={styles.product}>
      <img src={product.image} alt={`Image of ${product.title}`} />
      <p>{product.title}</p>
      <div>
        <button onClick={() => incrementInCart(product)}>
          <span>+</span>
        </button>
        <button onClick={() => decrementInCart(product)}>
          <span>-</span>
        </button>
        <button onClick={() => removeFromCart(product)}>
          <span>x</span>
        </button>
      </div>
      <p>
        (${product.price} x {product.quantity}) $
        {product.quantity * product.price}
      </p>
    </div>
  );
}
