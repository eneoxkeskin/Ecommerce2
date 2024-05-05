"use client";

import { useState, useEffect } from "react";
import { useCart } from "context/cart";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function AddToCart({ product }) {
  const { addToCart, updateQuantity, removeFromCart, cartItems } = useCart();

  const existingProduct = cartItems?.find((item) => item?._id === product?._id);
  const initialQuantity = existingProduct ? existingProduct?.quantity : 1;

  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(existingProduct ? existingProduct?.quantity : 1);
  }, [existingProduct]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(product, newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product, newQuantity);
    } else {
      removeFromCart(product._id);
      setQuantity(1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="flex flex-col items-center">
      {cartItems?.some((item) => item?._id === product?._id) ? (
        <div className="flex justify-between items-center w-full mb-4">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={handleDecrement}
          >
            <FaMinus />
          </button>
          <input
            type="number"
            className="w-16 text-center border border-gray-300 rounded-md focus:outline-none"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            onClick={handleIncrement}
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-3 rounded focus:outline-none"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
      {(cartItems.length > 0 && cartItems.some((item) => item?._id === product?._id)) && (
        <Link href="/cart">
          <button className="mt-2 text-white bg-black hover:bg-gray-700 font-bold py-2 px-3 rounded focus:outline-none">
            Review & Checkout
          </button>
        </Link>
      )}
    </div>
  );
}
