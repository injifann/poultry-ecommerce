// Meat.jsx - corrected version (now identical style & functionality as Tools.jsx)

import { useState, useEffect } from 'react';          // ← add useEffect here
import ProductCard from '../Cards/Product';
import { useSearchParams } from 'react-router-dom';
import p1 from '../../assets/images/cookedmeat4.webp';
import p2 from '../../assets/images/cookedmeat3.webp';
import p3 from '../../assets/images/cookedmeat2.webp';
import p4 from '../../assets/images/cookedmeat1.webp';
import { ProductQuantity } from '../../hooks/ProductQuantity';


const meatProducts = [
  { id: 1, name: "Cooked Meet beef", image: p4, price: 320, originalPrice: 380, weight: "1 kg", badge: "Fresh", subcategory: "Cooked meat" },
  { id: 2, name: "Cooked meat isolated on white",  image: p3, price: 250, weight: "2 kg live weight", badge: "Organic", subcategory: "Cooked meat" },
  { id: 3, name: "Cooked meat",  image: p2, price: 180, originalPrice: 220, weight: "500g", subcategory: "Cooked meat" },
  { id: 4, name: "Cooked meat on plate",       image: p1, price: 450, weight: "1 kg", badge: "Premium", subcategory: "Cooked meat" },
  // ... more products
];

export default function Meat() {

  const {
    getQuantity,
    updateQuantity,
  } = ProductQuantity()

  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');

  const [searchParams] = useSearchParams();
  const sub = searchParams.get('sub');

  useEffect(() => {
    if (sub) {
      const categoryMap = {
        fresh: 'Fresh meat',
        live: 'Live chicken',
        cooked: 'Cooked meat',
      };
      setSelectedSubcategory(categoryMap[sub] || 'All');
    }
  }, [sub]);

  let displayedProducts = meatProducts;
  if (selectedSubcategory !== 'All') {
    displayedProducts = meatProducts.filter(p => p.subcategory === selectedSubcategory);
  }

  // Sorting
  if (sortBy === 'Price: Low to High') {
    displayedProducts = [...displayedProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'Price: High to Low') {
    displayedProducts = [...displayedProducts].sort((a, b) => b.price - a.price);
  }


  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-8">Meat</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedSubcategory('All')}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                selectedSubcategory === 'All'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedSubcategory('Fresh meat')}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                selectedSubcategory === 'Fresh meat'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Fresh Meat
            </button>
            <button
              onClick={() => setSelectedSubcategory('Live chicken')}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                selectedSubcategory === 'Live chicken'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Live Chicken
            </button>
            <button
              onClick={() => setSelectedSubcategory('Cooked meat')}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                selectedSubcategory === 'Cooked meat'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Cooked Meat
            </button>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
          >
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              weight={product.weight}
              badge={product.badge}
              isInStock={true}           // ← you can make dynamic later
              quantity={getQuantity(product.id)}
              onIncrease={() => updateQuantity(product.id, 1)}
              onDecrease={() => updateQuantity(product.id, -1)}
            />
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <p className="text-center text-gray-600 mt-12 text-lg">No products found.</p>
        )}
      </div>
    </div>
  );
}