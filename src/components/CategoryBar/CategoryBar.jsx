import React, { useState } from 'react';
import './categoryBar.css';

function CategoryBar({ categories }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="category-bar with-buttons">
      {categories.map((item, index) => (
        <div
          key={index}
          className={`category-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <img src={item.icon} alt={item.label} className="category-icon" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;
