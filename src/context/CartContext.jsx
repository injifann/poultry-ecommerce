
import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, name, price, image, weight } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        // increase quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + price,
        };
      } else {
        // add new item
        return {
          ...state,
          items: [...state.items, { id, name, price, image, weight, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + price,
        };
      }
    }

    // You can add REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART later

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
    // Optional: load from localStorage on mount
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : initialState;
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

    const getCartItemsForDisplay = () => {
    return state.items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      weight: item.weight,
      quantity: item.quantity,
      subtotal: item.price * item.quantity
    }));
  };
  // You can export more actions later: removeFromCart, etc.

  return (
    <CartContext.Provider value={{ ...state, addToCart, getCartItemsForDisplay }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);