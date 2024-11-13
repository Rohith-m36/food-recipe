// src/components/FilterBar.js
import React from "react";

const FilterBar = ({ categories, areas, onFilter }) => {
  const handleCategoryFilter = (category) => {
    onFilter(`filter.php?c=${category}`);
  };

  const handleAreaFilter = (area) => {
    onFilter(`filter.php?a=${area}`);
  };

  return (
    <div className="filter-bar">
      <select onChange={(e) => handleCategoryFilter(e.target.value)}>
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.idCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>

      <select onChange={(e) => handleAreaFilter(e.target.value)}>
        <option value="">Select Area</option>
        {areas.map((area) => (
          <option key={area.strArea} value={area.strArea}>
            {area.strArea}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
