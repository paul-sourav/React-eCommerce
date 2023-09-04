import React from "react";
import Layout from "../components/Layout/Layout";
import useFetch from "../Data/Data";
import "./style/Shop.css";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Shop = () => {
  const data = useFetch("https://fakestoreapi.com/products");
  const dispatch = useDispatch();
  const slector  = useSelector((state)=>state.cart);
  console.log(slector.data)

  const AddtocartHandle= (product)=>{
    dispatch(addToCart(product));
  }
  return (
    <Layout>
      <div className="shop">
        {data.map((item) => {
          return (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.id} />
              <p id="title">{item.title}</p>
              <span id="price">{item.price}$</span>
              <span id="wish">
                <AiOutlineHeart />
              </span>
              <button className="btn btn-outline-dark" onClick={() =>{AddtocartHandle(item)}}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Shop;
