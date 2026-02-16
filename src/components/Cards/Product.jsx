// components/ProductCard.js
import { useState } from 'react';
import { useCart } from '../../context/CartContext'

export default function ProductCard(props) {
  const {
    id,
    name,
    image,
    price,
    originalPrice,
    weight = "1 kg",
    badge,
    isInStock = true,
    quantity=1,           // ← new: controlled from parent
    onIncrease,             // ← new: parent handler
    onDecrease,             // ← new: parent handler
    onAddToCart,            // ← now receives (id, quantity)
  } = props;
  

  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice && originalPrice > price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;


  const { addToCart } = useCart();
  const [localQty, setLocalQty] = useState(1);   // local only for this card

  const handleAdd = () => {
    addToCart({ id, name, price, image, weight, quantity: localQty });   
  };

  return (
    <div
      className={`
        group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300
        hover:shadow-xl hover:-translate-y-1 border border-gray-200
        ${!isInStock ? 'opacity-75' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className={`
            w-full h-full object-cover transition-transform duration-500
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <span className="bg-amber-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
              {badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
              -{discount}%
            </span>
          )}
        </div>

        {!isInStock && (
          <div className="absolute top-3 right-3">
            <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-semibold text-gray-800 text-lg line-clamp-2 group-hover:text-amber-700 transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xl font-bold text-amber-800">
            ETB {price.toFixed(2)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              ETB {originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600">{weight}</p>

        {/* Quantity + Cart controls */}
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Quantity selector */}
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full sm:w-auto">
            <button
              type="button"
              onClick={onDecrease}
              disabled={quantity <= 1 || !isInStock}
              className={`
                px-3 py-2 bg-gray-100 text-gray-700 font-medium text-lg
                hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              −
            </button>

            <span className="px-5 py-2 min-w-[3.5rem] text-center font-medium text-gray-800">
              {quantity}
            </span>

            <button
              type="button"
              onClick={onIncrease}
              disabled={!isInStock}
              className={`
                px-3 py-2 bg-gray-100 text-gray-700 font-medium text-lg
                hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              +
            </button>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAdd}
            disabled={!isInStock}
            className={`
              flex-1 py-2.5 rounded-lg font-medium transition-colors text-sm
              ${isInStock
                ? 'bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white'
                : 'bg-gray-400 cursor-not-allowed text-gray-700'}
            `}
          >
            {isInStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>

        {/* Optional wishlist heart (kept from your original) */}
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors">
          <svg className="w-5 h-5 text-gray-600 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}