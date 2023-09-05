import React from "react";
import Layout from "./Layout/Layout";
import { useParams } from "react-router-dom";
import useFetch from "../Data/Data";
import "./Style/productdetails.css";
import { addToCart } from "../Store/CartSlice";
import { useDispatch} from "react-redux";

const ProductDetails = () => {
  const params = useParams();
  const product = useFetch(
    `https://api.escuelajs.co/api/v1/products/${params.product}`
  );

  const dispatch = useDispatch();
  const AddtocartHandle= (product)=>{
    dispatch(addToCart(product));
  }
  

  return (
    <Layout>
      <div className="product-details">
        <div className="image">
          <img src={product?.images} alt={product.title} />
        </div>
        <div className="details">
          <h1>{product.title}</h1>
          <h4> {product.category?.name} </h4>
          <p>{product.description}</p>
          <h2> {product.price}$ </h2>
          <div className="btn-group">
            <button className="btn btn-outline-dark" onClick={() => { AddtocartHandle(product) }}>
              Add to Cart
            </button>
            <button className="btn btn-outline-dark">Buy Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
