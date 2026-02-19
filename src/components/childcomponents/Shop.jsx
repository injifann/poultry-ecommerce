// Shop.jsx
import hand_icon from '../../assets/images/hand_icon.png'; 
import arrow from '../../assets/images/arrow.png';         
import hero_img from '../../assets/images/hero.jpg';   

import ProductCard from '../Cards/Product'; 
import { ProductQuantity } from '../../hooks/ProductQuantity';
import {Product} from '../../../src/data/Product'
import { useState } from 'react';

// Sample latest products 
const latestProducts = Product;

export default function Shop() {
   const {
    getQuantity,
    updateQuantity,
  } = ProductQuantity()

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left - Text + CTA */}
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Best Nutrition <br />
                <span className="text-amber-600">For All</span>
              </h2>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <p className="text-lg font-semibold text-amber-700">New</p>
                  <img src={hand_icon} alt="" className="h-9 w-9" />
                </div>

                <div className="text-4xl md:text-5xl font-medium text-amber-800 space-y-3">
                  <p>Collection</p>
                  <p className="text-amber-700">All Needs</p>
                </div>
              </div>

              <a
                href="#popular"
                className="
                  inline-flex items-center gap-4 px-8 py-5 
                  bg-amber-600 hover:bg-amber-700 active:bg-amber-800 
                  text-white font-semibold text-lg rounded-xl 
                  shadow-lg hover:shadow-xl transition-all duration-300
                "
              >
                Latest Collection
                <img src={arrow} alt="" className="h-6 w-6" />
              </a>
            </div>

            {/* Right - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={hero_img}
                alt="Fresh Poultry Products"
                className="
                  w-full max-w-md lg:max-w-xl h-auto object-contain 
                  drop-shadow-2xl rounded-3xl
                "
              />
            </div>
          </div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
      </section>

      {/* Latest Products Section */}
      <section id="popular" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900">
              Top Latest Products
            </h1>
            <hr className="w-24 h-1 mx-auto mt-6 bg-amber-600 rounded-full" />
          </div>

          {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {(showAll ? latestProducts : latestProducts.slice(0, 8)).map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    weight={product.weight}
                    badge={product.badge}
                    isInStock={product.isInStock}
                    quantity={getQuantity(product.id)}
                    onIncrease={() => updateQuantity(product.id, 1)}
                    onDecrease={() => updateQuantity(product.id, -1)}
                  />
                ))}
              </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              onClick={() => setShowAll(true)}
              className="
                inline-block px-10 py-4 bg-amber-600 hover:bg-amber-700 
                text-white font-semibold rounded-xl shadow-lg 
                hover:shadow-xl transition-all duration-300
              "
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - at the very bottom */}
      <section className="py-16 lg:py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Get Exclusive Offers on Your Email
          </h2>
          <p className="text-lg text-amber-700 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and stay updated with the latest products, offers, and farm news!
          </p>

          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="
                flex-1 px-6 py-4 rounded-xl border border-amber-300 
                focus:outline-none focus:ring-2 focus:ring-amber-500 
                focus:border-amber-500 bg-white text-amber-900 
                placeholder-amber-500 text-lg
              "
              required
            />
            <button
              type="submit"
              className="
                px-10 py-4 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 
                text-white font-semibold text-lg rounded-xl 
                shadow-md hover:shadow-lg transition-all duration-300
              "
            >
              Subscribe
            </button>
          </form>

          <p className="mt-6 text-sm text-amber-600">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </section>

    </div>
  );
}