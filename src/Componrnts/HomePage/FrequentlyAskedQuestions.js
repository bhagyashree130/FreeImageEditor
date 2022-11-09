import React from "react";
import Icon from "../../Assets/IconArrow.png";
import { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "What's Image editing?",
      content: `Image editing is a fast digital way to perfect an image. Although cameras and phones are great devices for taking photos, 
      Sometimes they are not the greatest at capturing the best shots. 
      image editing allows you to polish images by the lighting and colours, adding image effects, blurring the background, 
      removing unwanted items to make your photos beautiful. Editing photos with Freeditor's best online image editor and get even more out of your photos.`,
    },
    {
      title: "How can I edit photos online for free?",
      content:
        "With Freeditor'sfree online image editor, you can do just that. First, open Freeditor'sfree online image editor websiteSecond, choose one editing feature you need, such as basic adjustments, portrait beauty, or image effects from the left dashboard. Third, apply the feature, download, and share your final piece..",
    },
    {
      title: "What's the difference between Freeditor and Photoshop?",
      content: `Freeditor is an online image editor like Photoshop including image editing and graphic design functions. 
      However, Freeditor has a less steep learning curve than Photoshop. 
      Everyone can become a professional photographer and graphic designer, no skills are required. `,
    },
  ],
};
const data2 = {
  rows: [
    {
      title: "What's video editing?",
      content: `Video editing is a fast digital way to perfect a video. Although cameras and phones are great devices for taking video, Sometimes they are not the greatest at capturing the best shots. 
      Video editing allows you to polish video by trimming, editing the shots, animations to make your video beautiful. Editing video with Freeditor's best online image editor and getting even more out of your video.`,
    },
    {
      title: "How can I edit videos online for free",
      content: `With Freeditor's free online video editor, you can do just that. First, open Freeditor's free online video editor website. 
      Second, choose one editing feature you need, such as basic adjustments, portrait beauty, or video effects from the left dashboard. 
      Third, apply the feature, download, and share your final piece.`,
    },
    {
      title: "What's the difference between video and Photoshop?",
      content: `Freeditor is an online video editor like Photoshop including video editing and graphic design functions. 
      However, Freeditor has a less steep learning curve than Photoshop. 
      Everyone can become a professional photographer and graphic designer, no skills are required. 
      `,
    },
  ],
};

const styles = {
  bgColor: "white",
  titleTextColor: "black",
  rowTitleColor: "black",
  rowContentColor: "black",
  // arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: (
    <img src={Icon} alt="" style={{ width: "25px", height: "25px" }} />
  ),
  tabFocus: true,
  expandIcon: (
    <img src={Icon} alt="" style={{ width: "25px", height: "25px" }} />
  ),
  // collapseIcon: "-",
};

const FrequentlyAskedQuestions = () => {
  return (
    <div className="mainsection2" style={{ justifyContent: "center" }}>
      <div className="faq-heading">
        <h1>Frequently Asked Questions </h1>
      </div>
      <div className="faqinner">
        <div className="faq-col faqwidth">
          <Faq data={data} styles={styles} config={config} />
          {/* <ul style={{ listStyleType: "none" }}>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul> */}
        </div>
        <div className="faq-col faqwidth">
          <Faq data={data2} styles={styles} config={config} />
          {/* <ul style={{ listStyleType: "none" }}>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li
              style={{
                display: "flex",
                alignContent: "centre",
                justifyItems: "center",
              }}
            >
              <img
                src={Icon}
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
