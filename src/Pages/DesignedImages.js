import React from "react";
import { Card } from "react-bootstrap";
import Image1 from "../Assets/Image1.png";
import Image2 from "../Assets/Image2.png";

const DesignedImages = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "70px",
          fontWeight: "bold",
        }}
      >
        Designed Images
      </div>
      <div class="grid-container2">
        <div class="grid-item">
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          {" "}
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          {" "}
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          {" "}
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div class="grid-item">
          {" "}
          <Card
            style={{ width: "20rem" }}
            className="shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Your Design Work</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DesignedImages;
