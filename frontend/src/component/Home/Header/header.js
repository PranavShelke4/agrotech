import React from "react";
import "./header.css";
import { Container, Button } from "react-bootstrap";

function header() {
  return (
    <div className="header">
      <Container>
        <h1 className="title">
          <b>
            {" "}
            Smart way of <br></br> Farming with <br></br> Rutuja Krishi Seva
            Kendra{" "}
          </b>
        </h1> 
        <Button id="seeNow" variant="outline-light">See Now</Button>

      </Container>
    </div>
  );
}

export default header;
