import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { useCart } from "../store/cart-context";
import { Link } from "react-router-dom";

function CustomNavbar() {
  const { cart } = useCart();
  const itemsCount = cart.length;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ECommerce
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#features">
            Wishlist{" "}
            <Badge bg="info" text="dark">
              9
            </Badge>
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart{" "}
            <Badge bg="warning" text="dark">
              {itemsCount}
            </Badge>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
