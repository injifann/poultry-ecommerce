import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Chicken Meat",
      category: "Meat",
      price: 12.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Organic Farm Eggs (12pcs)",
      category: "Eggs",
      price: 5.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1582727462247-5f8e8e23b6e0?auto=format&fit=crop&w=500&q=80",
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty 🛒
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl shadow flex flex-col md:flex-row gap-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-32 h-32 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 hover:text-amber-700 transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-sm mb-2">
                      Category: {item.category}
                    </p>
                    <p className="text-amber-800 font-bold mb-3">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, -1)
                        }
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      >
                        -
                      </button>

                      <span className="font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, 1)
                        }
                        className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Delete Icon Button */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 text-xl transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-xl shadow h-fit">
              <h2 className="text-xl font-bold mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
