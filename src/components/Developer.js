import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

export default function Developer(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title><strong>{props.name}</strong>, github: {props.github}</Card.Title>
        <Link to={`/developers/${props.id}`}>
          <Button variant="primary">View Profile</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
