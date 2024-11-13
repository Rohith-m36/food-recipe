// src/components/MealList.js
import React from "react";
import { Link } from "react-router-dom";

const MealList = ({ meals }) => {
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="meal-card">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h3>{meal.strMeal}</h3>
          <Link to={`/meal/${meal.idMeal}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MealList;
