import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Post(props) {
  const clickHandler = () => {
    console.log('I was clicked!')
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" onClick={clickHandler}>View Details</Button>
      </Card.Body>
    </Card>
  );
}
