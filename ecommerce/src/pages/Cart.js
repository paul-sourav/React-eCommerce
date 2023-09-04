import React from "react";
import Layout from "../components/Layout/Layout";
import "./style/Shop.css";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Store/CartSlice";
const Cart = () => {
  const { data } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const RemoveCartHandle = (id) => {
    dispatch(removeCart(id));
  };
  return (
    <Layout>
      <div className="shop">
        {data.map((item) => {
          return (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.id} />
              <p id="title">{item.title}</p>
              <span id="price">{item.price}$</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => RemoveCartHandle(item.id)}
                >
                  Remove cart
                </button>
                <button className="btn btn-outline-success">Buy now</button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Cart;
