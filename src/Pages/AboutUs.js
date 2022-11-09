import React from "react";
import AboutUsImg from "../Assets/AboutUs1.png";
import AboutUsImg2 from "../Assets/AboutUs2.png";
import textimg from "../Assets/textimg.png";
import Footer from "../Componrnts/HomePage/Footer";
const AboutUs = () => {
  return (
    <>
      <AboutUs1 />
      <AboutUs2 />
      <AboutUs3 />
      <FounderMessage />
      <Footer />
    </>
  );
};

export default AboutUs;

const AboutUs1 = () => {
  return (
    <>
      <div className="aboutusMain">
        <div className="aboutusMainleft">
          <h1>About Us</h1>
          <h3>We enable anyone to put their message in motion</h3>
          <div className="aboutusMaincontainer">
            <div className="aboutusMaincontainerrow">
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
            </div>
            <div className="aboutusMaincontainerrow">
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
              <div className="aboutusMaincontainerrowinner">
                <h1>1.</h1>
                <h2>Who We Are</h2>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutusMainright">
          <img src={AboutUsImg} alt="" />
        </div>
      </div>
    </>
  );
};
const AboutUs2 = () => {
  return (
    <>
      <div className="aboutus2">
        <div className="aboutus2img">
          <img src={AboutUsImg2} alt="" />
        </div>
        <div className="aboutus2content">
          <h1>Level up your Design Inventory</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            distinctio repellat quo excepturi et tempora voluptatum. Error
            numquam ut praesentium.
          </p>
          <h2>Auto Layout</h2>
        </div>
      </div>
    </>
  );
};
const AboutUs3 = () => {
  return (
    <>
      <div className="aboutus3">
        <h1>Editing In Minutes</h1>
        <h5>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius fuga
          minus vero eos explicabo dolorem distinctio optio cupiditate fugit
          quisquam repudiandae iure, labore dolore culpa dignissimos praesentium
          totam expedita est?
        </h5>
        <div className="aboutus3row">
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Add Text</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ab, nostrum!
            </p>
          </div>
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Add Text</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ab, nostrum!
            </p>
          </div>
          <div className="aboutus3rowinner">
            <img src={textimg} alt="" />
            <h4>Add Text</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab,
              nostrum! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ab, nostrum!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const FounderMessage = () => {
  return (
    <>
      <div className="foundermessagemain">
        <div className="foundermessagemainheading">
          <h1>Founder Message</h1>
          <hr className="solid" />
        </div>
        <div className="foundermessagemainparagraph">
          <h1>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo
          </h1>
        </div>
        <div className="founderimagequote">
          <h1>
            Come. Join us, and be a part of our journey. And together we will
            make you stand out from the others.
          </h1>
        </div>
      </div>
    </>
  );
};
