import RecipeImage from "./components/RecipeImage";
import RecipeIngredients from "./components/RecipeIngredients";
import RecipeInstructions from "./components/RecipeInstructions";
import RecipeNutrition from "./components/RecipeNutrition";
import RecipePreparation from "./components/RecipePreparation";
import RecipePresentation from "./components/RecipePresentation";

const App = () => {
  return (
    <section className="main-section">
      <div className="principal-div">
        <RecipeImage />
        <RecipePresentation />
        <RecipePreparation />
        <RecipeIngredients />
        <hr />
        <RecipeInstructions />
        <hr />
        <RecipeNutrition />
      </div>
    </section>
  );
};

export default App;
