import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Recipe from "../src/routes/recipe";
import Story from "../src/routes/story";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="recipe" element={<Recipe />} />
      <Route path="story" element={<Story />} />
    </Routes>
  </BrowserRouter>
);
