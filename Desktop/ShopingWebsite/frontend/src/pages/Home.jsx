import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(setProducts);
    fetch('https://fakestoreapi.com/products/categories').then(res => res.json()).then(setCategories);
  }, []);

  const filterCategory = (cat) => {
    setSelectedCategory(cat);
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
      .then(res => res.json())
      .then(setProducts);
  };

  return (
    <div className="home">
      <h2>Products</h2>
      <div className="categories">
        {categories.map((cat) => (
          <button key={cat} onClick={() => filterCategory(cat)}>{cat}</button>
        ))}
      </div>
      <div className="product-grid">
        {products.map((p) => (
          <Link to={`/product/${p.id}`} key={p.id} className="product-card">
            <img src={p.image} alt={p.title} />
            <div className="product-info">
              <p className="product-title">{p.title}</p>
              <p className="product-price">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;