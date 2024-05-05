

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
    
      {currentPage !== 1 && (
        <button className="pagination-btn" onClick={() => onPageChange(currentPage - 1)}>
          &lt;
        </button>
      )}

      
      {pages.map(page => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      
      {currentPage !== totalPages && (
        <button className="pagination-btn" onClick={() => onPageChange(currentPage + 1)}>
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
