import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Form <span className="bg-violet-500 text-white rounded p-1 ml-1">Tormm</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about-me"}>About Me</Link>
          </li>
          <li>
            <Link to={"/signin"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
