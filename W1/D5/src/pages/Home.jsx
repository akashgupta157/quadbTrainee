import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCartProp = (product) => {
    // Prop drilling example - updating cart count
    setCartCount(prev => prev + 1);
    console.log(`Product ${product.title} added to cart via prop drilling`);
  };

  return (
    <div className="home">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCartProp={addToCartProp}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;