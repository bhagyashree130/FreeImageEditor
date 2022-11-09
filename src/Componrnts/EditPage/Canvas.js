import { Drawer } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { useColor } from "react-color-palette";

const Canvas = ({
  rest,
  imageUrl,
  method,
  rotate,
  textvalue,
  textcolor,
  textSize,
}) => {
  const [src, setSrc] = useState("");
  const [text, setText] = useState("");
  const [rotation, Setrotation] = useState(0);
  const [flipvertically, Setflipvertically] = useState(0);
  const [fliphorizontally, Setfliphorizontally] = useState(0);
  const [translatex, Settranslatex] = useState(0);
  const [translatey, Settranslatey] = useState(0);
  const [canvasHeight, SetcanvasHeight] = useState(0);
  const [canvasWidth, SetcanvasWidth] = useState(0);
  const [flip, setFlip] = useState(false);
  const [isDragging, SetisDragging] = useState(false);
  const [textcolorcanvas, SetTextColorCanvas] = useState();
  const [textsizecanvas, SetTextSizeCanvas] = useState(10);

  const [textX, SettextX] = useState(25);
  const [texty, Settexty] = useState(90);

  const canvasRef = useRef(null);
  var canvas;
  var context;
  var img = new Image();

  const draw = (ctx) => {
    console.log(img);
    console.log("draw Called");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.canvas.width = 500;
    ctx.canvas.height = 500;

    ctx.rotate(rotation * 0.01745);
    var canvas1 = canvas.width;
    var canvas2 = canvas.height;
    var imageposx = 0;
    var imageposy = 0;

    // Settranslatex(context.canvas.width);
    // Settranslatey(1);
    // context.translate(translatex, translatey);
    // context.scale(flipvertically, fliphorizontally);
    // console.log(context.translatex);
    // console.log(context.translatey);
    // context.translate(0, context.canvas.height / 1);
    // context.scale(1, -1);
    // ctx.drawImage(img, imageposx, imageposy, 500, 500);
    ctx.drawImage(img, imageposx, imageposy, 500, 500);
    // ctx.fillStyle = textcolorcanvas;

    ctx.font = `${textsizecanvas}px Calibri`;
    ctx.fillText(text, textX, texty);
    ctx.restore();
  };

  function flipHorizontal() {
    SettextX((textX) => textX + 10);
    // Settranslatex(canvasWidth);
    // Settranslatey(0);
    // Setfliphorizontally((fliphorizontally) =>
    //   fliphorizontally === 1 ? -1 : 1
    // );
    // // Setflipvertically(1);
    // console.log(translatex, translatey, flipvertically, fliphorizontally);
    // setFlip(!flip);
    // context.translate(translatex, translatey);
    // context.scale(flipvertically, fliphorizontally);
    // // var rad = 2 * Math.PI - (90 * Math.PI) / 180;
    // // context.rotate(rad);
    // context.translate(context.canvas.width / 1, 0);
    // context.scale(-1, 1);
    // context.drawImage(
    //   img,
    //   0,
    //   0,
    //   context.canvas.width / 1,
    //   context.canvas.height / 1
    // );
  }
  function flipVertical() {
    Settexty((texty) => texty + 10);

    // Settranslatex(0);
    // Settranslatey(canvasHeight);
    // Setflipvertically((flipvertically) => (flipvertically === 1 ? -1 : 1));

    // console.log(translatex, translatey, flipvertically, fliphorizontally);
    // setFlip(!flip);

    // setFlip((flip) => !flip);
    // context.translate(0, context.canvas.height / 1);
    // context.scale(1, -1);
    // context.drawImage(
    //   img,
    //   0,
    //   0,
    //   context.canvas.width / 1,
    //   context.canvas.height / 1
    // );
  }

  const render = () => {
    console.log("Render");
    canvas = canvasRef.current;
    context = canvas.getContext("2d");
    SetcanvasHeight(context.canvas.height);
    SetcanvasWidth(context.canvas.width);
    img.onload = function () {
      console.log("Imagae on Load");
      draw(context);
    };
  };

  useEffect(() => {
    console.log("imgUrl");
    setSrc(imageUrl);
  }, [imageUrl]);
  // useEffect(() => {
  //   console.log("imgUrl");
  //   SetTextColorCanvas(textcolor);
  // }, [textcolor]);
  useEffect(() => {
    console.log(textsizecanvas);
    SetTextSizeCanvas(textSize);
  }, [textSize]);

  useEffect(() => {
    console.log();
    setText(textvalue);
  }, [textvalue]);

  useEffect(() => {
    console.log("imgSrc");
    img.src = src;
    render();
  }, [
    src,
    rotate,
    flip,
    translatex,
    translatey,
    text,
    fliphorizontally,
    flipvertically,
    textX,
    texty,
    textsizecanvas,
  ]);

  useEffect(() => {
    Setrotation(rotate);
    console.log(rotation);
    // drawEdit(context);
  }, [rotate]);

  // function drawEdit() {
  //   context.clearRect(
  //     0,
  //     0,
  //     context.canvas.width / 1,
  //     context.canvas.height / 1
  //   );
  //   console.log("edittext");
  //   context.drawImage(
  //     img,
  //     0,
  //     0,
  //     context.canvas.width / 1,
  //     context.canvas.height / 1
  //   );
  //   context.font = "40pt Calibri";
  //   context.fillText(rotation, 30, 90);
  // }

  // const getCursorPosition = (canvas, event) => {
  //   const rect = canvas.getBoundingClientRect();
  //   const x = event.clientX - rect.left;

  //   const y = event.clientY - rect.top;
  //   console.log(x, y);
  // };

  // canvas.addEventListener("mousedown", (e) => {
  //   getCursorPosition(canvas, e);
  // });
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;
  const hitBox = (x, y) => {
    console.log("HitBox");
    let isTarget = null;
    isTarget = true;

    if (x >= textX && x <= textX && y >= texty && y <= texty) {
      isTarget = true;
      console.log(isTarget);
    }
    return isTarget;
  };

  const handleMouseDown = (e) => {
    startX = parseInt(e.nativeEvent.offsetX - canvasWidth);
    startY = parseInt(e.nativeEvent.offsetY - canvasHeight);
    console.log(startX, startY);
    isDown = hitBox(startX, startY);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    const mouseX = parseInt(e.nativeEvent.offsetX - canvasWidth);

    const mouseY = parseInt(e.nativeEvent.offsetY - canvasHeight);
    const dx = mouseX - startX;
    const dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    console.log(dx, dy);

    SettextX(e.nativeEvent.offsetX);
    Settexty(e.nativeEvent.offsetY);
    console.log(textX, texty);
  };
  const handleMouseUp = (e) => {
    dragTarget = null;
    isDown = false;
  };
  const handleMouseOut = (e) => {
    handleMouseUp(e);
  };

  return (
    <>
      <div>
        <Drawer />
        {/* <img src={src} alt="" /> */}
        <canvas
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseOut={handleMouseOut}
          ref={canvasRef}
          {...rest}
        />
        <button
          onClick={() => {
            flipHorizontal();
          }}
        ></button>
        <button
          onClick={() => {
            flipVertical();
          }}
        ></button>
        <div class="slidecontainer">
          <input
            type="range"
            min="10"
            max="100"
            value={textsizecanvas}
            onChange={(e) => {
              console.log(e.target.value);
              SetTextSizeCanvas(e.target.value);
            }}
            class="slider"
            id="myRange"
          />
        </div>
      </div>
    </>
  );
};

export default Canvas;
