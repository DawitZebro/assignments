import React from 'react';
import './ProductList.css'; 




const products = [
  { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
  { id: 2, name: "Smartphone", description: "Latest smartphone with advanced features.", price: 800 },
  { id: 3, name: "Headphones", description: "Premium noise-canceling headphones for immersive audio experience.", price: 250 },
  
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
