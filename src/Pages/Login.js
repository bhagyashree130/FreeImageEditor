import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Logo from "../Assets/LOGOIMG.png";
import { myConstClass } from "../Constants";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
const Login = ({ isShowLogin, show, handleMethod, hide }) => {
  const [name, setName] = useState("");
  const [Uid, setUid] = useState("");
  const [Token, setToken] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [loading, setLoading] = useState();
  const [isVerifyEmail, setisVerifyEmail] = useState(false);
  let navigate = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function resetForm() {
    setEmail("");
    setPassword("");
    setName("");
    setconfirmpassword("");
    setMobile("");
    document.getElementById("Login-Form").reset();
    document.getElementById("Signup-Form").reset();
    document.getElementById("Signup-Form-verify").reset();
  }
  function singinUser() {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("re_password", confirmpassword);
    data.append("first_name", name);

    var config = {
      method: "post",
      url: "http://freeditor.wooshelf.com/users/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setisVerifyEmail(true);
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(
          error.response.data.email ??
            error.response.data.non_field_errors ??
            error.response.data.password ??
            "Error"
        );
      });
    setLoading(false);
  }

  function verifyUser() {
    var uid = Uid;
    var token = Token;
    console.log(token);
    console.log(uid);
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("uid", uid);
    data.append("token", token);
    var config = {
      method: "post",
      url: "http://freeditor.wooshelf.com/users/activation/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response));
        alert("Account Successfully created and Verified");
        hideLogin();
        resetForm();
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        alert(error.response.data.token ?? error.response.data.uid ?? "Error");
      });
  }

  function loginUser() {
    var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("email", email);
    data.append("password", password);

    var config = {
      method: "post",
      url: "http://freeditor.wooshelf.com/token/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("auth_token", response.data.auth_token);
        localStorage.setItem("isLoggedin", true);
        console.log("*************");
        console.log(localStorage.getItem("auth_token"));
        navigate("medialibrary");
        hideLogin();
        alert("Logged in Successfully");
        resetForm();
      })
      .catch(function (error) {
        console.log(error);
        alert(
          error.response.data.non_field_errors ??
            error.response.data.password ??
            "Error"
        );
      });
    setLoading(false);
  }
  function handleResendCode(event) {
    event.preventDefault();
  }
  function handleSubmiLogin(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    setLoading(true);
    loginUser();
  }
  function handleSubmitSignUp(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(mobile);
    console.log(name);
    setLoading(true);
    singinUser();
  }
  function handleSubmitSignUpVerify(event) {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(mobile);
    console.log(name);
    console.log(Uid);
    console.log(Token);

    verifyUser();
  }

  const handleClickLogin = () => {
    handleMethod("Login");
    resetForm();
  };
  const handleLoginMethodSignup = () => {
    handleMethod("Signup");
    resetForm();
  };
  const hideLogin = () => {
    hide();
    resetForm();
  };

  return (
    <div
      className={` ${isShowLogin ? "active" : "disable"} show  logincontainer `}
    >
      {/* {loading == true ? <ThreeDots height={20} /> : <>{loading}</>} */}

      <div className="logininner">
        <div className="cross" style={{ position: "fixed" }}>
          <button onClick={hide} style={{ border: "none", marginTop: "5px" }}>
            <i
              class="fa fa-window-close"
              aria-hidden="true"
              style={{ fontSize: "30px", color: "#096cfe" }}
            ></i>
          </button>
        </div>
        <div className="logininner1">
          <div className="signinbutton">
            <div
              className={` ${show == "Login" ? "loginactive" : ""}  signinbar`}
            ></div>
            <button
              className={` ${show == "Login" ? "loginactive" : ""}  `}
              onClick={handleClickLogin}
            >
              Sign In
            </button>
          </div>
          <div className="signupbutton">
            <div
              className={` ${show == "Signup" ? "loginactive" : ""}  signinbar`}
            ></div>
            <button
              className={` ${show == "Signup" ? "loginactive" : ""}  `}
              onClick={handleLoginMethodSignup}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="logininner2">
          <div
            className="card loginlogocard"
            style={{
              // width: "40%",
              backgroundColor: "#0372BC",
              color: "white",

              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "row",
            }}
          >
            <img src={Logo} alt="Logo Footer" className="footerlogo" />{" "}
          </div>
        </div>
        <div className="logininner3">
          {show == "Login" ? (
            <div className="forminner">
              {/* <div className="upperheading">Sign In</div> */}

              <div className="signinoptions">
                <div className="signinoptionbtn">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "centre",
                      padding: "3%",
                      fontSize: "20px",
                      fontWeight: "bold",
                      alignItems: "center",
                    }}
                  >
                    <a
                      className="icon_footer"
                      style={{
                        color: "#3a5998",
                        fontSize: "30px",
                        marginRight: "10px",
                      }}
                    >
                      <FaFacebookF />
                    </a>
                    Sign in with Facebook
                  </div>
                </div>
                <div className="signinoptionbtn">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "centre",
                      padding: "3%",
                      fontSize: "20px",
                      fontWeight: "bold",
                      alignItems: "center",
                    }}
                  >
                    <a
                      className="icon_footer"
                      style={{
                        color: "#3a5998",
                        fontSize: "30px",
                        marginRight: "10px",
                      }}
                    >
                      <FaGoogle />
                    </a>
                    Sign in with Google
                  </div>
                </div>
              </div>
              <div className="seperator">
                <hr class="solidseperator" />
                <div className="seperatortext">or</div>
                <hr class="solidseperator" />
              </div>
              <form id="Login-Form" onSubmit={handleSubmiLogin}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control p-3 mt-2 mb-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control p-3 mt-2 mb-2"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary p-3 mt-4"
                  style={{
                    width: "100%",
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "40px",
                  }}
                >
                  Sign In
                </button>
              </form>
            </div>
          ) : (
            <>
              {isVerifyEmail == false ? (
                <div className="forminner">
                  {/* <div className="upperheading">Sign Up</div> */}

                  <div className="signinoptions">
                    <div className="signinoptionbtn">
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "space-evenly",
                          alignItems: "centre",
                          padding: "3%",
                          fontSize: "20px",
                          fontWeight: "bold",
                          alignItem: "center",
                        }}
                      >
                        <a
                          className="icon_footer"
                          style={{
                            color: "#3a5998",
                            fontSize: "30px",
                            marginRight: "10px",
                          }}
                        >
                          <FaFacebookF />
                        </a>
                        Sign in with Facebook
                      </div>
                    </div>
                    <div className="signinoptionbtn">
                      <div
                        style={{
                          display: "flex",
                          // justifyContent: "space-evenly",
                          alignItems: "centre",
                          padding: "3%",
                          fontSize: "20px",
                          fontWeight: "bold",
                          alignItem: "center",
                        }}
                      >
                        <a
                          className="icon_footer"
                          style={{
                            color: "#3a5998",
                            fontSize: "30px",
                            marginRight: "10px",
                          }}
                        >
                          <FaGoogle />
                        </a>
                        Sign in with Google
                      </div>
                    </div>
                  </div>
                  <div className="seperator">
                    <hr class="solidseperator" />
                    <div className="seperatortext">or</div>
                    <hr class="solidseperator" />
                  </div>
                  <form id="Signup-Form" onSubmit={handleSubmitSignUp}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Name</label>
                      <input
                        type="text"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Mobile Number</label>
                      <input
                        type="number"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputPassword1"
                        placeholder="Enter Mobile No"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Password</label>
                      <input
                        type="password"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Confirm Password"
                        onChange={(e) => setconfirmpassword(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary p-3 mt-4"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        fontWeight: "600",
                        marginBottom: "10%",
                      }}
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              ) : (
                <div className="forminner">
                  <div className="verifyheading">
                    <h3>Enter the verification code recived on {email}</h3>
                  </div>
                  <form
                    id="Signup-Form-verify"
                    onSubmit={handleSubmitSignUpVerify}
                  >
                    <div class="form-group">
                      <label for="exampleInputEmail1">Enter Uid</label>
                      <input
                        type="text"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Uid"
                        onChange={(e) => setUid(e.target.value)}
                      />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputEmail1">Email Token</label>
                      <input
                        type="text"
                        class="form-control p-3 mt-2 mb-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Token"
                        onChange={(e) => setToken(e.target.value)}
                      />
                    </div>
                    <a
                      href=""
                      onClick={handleResendCode}
                      style={{ textDecoration: "none" }}
                    >
                      Resend Code
                    </a>
                    <button
                      type="submit"
                      class="btn btn-primary p-3 mt-4"
                      style={{
                        marginBottom: "30px",
                        width: "100%",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Verify
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
