import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import { Button, Container } from "react-bootstrap";
import { useSelectWishlist } from "../store/redux-store";
import {
  clearWishlist,
  removeFromWishlist,
} from "../store/slices/wishlistSlice";
import { useDispatch } from "react-redux";
import { useCart } from "../store/cart-context";
import toast from "react-hot-toast";

function WishlistPage() {
  const { addToCart } = useCart();
  const wishlist = useSelectWishlist();
  const dispatch = useDispatch();

  const moveToCart = (product) => {
    addToCart({ ...product });
    dispatch(removeFromWishlist(product));
    toast.success("Moved to cart!");
  };

  const handleRemoveFromWishlist = (product) => {
    // product
    dispatch(removeFromWishlist(product));
  };
  const handleClearWishlist = () => {
    dispatch(clearWishlist());
    toast.success("Cleared the wishlist");
  };

  return (
    <Container>
      <h4>Wishlist</h4>
      <hr />
      <Button
        disabled={!wishlist.length}
        variant="danger"
        onClick={handleClearWishlist}
      >
        Clear wishlist
      </Button>
      <hr />

      <Row xs={1} className="g-4">
        {wishlist.map((item) => (
          <Col key={item._id}>
            <Stack direction="horizontal" className="gap-3">
              <img src={item.image} style={{ width: "8rem" }} alt="" />
              <Stack className="align-items-start">
                <h5>{item.title}</h5>
                <p className="text-start text-body-secondary fs-6">
                  {item.description}
                </p>
              </Stack>
              <Stack gap={1}>
                <p className="text-nowrap fw-bolder">{item.price} EGP</p>
                <Button
                  className="text-nowrap"
                  onClick={() => moveToCart(item)}
                >
                  Move to cart
                </Button>
                <Button
                  className="text-nowrap"
                  variant="secondary"
                  onClick={() => handleRemoveFromWishlist(item)}
                >
                  Remove from wishlist
                </Button>
              </Stack>
            </Stack>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WishlistPage;
