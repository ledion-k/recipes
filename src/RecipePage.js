import React from "react";
import "./RecipePage.css";

export default function RecipePage() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="logo">Logo</div>
        <input type="text" placeholder="Search..." className="search" />
        <nav>
          <a href="#">Menu</a>
          <a href="#">Reservation</a>
          <a href="#" className="active">Recipes</a>
        </nav>
        <div className="settings">Settings ▼</div>
        <div className="logout">Log Out</div>
      </header>

      {/* Back Button */}
      <div className="back">← Go Back</div>
      <h2 className="recipe-title">Recipe</h2>

      {/* Main Content */}
      <div className="recipe-container">
        {/* Left Side */}
        <div className="recipe-info">
          <h1>Salmon Gravlax</h1>
          <p className="subtitle">
            Garde Manger &nbsp; Side of Salmon &nbsp; 1
          </p>

          {/* Tags */}
          <div className="tags">
            <span className="tag">Unit</span>
            <span className="tag">Qty</span>
            <span className="tag">Ingredient</span>
          </div>

          {/* Ingredients */}
          <div className="ingredients">
            <p>1.5</p>
            <p>gram</p>
          </div>
          <div className="ingredients">
            <p>1.5</p>
            <p>gram</p>
          </div>

          {/* Notes */}
          <p className="note">No Note</p>
        </div>

        {/* Right Side */}
        <div className="media-box">
          <div className="media-placeholder">No media</div>
        </div>
      </div>
    </div>
  );
}
