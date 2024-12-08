import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining= coffees.filter(cof=>cof._id !==_id)
              setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="card p-4 card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className=" flex justify-between items-center w-full">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{taste}</p>
          <p>{category}</p>
          <p>{supplier}</p>
          <p>{quantity}</p>
          <p>{details}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical  space-y-4 ">
            <button className="btn bg-green-600 ">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn bg-yellow-600 ">Edit</button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
