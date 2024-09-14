import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../store/cart-context";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description} -<b> {product.price}EGP</b>
        </Card.Text>
        <Button variant="primary" onClick={() => addToCart(product)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}
