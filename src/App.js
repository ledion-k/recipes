import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import CreateRecipe from "./CreateRecipe";

function App() {
  return (
    <Router>
      {/* Menu e thjeshtë për navigim */}
      <nav style={{ padding: "12px 20px", background: "#f8f8f8", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px", textDecoration: "none", color: "#007bff" }}>
          Home
        </Link>
        <Link to="/create-recipe" style={{ textDecoration: "none", color: "#007bff" }}>
          Create Recipe
        </Link>
      </nav>

      {/* Rrugët */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
