import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

export default function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // Set state for cart, cart structure will be [ { productID: id, quantity: quantity } ]
  const [cart, setCart] = useState([]);

  // Helper function to update quantity for items
  const updateQuantity = (items, itemId, quantityChange) => {
    return items.map((item) => {
      return item.id === itemId
        ? { ...item, quantity: item.quantity + quantityChange }
        : item;
    });
  };

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
      return;
    }
    setCart(updateQuantity(cart, product.id, product.quantity));
  };

  const decrementInCart = (product) => {
    setCart(
      cart
        .map((item) => {
          return item.id === product.id
            ? item.quantity - 1 > 0
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item;
        })
        .filter((item) => item !== null)
    );
  };

  const incrementInCart = (product) => {
    setCart(
      cart.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      })
    );
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  // TODO: Add styling for loading state later
  return (
    <>
      <Navbar cart={cart} />
      <div className={`loading ${isLoading ? "active" : ""}`}></div>
      <Outlet
        context={{
          cart,
          addToCart,
          decrementInCart,
          incrementInCart,
          removeFromCart,
          clearCart,
        }}
      />
    </>
  );
}
