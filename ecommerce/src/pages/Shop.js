import React from "react";
import Layout from "../components/Layout/Layout";
import useFetch from "../Data/Data";
import "./style/Shop.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/CategoryList";

const Shop = () => {
  const data = useFetch("https://api.escuelajs.co/api/v1/products");
  const navigate = useNavigate();
  return (
    <Layout>
    <CategoryList/>
      <div className="shop">
        {data.map((item) => {
          return (
            <div key={item.id} className="card">
              <img src={item.images[0]} alt={item.id} onClick={()=>{navigate(`/productCom/${item.id}`)}}/>
              <p id="title">{item.title}</p>
              <span id="price">{item.price}$</span>
              <span id="wish">
                <AiOutlineHeart/>
              </span>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};


export default Shop;
