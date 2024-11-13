// src/pages/Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MealList from "../components/MealList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  // Fetch default meals on load
  useEffect(() => {
    fetchRandomMeals();
    fetchCategoriesAndAreas();
  }, []);

  const fetchRandomMeals = async () => {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    setMeals(response.data.meals);
  };

  const fetchCategoriesAndAreas = async () => {
    const categoryResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
    setCategories(categoryResponse.data.categories);

    const areaResponse = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    setAreas(areaResponse.data.meals);
  };

  const fetchMealsByName = async (query) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    setMeals(response.data.meals || []);
  };

  const fetchMealsByFilter = async (filterUrl) => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/${filterUrl}`);
    setMeals(response.data.meals || []);
  };

  return (
    <div>
      <SearchBar onSearch={fetchMealsByName} />
      <FilterBar categories={categories} areas={areas} onFilter={fetchMealsByFilter} />
      <MealList meals={meals} />
    </div>
  );
};

export default Home;
