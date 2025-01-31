import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types";
export default function Navbar({ cart }) {
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to={"/"}>RandomStore</Link>
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link className={styles.cartLink} to={"/cart"}>
            Cart
          </Link>
          <span className={styles.cartItems}>{totalItems}</span>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array.isRequired,
};
