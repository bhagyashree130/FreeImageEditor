import React from "react";
import LogoImg from "../../Assets/LOGOIMG.png";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="page-footer text-center text-md-left pt-4 footermain">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <h5 className="text-uppercase font-weight-bold mb-4">
                <img src={LogoImg} alt="Logo Footer" className="footerlogo" />{" "}
              </h5>
              <h5> CONNECT WITH US </h5>

              <div
                style={{
                  display: "inline-flex",
                  width: "80% ",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#3a5998" }}
                    href="https://www.facebook.com/FreeditorSoftware"
                  >
                    <FaFacebookF />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#009ed0" }}
                    href="https://twitter.com/Freeditor"
                  >
                    <FaTwitter />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#117fb5" }}
                    href="https://www.linkedin.com/company/freeditor/"
                  >
                    <FaLinkedinIn />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#e32b26" }}
                    href="https://www.youtube.com/channel/UCLZdHWxVGOLMm5bE-PxNLSg/about"
                  >
                    <FaYoutube />
                  </a>
                </h4>
                <h4>
                  <a
                    className="icon_footer"
                    style={{ color: "#782de3" }}
                    href="https://www.instagram.com/fre.editor/"
                  >
                    <FaInstagram />
                  </a>
                </h4>
              </div>
            </div>

            {/* <!--/.First column--> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!--Second column--> */}

            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <NavLink
                    to="/aboutus"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Company{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Press & Blog{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--/.Second column--> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!--Third column--> */}
            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#howitworks"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    How it Works{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Our Blogs{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Our Services{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="contactus"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--/.Third column--> */}

            <hr className="w-100 clearfix d-md-none" />
            {/* <!--Fourth column--> */}
            <div className="col-md-2 mx-auto">
              <h5 className="text-uppercase font-weight-bold mb-4">
                Quick Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#howitworks"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    How it Works{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Our Blogs{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Our Services{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "grey" }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--/.Fourth column--> */}
          </div>
        </div>
        {/* <!--/.Footer Links--> */}

        <hr />

        {/* <!--Call to action--> */}
        <div className="call-to-action text-center my-4">
          <div className="footerlower">
            <div>
              <p> Wooshelf 2022 All Rights Reserved</p>
            </div>
            <div className="footerlowerinnerright">
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                  color: "grey",
                }}
              >
                Terms of Service
              </a>
              &nbsp; &nbsp; &nbsp;
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                  color: "grey",
                }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        {/* <!--/.Call to action--> */}
      </footer>
    </>
  );
};

export default Footer;
