import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {

    const handleDelete=id=>{
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
            
            
            //delete from the data base
            fetch(`http://localhost:5000/users/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount >0){
                     Swal.fire({
                       title: "Deleted!",
                       text: "Your file has been deleted.",
                       icon: "success",
                     });

                     const remainingUsers=users.filter(user =>user._id !== id)
                     setUsers(remainingUsers)
                }
               
            })

          }
        });
    }

    const loadedUsers=useLoaderData();
    const [users,setUsers]=useState(loadedUsers)
    return (
      <div>
        <h2 className="text-3xl">Users: {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>CreatedAt</th>
                <th>Last SignIn</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                <tr key={user._id}>
                  <th>1</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createAt}</td>
                  <td>{user.lastSignInTime}</td>
                  <td className="space-x-2">
                    <button onClick={()=>handleDelete(user._id)} 
                     className="btn">X</button>
                    <button className="btn">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;