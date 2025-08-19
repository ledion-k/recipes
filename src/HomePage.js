import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1 className="home-title">Welcome to Recipe App</h1>
        <p className="home-subtitle">
          Krijo, ruaj dhe shijo recetat e tua të preferuara.
        </p>

        <div className="home-buttons">
          <a href="/create-recipe" className="btn primary">
            Create Recipe
          </a>
          <a href="#" className="btn secondary">
            View Recipes
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
