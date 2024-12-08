import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee=useLoaderData()
    const { _id, name, quantity, supplier, taste, category, details, photo } =
      coffee;
      const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {
          name,
          quantity,
          supplier,
          taste,
          category,
          details,
          photo,
        };
        console.log(updatedCoffee);

        //send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Coffee Updated successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      };

    return (
      <div>
        <div className="bg-[#f4f3f0] p-28 text-red-500">
          <h1 className="text-3xl font-bold"> Update coffee : {name} </h1>
          <form onSubmit={handleAddCoffee} className="s">
            {/* form row 1 */}
            <div className="md:flex gap-5 ">
              {/* input 1 */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Coffee Name"
                    className="input input-bordered w-full"
                    id=""
                  />
                </label>
              </div>
              {/* input 2 */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={quantity}
                    name="quantity"
                    placeholder="Quantity"
                    className="input input-bordered w-full"
                    id=""
                  />
                </label>
              </div>
            </div>
            {/* form row 2 */}
            <div className="md:flex gap-5 ">
              {/* input 1 */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Supplier Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="supplier Name"
                    className="input input-bordered w-full"
                    id=""
                  />
                </label>
              </div>
              {/* input 2 */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={taste}
                    name="taste"
                    placeholder="Taste"
                    className="input input-bordered w-full"
                    id=""
                  />
                </label>
              </div>
            </div>
            {/* form row 3 */}
            <div className="md:flex gap-5 ">
              {/* input 1 */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="category"
                    className="input input-bordered w-full"
                    id=""
                  />
                </label>
              </div>
              {/* input 2 */}
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={details}
                    name="details"
                    placeholder="Details"
                    className="input input-bordered w-full"
                    id=""
                  />
                </label>
              </div>
            </div>
            {/* form row 4 */}
            <div className="md:flex gap-5 pb-8 ">
              {/* input  */}
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Photo_Url</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={photo}
                    name="photo"
                    placeholder="Photo_Url"
                    className="input input-bordered w-full"
                    id=""
                  />
                </label>
              </div>
            </div>

            <input
              type="submit"
              className="btn btn-block bg-red-500"
              value={"Update Coffee"}
            />
          </form>
        </div>
      </div>
    );
};

export default UpdateCoffee;