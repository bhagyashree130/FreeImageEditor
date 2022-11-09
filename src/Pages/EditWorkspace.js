import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Header from "../Componrnts/HomePage/Header";
import menuItem1 from "../Assets/TextAdd.png";
import menuItem2 from "../Assets/resize.png";
import menuItem3 from "../Assets/crop.png";
import menuItem4 from "../Assets/refresh.png";
import menuItem5 from "../Assets/flip.png";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
const EditWorkspace = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow((show) => !show);
  const [color, setColor] = useColor("hex", "#121212");
  const [tool, setTool] = useState(0);

  return (
    <>
      <div className="editmenu">
        <button
          onClick={() => {
            toggleShow();
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
          onClick={toggleShow}
          className="menuitembutton"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitem">
            <img src={menuItem2} alt="" />
            <h3>Resizing Image</h3>
          </div>
        </button>
        <button
          onClick={toggleShow}
          className="menuitembutton"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitem">
            <img src={menuItem3} alt="" />
            <h3>Cropping Image</h3>
          </div>
        </button>
        <button
          onClick={toggleShow}
          className="menuitembutton"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitem">
            <img src={menuItem4} alt="" />
            <h3>Rotating Image</h3>
          </div>
        </button>
        <button
          onClick={toggleShow}
          className="menuitembutton"
          style={{ border: "none", background: "none" }}
        >
          <div className="menuitem">
            <img src={menuItem5} alt="" />
            <h3>Flipping Image</h3>
          </div>
        </button>
      </div>
      <div className="imageeditspace">
        <div className="preview-img">
          <img src="image-placeholder.svg" alt="preview-img" />
        </div>
      </div>
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

export default EditWorkspace;
{
  /* <Button variant="primary" onClick={toggleShow}>
Launch
</Button>

 */
}
