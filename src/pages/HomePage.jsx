import axios from "axios";
import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";
import { setProducts } from "../store/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // const [products, setProducts] = useState([]); //<--2
  // fetch <-- 1
  // useEffect <-- 0
  function getProductList() {
    axios.get(process.env.REACT_APP_BASE_URL + "products").then((res) => {
      dispatch(setProducts(res.data));
    });
  }
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <h2>Product List</h2>
      <hr />
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products?.map((item, idx) => (
          <Col key={item._id}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
