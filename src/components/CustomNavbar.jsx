import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { useCart } from "../store/cart-context";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../store/auth-context";

function CustomNavbar() {
  const { cart } = useCart();
  // read
  const { user, logout } = useAuth(); // context

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
            <NavDropdown title="Account" id="basic-nav-dropdown">
              {user?._id ? (
                <>
                  <NavDropdown.Item href="#">{user?.username}</NavDropdown.Item>
                  <NavDropdown.Divider />
                </>
              ) : null}
              {user?._id ? (
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register">
                    Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>{" "}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
