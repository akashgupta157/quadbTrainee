import React from 'react';
import { useDispatch } from 'react-redux';
import { useWishlist } from '../context/WishlistContext';
import { addToCart } from '../redux/cartSlice';

const ProductCard = ({ product, addToCartProp }) => {
  const dispatch = useDispatch();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const handleAddToCart = () => {
    // Using Redux
    dispatch(addToCart(product));
    // Using Prop Drilling (passed from Home component)
    addToCartProp(product);
  };

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="product-actions">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button 
          onClick={handleWishlist}
          className={isInWishlist(product.id) ? 'active' : ''}
        >
          {isInWishlist(product.id) ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;