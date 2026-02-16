// Tools.jsx
import { useState,useEffect } from 'react';
import ProductCard from '../Cards/Product'
import {Link} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { ProductQuantity } from '../../hooks/ProductQuantity';




const toolsProducts = [
  { id: 1, name: "Automatic Chicken Feeder", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800", price: 450, weight: "5 kg", badge: "Durable", subcategory: "Feeding tools" },
  { id: 2, name: "Poultry Water Dispenser",  image: "https://images.unsplash.com/photo-1597843783204-4b6066453a01?w=800", price: 300, originalPrice: 350, weight: "2 kg", badge: "Easy Clean", subcategory: "Watering tools" },
  { id: 3, name: "Egg Incubator (24 eggs)",  image: "https://images.unsplash.com/photo-1587573089570-2302fe6f9142?w=800", price: 1200, weight: "10 kg", subcategory: "Breeding tools" },
  { id: 4, name: "Feed Scoop Set",           image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800", price: 150, weight: "1 kg", badge: "Stainless Steel", subcategory: "Feeding tools" },
];

export default function Tools() {

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
    let categoryMap = {
      feeding: 'Feeding tools',
      watering: 'Watering tools',
      breeding: 'Breeding tools',
    };
    setSelectedSubcategory(categoryMap[sub] || 'All');
  }
}, [sub]);


  let displayedProducts = toolsProducts;
  if (selectedSubcategory !== 'All') {
    displayedProducts = toolsProducts.filter(p => p.subcategory === selectedSubcategory);
  }

  if (sortBy === 'Price: Low to High') {
    displayedProducts = [...displayedProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'Price: High to Low') {
    displayedProducts = [...displayedProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-amber-800 mb-8">Tools</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setSelectedSubcategory('All')}        className={`px-5 py-2.5 rounded-full ${selectedSubcategory === 'All'        ? 'bg-amber-600 text-white' : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'}`}>All</button>
            <button onClick={() => setSelectedSubcategory('Feeding tools')}  className={`px-5 py-2.5 rounded-full ${selectedSubcategory === 'Feeding tools'  ? 'bg-amber-600 text-white' : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'}`}>Feeding Tools</button>
            <button onClick={() => setSelectedSubcategory('Watering tools')} className={`px-5 py-2.5 rounded-full ${selectedSubcategory === 'Watering tools' ? 'bg-amber-600 text-white' : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'}`}>Watering Tools</button>
            <button onClick={() => setSelectedSubcategory('Breeding tools')} className={`px-5 py-2.5 rounded-full ${selectedSubcategory === 'Breeding tools' ? 'bg-amber-600 text-white' : 'bg-white border border-amber-600 text-amber-800 hover:bg-amber-100'}`}>Breeding Tools</button>
          </div>

          <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-amber-500">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map(product => (
            <ProductCard
              key={product.id}
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
              onDecrease={() => updateQuantity(product.id, -1)}
            />
          ))}
        </div>

        {displayedProducts.length === 0 && <p className="text-center text-gray-600 mt-12 text-lg">No products found.</p>}
      </div>
    </div>
  );
}

