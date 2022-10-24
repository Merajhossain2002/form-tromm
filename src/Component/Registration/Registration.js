import React from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/firebase.init";

const auth = getAuth(app);

const Registration = () => {
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGitSignIn = (event) => {
    event.preventDefault();

    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleFbSignIn = (event) => {
    event.preventDefault();

    signInWithPopup(auth, fbProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <label>Sign Up With</label>
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-success"
                >
                  <p className="text-green-600">Google</p>
                </button>
                <button
                  onClick={handleFbSignIn}
                  className="btn btn-outline btn-info ml-2"
                >
                  <p className="text-blue-600">Facebook</p>
                </button>
                <button
                  onClick={handleGitSignIn}
                  className="btn btn-outline ml-2"
                >
                  <p className="text-black">Github</p>
                </button>
              </div>
              <label>OR</label>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to={"/signin"}
                    className="label-text-alt link link-hover"
                  >
                    Already have an account? Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
