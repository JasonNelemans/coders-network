import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function submitForm(event) {
    event.preventDefault();
    console.log(email, password, name);

    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <Container>
      <h1>SIGNUP</h1>
      <Form onSubmit={submitForm}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="name" 
            placeholder="Your name" 
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email" 
            placeholder="Enter email" 
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password" 
            placeholder="Password" 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
