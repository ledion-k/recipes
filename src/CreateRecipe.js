import React from "react";
import "./CreateRecipe.css";

function CreateRecipe() {
  return (
    <div className="create-recipe-page">
      <div className="create-recipe-card">
        <h1 className="title">Create Recipe</h1>

        <form>
          <div className="form-group">
            <label>Recipe Title</label>
            <input type="text" placeholder="Please enter recipe title" />
          </div>

          <div className="form-group">
            <label>Ingredients</label>
            <textarea placeholder="List ingredients here..." rows="4"></textarea>
          </div>

          <div className="form-group">
            <label>Instructions</label>
            <textarea placeholder="Write cooking instructions..." rows="6"></textarea>
          </div>

          <button type="submit" className="submit-btn">Save Recipe</button>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
