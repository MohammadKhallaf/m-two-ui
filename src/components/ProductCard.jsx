import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext, useCart } from "../store/cart-context";
import { Stack } from "react-bootstrap";
import {
  addToWishlist,
  removeFromWishlist,
} from "../store/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSelectWishlist } from "../store/redux-store";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useCart();
  const wishlist = useSelectWishlist();
  const dispatch = useDispatch();

  // import and use the addToWishlist action
  const handleAddToWishlist = () => {
    // product
    dispatch(addToWishlist(product));
  };
  const handleRemoveFromWishlist = () => {
    // product
    dispatch(removeFromWishlist(product));
  };

  const isInWishlist = wishlist.some((item) => item._id === product._id);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description} -<b> {product.price}EGP</b>
        </Card.Text>
        <Stack gap={3}>
          <Button as={Link} to={`/products/${product._id}`}>
            Product Details{" "}
          </Button>
          <Button variant="secondary" onClick={() => addToCart({ ...product })}>
            Add to cart
          </Button>
          {isInWishlist ? (
            <Button variant="danger" onClick={handleRemoveFromWishlist}>
              Remove from wishlist
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleAddToWishlist}>
              Add to wishlist
            </Button>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
}
