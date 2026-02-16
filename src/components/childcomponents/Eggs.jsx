// Eggs.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../Cards/Product';
import { useSearchParams } from 'react-router-dom';
import { ProductQuantity } from '../../hooks/ProductQuantity';


const eggsProducts = [
  {
    id: 1,
    name: "Grade A Large Eggs",
    image: "https://images.unsplash.com/photo-1582721478774-dbb6205b91a0?w=800",
    price: 180,
    weight: "Tray of 30",
    badge: "Fresh",
    subcategory: "Fresh Eggs",
  },
  {
    id: 2,
    name: "Organic Free-Range Eggs",
    image: "https://images.unsplash.com/photo-1627422061883-777637b06b16?w=800",
    price: 250,
    originalPrice: 280,
    weight: "Tray of 30",
    badge: "Organic",
    subcategory: "Fresh Eggs",
  },
  {
    id: 3,
    name: "Fertilized Hatching Eggs",
    image: "https://images.unsplash.com/photo-1621793409983-3ee090d43b80?w=800",
    price: 300,
    weight: "Dozen",
    subcategory: "Product of Egg",
  },
  {
    id: 4,
    name: "Brown Country Eggs",
    image: "https://images.unsplash.com/photo-1587574293340-e0011c4cc336?w=800",
    price: 200,
    weight: "Tray of 30",
    badge: "Local Farm",
    subcategory: "Fresh Eggs",
  },
];


export default function Eggs() {

        const {
          getQuantity,
          updateQuantity,
        } =ProductQuantity()

        const [selectedSubcategory, setSelectedSubcategory] = useState('All');
        const [sortBy, setSortBy] = useState('Featured');

        const [searchParams] = useSearchParams();
        const sub = searchParams.get('sub');

        useEffect(() => {
          if (sub) {
            const categoryMap = {
              fresh: 'Fresh Eggs',
              product: 'Product of Egg',
            };
            setSelectedSubcategory(categoryMap[sub] || 'All');
          }
        }, [sub]);

        let displayedProducts = eggsProducts;

        if (selectedSubcategory !== 'All') {
          displayedProducts = eggsProducts.filter(
            (p) => p.subcategory === selectedSubcategory
          );
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
        <h1 className="text-4xl font-bold text-amber-800 mb-8">Eggs</h1>

        {/* Filters & Sorting */}
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
              onClick={() => setSelectedSubcategory('Fresh Eggs')}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                selectedSubcategory === 'Fresh Eggs'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Fresh Eggs
            </button>
            <button
              onClick={() => setSelectedSubcategory('Product of Egg')}
              className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                selectedSubcategory === 'Product of Egg'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'
              }`}
            >
              Product of Egg
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            originalPrice={product.originalPrice}
            weight={product.weight}
            badge={product.badge}
            isInStock={true}   
            quantity={getQuantity(product.id)}
            onIncrease={() => updateQuantity(product.id, 1)}
            onDecrease={() => updateQuantity(product.id, -1)}        // ← you can make dynamic later
        
/>
          ))
          
          }
          
        </div>
      </div>
    </div>
    
  );
  
}