import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function CartPage() {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <>
      <h2>Cart Page</h2>
      <hr />
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {cart.map((item, idx) => (
          <Col key={idx}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
