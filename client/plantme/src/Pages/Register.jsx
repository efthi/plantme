import React from "react";
import { useForm } from "react-hook-form";


const Register = () => {
  const {register} = useForm();
  const handleRegister = (e) => {
    e.preventDefault();
    
    console.log("Register Clicked!", register);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center text-primary mb-4">
              Register
            </h2>

            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                  name="name"
                  {...register("name")}
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="input input-bordered w-full"
                  name="email"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="input input-bordered w-full"
                  name="password"
                  required
                />
              </div>

              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className="input input-bordered w-full"
                  name="password-again"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-success w-full">Register</button>
              </div>
            </form>

            <div className="divider">OR</div>

            <button className="btn btn-outline w-full">
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
