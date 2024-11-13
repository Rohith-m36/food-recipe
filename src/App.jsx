// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetailPage from "./pages/MealDetailPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Finder</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<MealDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
