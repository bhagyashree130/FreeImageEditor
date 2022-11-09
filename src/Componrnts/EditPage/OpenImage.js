import React, { useEffect } from "react";
import ImageH from "../../Assets/HomePage2.png";
import { useState } from "react";

import { Button, Offcanvas } from "react-bootstrap";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import menuItem1 from "../../Assets/TextAdd.png";
import menuItem2 from "../../Assets/resize.png";
import menuItem3 from "../../Assets/crop.png";
import menuItem4 from "../../Assets/refresh.png";
import menuItem5 from "../../Assets/flip.png";
import Rotate1 from "../../Assets/Rightarrow.png";
import Rotate2 from "../../Assets/Leftarrow.png";
import Flip1 from "../../Assets/Flip1.png";
import Flip2 from "../../Assets/Flip2.png";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Canvas from "./Canvas";

const OpenImage = () => {
  function demo() {
    console.log("Called");
  }

  const [isImageSelected, setisImageSelected] = useState(false);
  let Image;
  var previewImages;
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState("");
  // const toggleShow = () => setShow((show) => !show);
  function toggleShow(id) {
    // setShow((show) => !show);
    if (id === menu) {
      setShow((show) => !show);
      console.log("1");
    } else if (show && id !== menu) {
      setMenu(id);
      console.log("2");
    } else {
      setMenu(id);
      setShow((show) => !show);
      console.log(id);
    }
  }
  const [textvalue, SetTextValue] = useState("");
  const [previewImage, setpreviewImage] = useState();
  const [rotate, setRotate] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(1);
  const [flipVertical, setFlipVertical] = useState(1);
  const [textcolor, SetTextColor] = useState("");
  const [textsize, SetTextSize] = useState(10);
  const [blurValue, SetBlurValue] = useState(0);

  const [crop, setCrop] = useState({
    unit: "%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });
  // if (Image == null) {
  //   setisImageSelected(true);
  // }

  function onImageChange(e) {
    Image = e.target.files[0];
    previewImages = URL.createObjectURL(e.target.files[0]);
    console.log(e.target.files);
    console.log(Image);
    console.log(previewImage);
    setpreviewImage(previewImages);
    if (Image != null) {
      console.log("Image Selected");

      setisImageSelected((isImageSelected) => !isImageSelected);
      console.log(isImageSelected);
    }
  }
  function rotateImageRight() {
    setRotate(rotate + 90);
    console.log(rotate);
  }
  function rotateImageLeft() {
    setRotate(rotate - 90);
    console.log(rotate);
  }
  function flipImageHorizontal() {
    setFlipHorizontal((flipHorizontal) => (flipHorizontal === 1 ? -1 : 1));
    console.log(flipHorizontal);
  }
  function flipImageVertic() {
    setFlipVertical((flipVertical) => (flipVertical === 1 ? -1 : 1));
    console.log(flipVertical);
  }
  function resetRotate() {
    setRotate(0);
  }

  function blurImage() {
    SetBlurValue(10);
  }
  function unblurImage() {
    SetBlurValue(0);
  }
  function saveImage() {}
  if (!isImageSelected) {
    return (
      <>
        <div className="mainsection" style={{ margin: "10%" }}>
          <div className="uploadvideo-rightsec" style={{ margin: "0%" }}>
            <div className="uploadvideo-innersection">
              <h1>Video Editing Made Simple</h1>
              <p>
                Create Videos with a Single Click. Add Subtitles ,transitions
                audio and more <br /> Try it now , no Account required
              </p>
              <div>
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  onChange={onImageChange}
                  hidden
                />
              </div>
              <button
                className="choose-img"
                onClick={() => document.querySelector(".file-input").click()}
              >
                Upload Image
              </button>
            </div>
          </div>
          <img src="foto-image" alt="" />
          <div className="uploadvideo-leftsec">
            <img src={ImageH} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="editmenu">
          <button
            onClick={() => {
              toggleShow("Text");
            }}
            className="menuitembutton"
            style={{ border: "none", background: "none" }}
          >
            <div className="menuitem">
              <img src={menuItem1} alt="" />
              <h3>Text Addition</h3>
            </div>
          </button>
          <button
            onClick={() => {
              toggleShow("Resize");
            }}
            className="menuitembutton"
            style={{ border: "none", background: "none" }}
          >
            <div className="menuitem">
              <img src={menuItem2} alt="" />
              <h3>Resizing Image</h3>
            </div>
          </button>
          <button
            onClick={() => {
              toggleShow("Crop");
            }}
            className="menuitembutton"
            style={{ border: "none", background: "none" }}
          >
            <div className="menuitem">
              <img src={menuItem3} alt="" />
              <h3>Cropping Image</h3>
            </div>
          </button>
          <button
            onClick={() => {
              toggleShow("Rotate");
            }}
            className="menuitembutton"
            style={{ border: "none", background: "none" }}
          >
            <div className="menuitem">
              <img src={menuItem4} alt="" />
              <h3>Rotating Image</h3>
            </div>
          </button>
          <button
            onClick={() => {
              toggleShow("Flip");
            }}
            className="menuitembutton"
            style={{ border: "none", background: "none" }}
          >
            <div className="menuitem">
              <img src={menuItem5} alt="" />

              <h3>Flipping Image</h3>
            </div>
          </button>
          <button
            onClick={() => {
              toggleShow("Blur");
            }}
            className="menuitembutton"
            style={{ border: "none", background: "none" }}
          >
            <div className="menuitem">
              <img src={menuItem2} alt="" />
              <h3> Image Distortion</h3>
            </div>
          </button>
        </div>
        {/* <canvas id="myCanvas" className="imageeditspace"></canvas> */}
        <div className="imageeditspace">
          <div className="preview-img">
            {/* <Canvas
              method={demo}
              imageUrl={previewImage}
              rotate={rotate}
              textvalue={textvalue}
            /> */}

            {menu === "Crop" || menu === "Resize" ? (
              <div style={{ width: "50%" }}>
                <ReactCrop
                  crop={crop}
                  onChange={menu === "Crop" ? (c) => setCrop(c) : () => {}}
                  aspect={1}
                >
                  <img src={previewImage} />
                </ReactCrop>
              </div>
            ) : menu === "Text" ? (
              <Canvas
                method={demo}
                imageUrl={previewImage}
                rotate={rotate}
                textvalue={textvalue}
                textcolor={textcolor}
                textsize={textsize}
              />
            ) : (
              // <Canvas imgSrcProp={previewImage} />
              <img
                style={{
                  transform: `rotate(${rotate}deg)  scale(${flipHorizontal} , ${flipVertical})
                  `,
                  width: "500px",
                  height: "500px",
                  filter: `blur(${blurValue}px)`,
                }}
                src={previewImage}
                alt="preview-img"
              />
            )}
          </div>
        </div>
        <Offcanvas
          style={{ width: "25%" }}
          show={show}
          scroll={true}
          backdrop={false}
          placement={"end"}
          portal={false}
        >
          <Offcanvas.Body>
            {/* {tool == 1 ? "Hello" : "Bye"} */}
            {menu === "Crop" ? (
              <CropImageMenu />
            ) : menu === "Text" ? (
              <TextAddMenu
                SetTextValue={SetTextValue}
                SetTextColor={SetTextColor}
                SetTextSize={SetTextSize}
                textsize={textsize}
                textcolor={textcolor}
                textvalue={textvalue}
              />
            ) : menu === "Resize" ? (
              <ResizeImageMenu setCrop={setCrop} />
            ) : menu === "Rotate" ? (
              <RotateImageMenu
                rotateValue={rotate}
                rotateImageRight={rotateImageRight}
                rotateImageLeft={rotateImageLeft}
                resetRotate={resetRotate}
              />
            ) : menu === "Blur" ? (
              <BlurImageMenu blurImage={blurImage} unblurImage={unblurImage} />
            ) : (
              <FlipImageMenu
                flipImageHorizontal={flipImageHorizontal}
                flipImageVertic={flipImageVertic}
              />
            )}

            <Button onClick={saveImage}>Save</Button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
};

export default OpenImage;

const RotateImageMenu = ({
  rotateImageRight,
  rotateImageLeft,
  rotateValue,
  resetRotate,
}) => {
  return (
    <>
      <div className="rotateimageoptionsection">
        <button onClick={rotateImageRight}>
          <img src={Rotate1} alt="" />
        </button>

        <button onClick={rotateImageLeft}>
          <img src={Rotate2} alt="" />
        </button>
      </div>

      <div className="rotatevalue">
        <input type="text" value={rotateValue} />
        <button className="rotatevaluebutton" onClick={resetRotate}>
          <img src={menuItem4} alt="" width={30} />
        </button>
      </div>
    </>
  );
};

export const CropImageMenu = () => {
  return (
    <>
      <div className="cropvalue">
        <h1>Width</h1>
        <input type="number" />
      </div>
      <div className="cropvalue">
        <h1>Height</h1>
        <input type="number" />
      </div>
    </>
  );
};
export const TextAddMenu = ({
  SetTextValue,
  textvalue,
  textcolor,
  textsize,
  SetTextColor,
  SetTextSize,
}) => {
  const [color, setColor] = useColor();
  const [tool, setTool] = useState(0);

  function setTExt(value) {
    SetTextValue(value);
  }
  function setTextSizefunction(value) {
    console.log(value);
    SetTextSize(value);
  }
  return (
    <>
      <div
        className="colorpickerdiv"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ColorPicker
          width={300}
          height={200}
          color={color}
          // onChange={(e) => {
          //   setColor(e.hex);
          // }}
          hideHSV
          // dark
        />
      </div>
      <div className="inputcontainer">
        <input
          type="text"
          value={textvalue}
          placeholder="Enter Text to Display"
          aria-label="Enter Text to Display"
          onChange={(e) => {
            console.log(e.target.value);
            setTExt(e.target.value);
          }}
        />
      </div>
      <div></div>
      <div class="slidecontainer">
        <h7>Set Text Size</h7>
        <input
          type="range"
          min="1"
          max="100"
          value={textsize}
          onChange={(e) => {
            setTextSizefunction(e.target.value);
          }}
          class="slider"
          id="myRange"
        />
      </div>
      <div></div>
    </>
  );
};
export const FlipImageMenu = ({
  flipImageVertic,
  flipImageHorizontal,
  setCrop,
}) => {
  return (
    <>
      <div className="rotateimageoptionsection">
        <button onClick={flipImageHorizontal}>
          <img src={Flip1} alt="" />
        </button>

        <button onClick={flipImageVertic}>
          <img src={Flip2} alt="" />
        </button>
      </div>
    </>
  );
};
export const BlurImageMenu = ({ blurImage, unblurImage }) => {
  function blur() {
    blurImage();
  }
  function unBlur() {
    unblurImage();
  }
  return (
    <>
      <div className="rotateimageoptionsection">
        <button onClick={blur} style={{ color: "blue" }}>
          Blur Image
        </button>
        <button onClick={unBlur} style={{ color: "blue" }}>
          UnBlur Image
        </button>
      </div>
    </>
  );
};
export const ResizeImageMenu = ({ setCrop }) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCrop({ unit: "%", x: 25, y: 0, width: 50, height: 100 });
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setCrop({ unit: "%", x: 0, y: 0, width: 150, height: 100 });
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setCrop({ unit: "%", x: 0, y: 25, width: 150, height: 50 });
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setCrop({ unit: "%", x: 25, y: 50, width: 150, height: 100 });
          }}
        >
          4
        </button>
      </div>
    </>
  );
};
