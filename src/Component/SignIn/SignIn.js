import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <label>Login With</label>
              <div>
                <button className="btn btn-outline btn-success">
                  <p className="text-green-600">Google</p>
                </button>
                <button className="btn btn-outline btn-info ml-2">
                  <p className="text-blue-600">Facebook</p>
                </button>
                <button className="btn btn-outline ml-2">
                  <p className="text-black">Github</p>
                </button>
              </div>
              <label>OR</label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to={"/register"}
                    className="label-text-alt link link-hover"
                  >
                    New to Form tromm? Register
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
