import React from "react";

const Newsletter = () => {
  return (
    <div
      className="mainsection"
      style={{ marginTop: "0", justifyContent: "center" }}
    >
      <div className="newsletter">
        <div>
          <h1>
            Subscribe our Newsletter and get <br /> update everytime.
          </h1>
          <div className="newsletter-inner">
            <input type="text" placeholder="Enter Your E-Mail" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
