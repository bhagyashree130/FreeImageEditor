import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Header from "../Componrnts/HomePage/Header";

import FlipButton from "../Assets/FlipButton.png";
import RotateButton from "../Assets/Rotate.png";
import Undo from "../Assets/UndoArrow.png";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
const EditWorkspaceVideo = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((show) => !show);
  const [color, setColor] = useColor("hex", "#12x1212");
  const [tool, setTool] = useState(0);
  return (
    <>
      <div className="editmenu">
        <button
          onClick={() => {
            toggleShow();
          }}
          className="menuitembuttonvideo"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitemvideo">
            <h3> Upload Media </h3>
            <img src="" alt="" />
          </div>
        </button>
        <button
          onClick={toggleShow}
          className="menuitembutton"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitemvideobutton">
            <img src={FlipButton} alt="" />
          </div>
        </button>
        <div className="menuitemvideoflip">
          <h3>Width</h3>
          <input type="number" />
        </div>
        <div style={{ "margin-right": "10px", "margin-left": "10px" }}></div>
        <div className="menuitemvideoflip">
          <h3>Height</h3>
          <input type="number" />
        </div>

        <div
          className="menuitemvideoflip "
          style={{ padding: "0px", margin: "0px" }}
        >
          <input type="checkbox" style={{ padding: "0px", margin: "0px" }} />
          <h3 style={{ padding: "0px", margin: "0px" }}>Aspect Ratio</h3>
        </div>

        <div style={{ "margin-right": "10px", "margin-left": "10px" }}></div>
        <div className="menuitemvideoflip">
          <h3>Rotate</h3>
          <input type="number" style={{ width: "25%" }} />
          <img src={Undo} alt="" style={{ width: "10%", marginLeft: "10px" }} />
        </div>
        <div style={{ "margin-right": "20px", "margin-left": "20px" }}></div>
        <button
          onClick={() => {
            toggleShow();
          }}
          className="menuitembuttonvideo"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitemvideo">
            <h3> Upload Media </h3>
            <img src="" alt="" />
          </div>
        </button>

        <button
          onClick={toggleShow}
          className="menuitembutton"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitemvideobutton">
            <img src={RotateButton} alt="" />
          </div>
        </button>
      </div>
      <div className="imageeditspace"></div>
      <Offcanvas
        show={show}
        scroll={true}
        backdrop={false}
        placement={"end"}
        portal={false}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* {tool == 1 ? "Hello" : "Bye"} */}
          <div
            className="colorpickerdiv"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ColorPicker
              width={300}
              height={200}
              color={color}
              onChange={setColor}
              hideHSV
              // dark
            />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default EditWorkspaceVideo;
{
  /* <Button variant="primary" onClick={toggleShow}>
Launch
</Button>

 */
}
