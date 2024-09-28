import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    toast.promise(login(user), {
      loading: "Logging...",
      success: <b>Logged In!</b>,
      error: <b>Could not save.</b>,
    });
  };
  return (
    <Container className="w-50 border border-primary p-3 rounded shadow-lg">
      {" "}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="link" as={Link} to="/register" type="button">
          register
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
