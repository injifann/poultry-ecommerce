import { useState, useCallback } from 'react';

export function ProductQuantity() {
  const [quantities, setQuantities] = useState({});

  const getQuantity = useCallback((id) => {
    return quantities[id] ?? 1;
  }, [quantities]);

  const updateQuantity = useCallback((id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] ?? 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  }, []);

  const resetQuantity = useCallback((id) => {
    setQuantities((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }, []);

  const resetAll = useCallback(() => {
    setQuantities({});
  }, []);

  return {
    getQuantity,
    updateQuantity,
    resetQuantity,
    resetAll,
    // If you later want to expose the raw state:
    // quantities,
  };
}