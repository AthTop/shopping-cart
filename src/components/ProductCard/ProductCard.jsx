import styles from "./ProductCard.module.css";
import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [amount, setAmount] = useState(1);
  const handleChange = (e) => {
    const value = Number(e.target.value);
    setAmount(value);
  };
  const increment = () => {
    setAmount(amount + 1);
  };
  const decrement = () => {
    if (amount - 1 <= 0) {
      setAmount(0);
      return;
    }
    setAmount(amount - 1);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={`Image of ${product.title}`} />
      <p>{product.title}</p>
      <p>{product.price}</p>
      <div>
        <button onClick={increment}>+1</button>
        <input type="number" value={amount} onChange={handleChange} min={0} />
        <button onClick={decrement}>-1</button>
        <button
          onClick={() => {
            addToCart({ ...product, quantity: amount });
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
