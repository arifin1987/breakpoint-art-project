import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
  const details = useLoaderData();
  return (
    <div>
      <img src={details.image} alt="" />
      <h1 className="text-2xl">Name: {details.title}</h1>
      <p>Ingredients:{details.ingredients}</p>
      <p>Instructions:{details.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
