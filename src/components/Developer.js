import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Developer(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title><strong>{props.name}</strong>, github: {props.github}</Card.Title>
        <Button variant="primary">View Profile</Button>
      </Card.Body>
    </Card>
  );
}
