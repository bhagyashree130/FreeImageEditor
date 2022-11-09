import React from "react";

import { NavLink } from "react-router-dom";

const BannerSection = () => {
  return (
    <>
      <div className="bannerSec">
        <div className="centerdiv">
          <h3>
            Try Freeditor
            <br /> Image & Video Suite
          </h3>
          <h1>
            an all-in-one Image & video editor, <br />
            perfect for remote work and distance learning.
          </h1>
          <div className="centredivbuitton">
            <NavLink to="/edit">
              <button>Start a WhiteBoard</button>
            </NavLink>
          </div>
          <p>
            Edit videos, edit images, make tutorials, convert files, and much
            more!
          </p>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
