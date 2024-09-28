import { Button, Stack } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import { useCart } from "../store/cart-context";

export default function CartPage() {
  const { cart, clearCart } = useCart();
  const { user } = useAuth();

  const sum = cart.reduce((prev, item) => {
    return +item.price + prev;
  }, 0);

  const handleClearCart = () => {
    clearCart();
    toast.success("Cleared the cart");
  };

  return (
    <>
      <h2>Cart Page</h2>
      <hr />
      <Button
        disabled={!cart.length}
        variant="danger"
        onClick={handleClearCart}
      >
        Clear cart
      </Button>
      <hr />
      <Row xs={1} className="g-4">
        {cart.map((item, idx) => (
          <Col key={item._id}>
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
      </Stack>
    </>
  );
}
