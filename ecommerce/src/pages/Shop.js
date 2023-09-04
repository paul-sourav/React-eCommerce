import React from "react";
import Layout from "../components/Layout/Layout";
import useFetch from "../Data/Data";
import "./style/Shop.css";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../Store/CartSlice";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";


const Shop = () => {
  const data = useFetch("https://api.escuelajs.co/api/v1/products");
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const AddtocartHandle= (product)=>{
    dispatch(addToCart(product));
  }
  

  return (
    <Layout>
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
