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

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/recipe/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfuly");
            const remaining = recipes.filter((recipe) => recipe._id !== id);
            setRecipe(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    const proceed = confirm("Are you sure you want to confirm?");
    if (proceed) {
      fetch(`http://localhost:5000/recipe/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            alert("updated successfuly");
            const remaining = recipes.filter((recipe) => recipe._id === id);
            const updated = recipes.find((recipe) => recipe._id === id);
            updated.status = "confirm";
            const newRecipes = [updated, ...remaining];
            setRecipe(newRecipes);
          }
        });
    }
  };
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
              <SingleRecipe
                key={recipe.id}
                recipe={recipe}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></SingleRecipe>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecipe;
