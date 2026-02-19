// context/CartContext.jsx
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, name, price, image, weight } = action.payload;
      const existing = state.items.find((item) => item.id === id);

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + price,
        };
      }

      return {
        ...state,
        items: [...state.items, { id, name, price, image, weight, quantity: 1 }],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + price,
      };
    }

    case 'REMOVE_FROM_CART': {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return state;

      return {
        ...state,
        items: state.items.filter((i) => i.id !== id),
        totalItems: state.totalItems - item.quantity,
        totalPrice: state.totalPrice - item.price * item.quantity,
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, newQuantity } = action.payload;
      if (newQuantity < 1) return state; // or you can remove item when ≤ 0

      const item = state.items.find((i) => i.id === id);
      if (!item) return state;

      const diff = newQuantity - item.quantity;
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: newQuantity } : i
        ),
        totalItems: state.totalItems + diff,
        totalPrice: state.totalPrice + diff * item.price,
      };
    }

    case 'CLEAR_CART':
      return { items: [], totalItems: 0, totalPrice: 0 };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    try {
      const saved = localStorage.getItem('cart');
      return saved ? JSON.parse(saved) : initialState;
    } catch (e) {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateQuantity = (id, newQuantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, newQuantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // For display – enriched items with subtotal
  const getCartItemsForDisplay = () => {
    return state.items.map((item) => ({
      ...item,
      subtotal: item.price * item.quantity,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartItemsForDisplay,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);