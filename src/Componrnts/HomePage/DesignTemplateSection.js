import React from "react";
import Image from "../../Assets/MainBaneer.png";
import Image2 from "../../Assets/IMGMOB.png";

const DesignTemplateSection = () => {
  return (
    <>
      <div className="mainsection2 designtemplate-mainsec">
        <h1>Popular features of online Image & Video editor</h1>
        <p>
          Freeditor online image editor comes packed with tons of great tools to
          help you perfect your photos. You can enhance photos, retouch
          portraits, remove backgrounds, and apply effects. Take a look at some
          of our most popular image editing features.
        </p>
        <img
          className="sectionimageresponsive"
          src={Image}
          alt=""
          style={{ width: "100%", height: "800px" }}
        />
        <img
          className="sectionimageresponsivemobile"
          src={Image2}
          alt=""
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default DesignTemplateSection;
