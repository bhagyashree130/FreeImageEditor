import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="card logincontainer">
      <div className="logininner">
        <div className="logininner1">
          <div className="signinbutton">
            <div className="signinbar"></div>
            <button>Sign In</button>
          </div>
          <div className="signupbutton">
            <div className="signinbar loginactive"></div>

            <button className="loginactive">Sign Up</button>
          </div>
        </div>
        <div className="logininner2">
          <div
            className="card loginlogocard"
            style={{
              width: "40%",
              backgroundColor: "#0372BC",
              color: "white",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            LOGO.
          </div>
        </div>
        <div className="logininner3 mt-5"></div>
      </div>
    </div>
  );
};

export default SignUp;
