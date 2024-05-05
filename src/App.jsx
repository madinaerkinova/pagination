// App.jsx

import React, { useState, useEffect } from 'react';
import Pagination from './Components/Pagination';
import './App.css'; 

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]); 
  const itemsPerPage = 10;
  const totalProducts = 130; 

  const fetchProducts = () => {
    const start = (currentPage - 1) * itemsPerPage + 1; 
    const end = currentPage * itemsPerPage; 
    const newProducts = Array.from({ length: itemsPerPage }, (_, index) => ({
      id: start + index,
      name: `Product ${start + index}`, 
      description: `Cosmetics ${start + index}` 
    }));
    setProducts(newProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1 className="title">Product Catalog</h1>
      <div className="pagination-container">
        <Pagination currentPage={currentPage} totalPages={Math.ceil(totalProducts / itemsPerPage)} onPageChange={handlePageChange} />
      </div>
      
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
