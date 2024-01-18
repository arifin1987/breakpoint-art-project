import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleRecipe = ({ recipe, handleDelete, handleConfirm }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, image, title, ingredients, instructions, status } = recipe;

  return (
    <tr>
      <th></th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {image && <img src={image} />}
          </div>
        </div>
      </td>

      <td>{title}</td>

      <td>{ingredients}</td>
      <td>{instructions}</td>

      <th>
        <Link to={`/recipe/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </th>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
          Delete
        </button>
      </th>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-primary"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default SingleRecipe;
