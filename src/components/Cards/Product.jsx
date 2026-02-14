// components/ProductCard.js
import { useState } from 'react';

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
    onAddToCart,
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice && originalPrice > price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

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

        {/* Badges (top-left) */}
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

        {/* Stock badge (top-right) */}
        {!isInStock && (
          <div className="absolute top-3 right-3">
            <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-gray-800 text-lg line-clamp-2 group-hover:text-amber-700 transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-2">
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

        {/* Actions */}
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={() => onAddToCart?.(id)}
            disabled={!isInStock}
            className={`
              flex-1 py-2.5 rounded-lg font-medium transition-colors text-sm
              ${isInStock 
                ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                : 'bg-gray-400 cursor-not-allowed text-gray-700'}
            `}
          >
            {isInStock ? 'Add to Cart' : 'Unavailable'}
          </button>

          <button className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}