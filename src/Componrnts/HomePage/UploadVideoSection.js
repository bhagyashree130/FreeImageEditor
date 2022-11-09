import React from "react";
import Image from "../../Assets/VideoEditing.png";
const UploadVideoSection = () => {
  return (
    <div className="mainsection">
      <div className="uploadvideo-leftsec">
        <img src={Image} alt="" style={{ width: "100%" }} />
      </div>
      <div className="uploadvideo-rightsec">
        <div className="uploadvideo-innersection">
          <h1>Online Image editor for everyone</h1>
          <p>
            Freeditor image editor lets you edit photos in just a few clicks. It
            covers various free online image editing tools,
          </p>
          <button>Upload your Image</button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideoSection;
