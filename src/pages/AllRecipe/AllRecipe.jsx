import { useEffect } from "react";
import { useState } from "react";
import SingleRecipe from "./SingleRecipe";

const AllRecipe = () => {
  const [recipes, setRecipe] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/recipe")
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th> Image</th>
              <th>Title</th>
              <th>Ingredients</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecipe;
