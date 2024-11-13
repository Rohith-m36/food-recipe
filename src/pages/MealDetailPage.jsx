// src/pages/MealDetailPage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MealDetailPage = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setMeal(response.data.meals[0]);
    };

    fetchMealDetails();
  }, [id]);

  if (!meal) return <div>Loading...</div>;

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

export default MealDetailPage;
