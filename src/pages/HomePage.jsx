import axios from "axios";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState([]); //<--2
  // fetch <-- 1
  // useEffect <-- 0
  function getProductList() {
    axios.get("http://localhost:5000/products").then((res) => {
      setProducts(res.data);
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
        {products.map((item, idx) => (
          <Col key={idx}>
            <ProductCard product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
