import React from 'react';
import './style.scss';

const FilterTabs = ({ currentFilter, setFilter }) => (
  <div className="filter-tabs">
    {["All", "Pending", "Completed"].map((tab) => (
      <button
        key={tab}
        className={currentFilter === tab ? 'active' : ''}
        onClick={() => setFilter(tab)}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default FilterTabs;
