import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {

    const {signInUser}=useContext(AuthContext)

    const handleSingIn=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signInUser(email,password)
        .then(result=>{
            console.log(result.user);

            // update last login Time
            const lastSignInTime=result?.user?.metadata?.lastSignInTime;
            const loginInfo={email,lastSignInTime}; 
           
            fetch("http://localhost:5000/users", {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(loginInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("signin Info updated", data);
              });


        })
        .catch(error=>{
            console.log(error,"error");
        })
    }
    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleSingIn} className="card-body">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>

                <p>
                  New to Coffee Drinker{" "}
                  <Link className="text-red-600" to={"/login"}>
                    <small> Register</small>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        );
      </div>
    );
};

export default Register;