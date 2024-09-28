import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useSelectProducts } from "../store/redux-store";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const products = useSelectProducts();
  const [product, setProduct] = useState(() => {
    return products.find((item) => item._id === params.id);
  });

  function getProductDetails() {
    axios
      .get(process.env.REACT_APP_BASE_URL + "products/" + params.id)
      .then((res) => {
        setProduct(res.data);
      });
  }

  useEffect(() => {
    getProductDetails();
  }, [params.id]);

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetails;
