import React from "react";
import { Card } from "react-bootstrap";
import Image1 from "../../Assets/CardImg1.png";
import Image2 from "../../Assets/CardImg2.png";

const CardSection = () => {
  return (
    <div className="mainsection cardscetionmain">
      <Card className="shadow p-3 mb-5 bg-white rounded cardWidth">
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
          <Card.Title>Easy to use.</Card.Title>
          <Card.Text>
            Say goodbye to clunky video software and hello to one-click editing
            online. No training needed. And if you ever need a hand, our support
            team is here to help.
          </Card.Text>
          <button className="appbutton" variant="primary">
            Try it now
          </button>
        </Card.Body>
      </Card>
      <Card className="shadow p-3 mb-5 bg-white rounded cardWidth">
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
          <Card.Title>Tell your story.</Card.Title>
          <Card.Text>
            Say goodbye to clunky video software and hello to one-click editing
            online. No training needed. And if you ever need a hand, our support
            team is here to help.
          </Card.Text>
          <button className="appbutton" variant="primary">
            Try it now
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardSection;
