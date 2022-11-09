import React from "react";
import Image from "../../Assets/startdesigning.png";

const StartDesigning = () => {
  return (
    <div className="mainsection" style={{ marginTop: "0%" }}>
      <div className="uploadvideo-rightsec">
        <div className="uploadvideo-innersection">
          <h1>Easy video editing for everyone</h1>
          <p>
            Our video editor comes with all the features required to create
            great videos – no experience needed.
          </p>
          <button>Upload your Video</button>
        </div>
      </div>
      <div className="uploadvideo-leftsec">
        <img src={Image} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default StartDesigning;
