import React, { useRef } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      <Card className="p-3">
        <h1 className="text-center mb-4">SignUp</h1>
        <Form.Group>
          <Form.Label htmlFor="email">Your email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Type your email here"
            ref={emailRef}
            id="email"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="password">Your password</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Type your password here"
            id="password"
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label htmlFor="confirm-password">
            Confirm you password
          </Form.Label>
          <Form.Control
            type="email"
            ref={passwordConfirmRef}
            placeholder="Confirm password here"
            id="confirm-password"
          />
        </Form.Group>
        <Button type="submit" className="mt-4">
          Sign Up
        </Button>
      </Card>
      <div className="w-100 text-center">
        Already have an account ? <Link to="/login">Sign In</Link>
      </div>
    </>
  );
};

export default SignUp;
