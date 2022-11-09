import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Image1 from "../Assets/Image1.png";
import Image2 from "../Assets/Image2.png";

const MediaLibrary = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function getUserDetails() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://freeditor.wooshelf.com/apis/get-profile-info/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${localStorage.getItem("auth_token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(response.data.data.first_name);
        setName(response.data.data.first_name);
        setEmail(response.data.data.email);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getUserDetails();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "20px",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        Hi {name}
      </div>
      {/* <div className="mainsection medialibcardsec">
        <Card
          className="shadow p-3 mb-5 bg-white rounded"
          style={{ width: "40%" }}
        >
          <Card.Img variant="top" src={Image1} />
          <Card.Body>
            <Card.Title>Your Design Work</Card.Title>
            <a href="" style={{ textDecoration: "none" }}>
              View All <i class="fas fa-arrow-right"></i>
            </a>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "40%" }}
          className="shadow p-3 mb-5 bg-white rounded"
        >
          <Card.Img variant="top" src={Image2} />
          <Card.Body>
            <Card.Title>Your Design Work</Card.Title>

            <a href="" style={{ textDecoration: "none" }}>
              View All <i class="fas fa-arrow-right"></i>
            </a>
          </Card.Body>
        </Card>
      </div> */}
      <div className="medialib">
        <div className="medialibheading">
          <h1>Your Recent Work</h1>
          <a href="" style={{ textDecoration: "none" }}>
            View All <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <Card
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
              className="shadow p-3 mb-5 bg-white rounded"
            >
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Your Design Work</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="medialib">
        <div className="medialibheading">
          <h1>Your Media Library</h1>
          <a href="" style={{ textDecoration: "none" }}>
            View All <i class="fas fa-arrow-right"></i>
          </a>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <Card
              style={{ width: "100%" }}
              className="shadow p-3  mb-5 bg-white rounded"
            >
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Your Design Work</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div class="grid-item">
            <Card
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
              className="shadow p-3 mb-5 bg-white rounded"
            >
              <Card.Img variant="top" src={Image2} />
              <Card.Body>
                <Card.Title>Your Design Work</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaLibrary;
