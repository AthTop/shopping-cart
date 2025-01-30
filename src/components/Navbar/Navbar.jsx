import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop</Link>
      <Link to={"/cart"}>Cart: {totalItems} </Link>
    </>
  );
}
