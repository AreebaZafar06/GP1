// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css'; // Assuming you have a global App.css for general styles

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products = [
    { id: 1, name: 'The Flutter Sleeve', price: 40, category: 'Clothes', image: '3.jpg' },
    { id: 2, name: 'The Cap Sleeve', price: 50, category: 'Clothes', image: '4.jpg' },
    { id: 3, name: 'The Tunic', price: 60, category: 'Clothes', image: '2.jpg' },
    { id: 4, name: 'The Classic Button-Down', price: 42, category: 'Clothes', image: '1.jpg' },
    { id: 5, name: 'Classic Fit Shirt', price: 55, category: 'Clothes', image: '5.jpg' },
    { id: 6, name: 'Loose fit shirt', price: 67, category: 'Clothes', image: '6.jpg' },
    { id: 7, name: 'Oversize shirt', price: 32, category: 'Clothes', image: '7.jpg' },
    { id: 8, name: 'Asymmetric shirt', price: 30, category: 'Clothes', image: '8.jpg' },

    { id: 1, name: 'Foundation', price: 80, category: 'Makeup', image: '9.jpg' },
    { id: 2, name: 'Concealer', price: 60, category: 'Makeup', image: '10.jpg' },
    { id: 3, name: 'Contour', price: 45, category: 'Makeup', image: '11.jpg' },
    { id: 4, name: 'Blush', price: 30, category: 'Makeup', image: '12.jpg' },
    { id: 5, name: 'Highlighter', price: 40, category: 'Makeup', image: '13.jpg' },
    { id: 6, name: 'Makeup Fixer', price: 70, category: 'Makeup', image: '14.jpg' },
    { id: 7, name: 'Mascara', price: 60, category: 'Makeup', image: '15.jpg' },
    { id: 8, name: 'Lipstick', price: 80, category: 'Makeup', image: '16.jpg' },
   
    { id: 1, name: 'Wedges', price: 70, category: 'Footwear', image: '17.jpg' },
    { id: 2, name: 'Ballet pumps', price: 60, category: 'Footwear', image: '18.jpg' },
    { id: 3, name: 'Lace ups', price: 50, category: 'Footwear', image: '19.jpg' },
    { id: 4, name: 'Canvas shoes', price: 40, category: 'Footwear', image: '20.jpg' },
    { id: 5, name: 'Wellington boots', price: 66, category: 'Footwear', image: '21.jpg' },
    { id: 6, name: 'Flip flops', price: 74, category: 'Footwear', image: '22.jpg' },
    { id: 7, name: 'Mules', price: 56, category: 'Footwear', image: '23.jpg' },
    { id: 8, name: 'Loafers', price: 87, category: 'Footwear', image: '24.jpg' },
   
    { id: 1, name: 'Pearl Jewellery', price: 99, category: 'Jewellery', image: '25.jpg' },
    { id: 2, name: 'Shell Jewellery', price: 87, category: 'Jewellery', image: '26.jpg' },
    { id: 3, name: 'Statement Earrings', price: 56, category: 'Jewellery', image: '27.jpg' },
    { id: 4, name: 'Hair Jewellery', price: 76, category: 'Jewellery', image: '32.jpg' },
    { id: 5, name: 'Necklace', price: 30, category: 'Jewellery', image: '28.jpg' },
    { id: 6, name: 'Rings', price: 70, category: 'Jewellery', image: '29.jpg' },
    { id: 7, name: 'Bracelets', price: 50, category: 'Jewellery', image: '30.jpg' },
    { id: 8, name: 'Anklet', price: 20, category: 'Jewellery', image: '31.jpg' },
   
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Navbar onCategoryChange={handleCategoryChange} cartItemCount={cartItems.length} onAddToCart={handleAddToCart} />
      <ProductList 
        products={products.filter(product => selectedCategory === 'All' || product.category === selectedCategory)} 
        onAddToCart={handleAddToCart} 
      />
      <Cart cartItems={cartItems} />
      <Footer />
    </div>
  );
};

export default App;
