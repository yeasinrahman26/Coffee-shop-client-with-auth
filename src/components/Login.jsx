import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

    const { createUser } = useContext(AuthContext);

    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const name=form.name.value;
        const password=form.password.value
        
        console.log(email,password);
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            const createAt=result?.user?.metadata?.creationTime
            const newUser={name,email,createAt}

            // save user data to the database
            fetch("http://localhost:5000/users", {
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(newUser)
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("users created to db", data);
                if(data.insertedId){
                    alert('user created in Db');
                }
              });
        })
        .catch(error=>{
            console.log('error',error);
        })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin}
          className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Already have an account ? <Link className="text-red-500" to={'/register'}><small>Login</small></Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
