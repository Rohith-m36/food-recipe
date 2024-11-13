// components/MealDetail.js
import React from "react";

const MealDetail = ({ meal }) => {
  return (
    <div className="meal-detail">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealDetail;
