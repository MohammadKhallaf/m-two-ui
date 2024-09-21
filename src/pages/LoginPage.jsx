import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "../store/auth-context";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
      _id: "ytrdeegfuekhb",
    };
    login(user);
    toast.success("Logged in successfully");
    setTimeout(() => {
      navigate("/cart");
    }, 500);
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
      </Form>
    </Container>
  );
};

export default LoginPage;
