import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee=e=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const quantity =form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category=form.category.value;
      const details=form.details.value;
      const photo=form.photo.value;

      const newCoffee={name,quantity,supplier,taste,category,details,photo}
      console.log(newCoffee);


      //send data to the server

      fetch("http://localhost:5000/coffee",{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
              title: "Success!",
              text: "Coffee added successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
        }
      })

    }


    return (
      <div className="bg-[#f4f3f0] p-28 text-red-500">
        <h1 className="text-3xl font-bold">  Add a coffee</h1>
        <form onSubmit={handleAddCoffee} 
        className="s">
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
                  name="photo"
                  placeholder="Photo_Url"
                  className="input input-bordered w-full"
                  id=""
                />
              </label>
            </div>
          </div>
          
          <input type="submit" className="btn btn-block" value={"Add Coffee"} />
        </form>
      </div>
    );
};

export default AddCoffee;