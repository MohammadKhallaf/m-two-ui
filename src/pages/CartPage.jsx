import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { Button, Stack } from "react-bootstrap";
import { useAuth } from "../store/auth-context";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart, addToCart } = useContext(CartContext);
  const { user, login, logout } = useAuth();

  const sum = cart.reduce((prev, item) => {
    return +item.price + prev;
  }, 0);

  return (
    <>
      <h2>Cart Page</h2>
      <hr />
      <Row xs={1} className="g-4">
        {cart.map((item, idx) => (
          <Col key={idx}>
            <Stack direction="horizontal" className="gap-3">
              <img src={item.image} style={{ width: "8rem" }} alt="" />
              <Stack className="align-items-start">
                <h5>
                  {item.title}
                  <span className="text-black-50 ms-2">({item.quantity})</span>
                </h5>
                <p className="text-start text-body-secondary fs-6">
                  {item.description}
                </p>
              </Stack>
              <Stack>
                <p className="text-nowrap fw-bolder">{item.price} EGP</p>
              </Stack>
            </Stack>
            {/* <ProductCard product={item} /> */}
          </Col>
        ))}
      </Row>
      <hr />
      <b>Total : {sum.toFixed(2)} EGP</b>
      <hr />
      <Stack gap={3}>
        {user ? (
          <Button variant="success">Checkout</Button>
        ) : (
          <Button as={Link} to="/login">
            Login
          </Button>
        )}

        <Button
          variant="danger"
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      </Stack>
    </>
  );
}
