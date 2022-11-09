import React, { useState } from "react";
import LogoImg from "../../Assets/LOGOIMG.png";
import { NavLink } from "react-router-dom";
import { Avatar, MenuItem } from "@mui/material";
import avtar from "../../Assets/avatar.jpg";
import { deepOrange } from "@mui/material/colors";
import DropDownMenu from "react-bootstrap/esm/DropdownMenu";
import { Card } from "react-bootstrap";
import { padding } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Header = ({ handleshowlogin, handleMethod }) => {
  const [showExtra, setShowExtra] = useState(false);
  let navigate = useNavigate();

  const handleClickLogin = () => {
    handleshowlogin();
    handleMethod("Login");
  };
  const handleLoginMethodSignup = () => {
    handleshowlogin();
    handleMethod("Signup");
  };

  function logout() {
    localStorage.clear();
    // localStorage.removeItem("auth_token");
    // localStorage.removeItem("isLoggedin");
    setShowExtra(false);
    navigate("/");
  }
  function showExtraOptions() {
    console.log(showExtra);
    setShowExtra((showExtra) => !showExtra);
  }
  return (
    <div className="header">
      <div className="headerleft">
        <NavLink to="/" style={{ display: "block" }}>
          <img src={LogoImg} alt="" className="headerlogo" />
        </NavLink>
      </div>
      {localStorage.getItem("isLoggedin") == "true" ? (
        <>
          <div className="profileIcon">
            <div>
              <button
                onClick={showExtraOptions}
                style={{ border: "none", background: "none" }}
              >
                <Avatar
                  src={avtar}
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: deepOrange[500],
                  }}
                  alt="photoURL"
                />
              </button>
            </div>
            <div
              style={{
                width: "200px",
                display: `${showExtra == false ? "none" : "block"}`,
                position: "fixed",
              }}
            >
              <Card>
                {/* <button
                  style={{
                    border: "none",
                    background: "none",
                    margin: "10%",
                  }}
                >
                  <div>Profile</div>
                </button> */}
                {/* <hr style={{ margin: "1%" }} /> */}
                <button
                  onClick={logout}
                  style={{ border: "none", background: "none", margin: "10%" }}
                >
                  <div>Logout</div>
                </button>
              </Card>
            </div>
          </div>

          {/* <Popover
            open={true}
            // anchorEl={open}
            // onClose={handleClose}
            sx={{
              p: 0,
              mt: 1.5,
              ml: 0.75,
              "& .MuiMenuItem-root": {
                typography: "body2",
                borderRadius: 0.75,
              },
            }}
          ></Popover> */}
        </>
      ) : (
        <div className="headerright">
          <button className="login-btn" onClick={handleClickLogin}>
            Login
          </button>
          <button className="signup-btn" onClick={handleLoginMethodSignup}>
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
