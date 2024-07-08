// src/components/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = ({ onCategoryChange, cartItemCount, onAddToCart }) => {
  const handleAddToCart = () => {
    // For demonstration, let's add the first product in the list to the cart
    // Assuming products is defined in App.js and passed down as props
    const products = [
      { id: 1, name: 'Product 1', price: 10, category: 'Category 1', image: 'image1.jpg' },
      { id: 2, name: 'Product 2', price: 20, category: 'Category 2', image: 'image2.jpg' },
      { id: 3, name: 'Product 3', price: 30, category: 'Category 1', image: 'image3.jpg' },
    ];
    if (products.length > 0) {
      onAddToCart(products[0]); // Adding the first product in the list to the cart
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">E-commerce</h1>
      <div className="navbar-categories">
        <button onClick={() => onCategoryChange('All')}>All</button>
        <button onClick={() => onCategoryChange('Clothes')}>Clothes</button>
        <button onClick={() => onCategoryChange('Makeup')}>Makeup</button>
        <button onClick={() => onCategoryChange('Footwear')}>Footwear</button>
        <button onClick={() => onCategoryChange('Jewellery')}>Jewellery</button>
      </div>
      <div className="navbar-cart" onClick={handleAddToCart} data-count={cartItemCount}>
        Cart ({cartItemCount})
      </div>
    </nav>
  );
};

export default Navbar;
