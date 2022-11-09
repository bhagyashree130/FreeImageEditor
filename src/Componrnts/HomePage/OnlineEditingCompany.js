import React from "react";
import Image from "../../Assets/editingCompany.png";
const OnlineEditingCompany = () => {
  return (
    <div className="mainsection">
      <div className="uploadvideo-leftsec">
        <img src={Image} alt="" style={{ width: "80%" }} />
      </div>
      <div className="uploadvideo-rightsec">
        <div className="uploadvideo-innersection">
          <h1>Video Editing Made Simple</h1>
          <p>
            Create Videos with a Single Click. Add Subtitles ,transitions audio
            Create Videos with a Single Click.
          </p>
          <button>Upload your Video</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineEditingCompany;
