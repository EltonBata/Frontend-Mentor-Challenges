import React from "react";
import recipe_image from "../assets/images/image-omelette.jpeg";

function RecipeImage() {
  return (
    <div className="recipe-img">
      <img src={recipe_image} alt="image-omelette" />
    </div>
  );
}

export default RecipeImage;
