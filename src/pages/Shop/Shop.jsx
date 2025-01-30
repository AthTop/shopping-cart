import { useLoaderData, useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css";

export default function Shop() {
  const products = useLoaderData();
  const { addToCart } = useOutletContext();

  return (
    <div className={styles.shop}>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} addToCart={addToCart} />;
      })}
    </div>
  );
}
