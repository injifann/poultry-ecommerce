// Cart.jsx
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const {
    getCartItemsForDisplay,
    totalPrice,
    totalItems,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const cartItems = getCartItemsForDisplay();


  const shipping = totalPrice > 50 ? 0 : 5; // or use your real logic
  const grandTotal = totalPrice + shipping;

  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart ({totalItems})</h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center gap-2"
          >
            <FaTrash className="text-sm" /> Clear Cart
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl shadow flex flex-col sm:flex-row gap-5 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg border"
                />

                <div className="flex-1 space-y-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">Weight: {item.weight || "—"}</p>
                  <p className="font-bold text-amber-800">
                    ETB {item.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                      >
                        −
                      </button>
                      <span className="px-5 py-1 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-sm text-gray-500">
                      ETB {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-xl p-2"
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white p-6 rounded-xl shadow h-fit md:sticky md:top-6">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>ETB {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `ETB ${shipping.toFixed(2)}`}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>ETB {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-amber-600 text-white py-3.5 rounded-lg font-medium hover:bg-amber-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}