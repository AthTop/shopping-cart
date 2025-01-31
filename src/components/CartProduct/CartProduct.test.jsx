import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartProduct from "./CartProduct";
import { describe, it, expect, vi } from "vitest";

describe("CartProduct", () => {
  const mockProduct = {
    image: "product_image.jpg",
    title: "Test Product",
    price: 10,
    quantity: 2,
  };

  const mockIncrement = vi.fn();
  const mockDecrement = vi.fn();
  const mockRemove = vi.fn();

  it("renders the product image, title and price", () => {
    render(
      <CartProduct
        product={mockProduct}
        incrementInCart={mockIncrement}
        decrementInCart={mockDecrement}
        removeFromCart={mockRemove}
      />
    );

    const productImage = screen.getByRole("img", {
      name: `Image of ${mockProduct.title}`,
    });
    expect(productImage).toHaveAttribute("src", mockProduct.image);

    const productTitle = screen.getByText(mockProduct.title);
    expect(productTitle).toHaveTextContent(mockProduct.title);

    const productPrice = screen.getByText(
      `($${mockProduct.price} x ${mockProduct.quantity}) $${
        mockProduct.quantity * mockProduct.price
      }`
    );
    expect(productPrice).toHaveTextContent(
      `($${mockProduct.price} x ${mockProduct.quantity}) $${
        mockProduct.quantity * mockProduct.price
      }`
    );
  });

  it('calls the increment function when the "+" button is clicked', () => {
    render(
      <CartProduct
        product={mockProduct}
        incrementInCart={mockIncrement}
        decrementInCart={mockDecrement}
        removeFromCart={mockRemove}
      />
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(incrementButton);
    expect(mockIncrement).toHaveBeenCalledTimes(1);
    expect(mockIncrement).toHaveBeenCalledWith(mockProduct);
  });

  it('calls the decrement function when the "-" button is clicked', () => {
    render(
      <CartProduct
        product={mockProduct}
        incrementInCart={mockIncrement}
        decrementInCart={mockDecrement}
        removeFromCart={mockRemove}
      />
    );

    const decrementButton = screen.getByRole("button", { name: "-" });
    fireEvent.click(decrementButton);
    expect(mockDecrement).toHaveBeenCalledTimes(1);
    expect(mockDecrement).toHaveBeenCalledWith(mockProduct);
  });

  it('calls the remove function when the "Remove" button is clicked', () => {
    render(
      <CartProduct
        product={mockProduct}
        incrementInCart={mockIncrement}
        decrementInCart={mockDecrement}
        removeFromCart={mockRemove}
      />
    );

    const removeButton = screen.getByRole("button", { name: "x" });
    fireEvent.click(removeButton);
    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(mockProduct);
  });
});
