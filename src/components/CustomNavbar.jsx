import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { useCart } from "../store/cart-context";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CustomNavbar() {
  const { cart } = useCart();
  const wishlist = useSelector((state) => state.wishlist);
  const itemsCount = cart.length;

  return (
    <Navbar bg="dark" expand="md" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ECommerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/wishlist">
              Wishlist{" "}
              <Badge bg="info" text="dark">
                {wishlist.length}
              </Badge>
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart{" "}
              <Badge bg="warning" text="dark">
                {itemsCount}
              </Badge>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
