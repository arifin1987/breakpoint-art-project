import Swal from "sweetalert2";

const CreateArecipe = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instructions.value;
    const image = form.image.value;

    const savedIngredients = { title, ingredients, instructions, image };
    fetch(
      "https://breakpoint-art-project-server-nlesavpdx-arifin1987.vercel.app/recipe",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedIngredients),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Recipe Created",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    form.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Create A Recipe!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ingredients</span>
              </label>
              <input
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructions</span>
              </label>
              <input
                type="text"
                name="instructions"
                placeholder="Instructions"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create Recipe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateArecipe;
