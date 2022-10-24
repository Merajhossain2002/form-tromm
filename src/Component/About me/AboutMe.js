import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            className="max-w-sm rounded-lg shadow-2xl"
            src="https://visafoto.com/img/passport-photo-original7.jpg"
            alt="user-pic"
          />
          <div className="text-left">
            <h1 className="text-2xl font-bold">Name: Alaska</h1>
            <h1 className="text-xl font-bold">Email: mdmaraj1500@gmail.com</h1>
            <h1 className="text-lg font-bold">verified: Yes</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
