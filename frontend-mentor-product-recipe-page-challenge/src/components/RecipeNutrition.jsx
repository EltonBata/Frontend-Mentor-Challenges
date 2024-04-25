import React from "react";

function RecipeNutrition() {
  return (
    <div className="recipe-nutrition">
      <h1>Nutrition</h1>

      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <div>
        <table>
          <tbody>
            <tr>
              <td>Calories</td>
              <td className="col2">277kcal</td>
            </tr>

            <tr>
              <td>Carbs</td>
              <td className="col2">0g</td>
            </tr>

            <tr>
              <td>Protein</td>
              <td className="col2">20g</td>
            </tr>

            <tr>
              <td>Fat</td>
              <td className="col2">22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecipeNutrition;
