import React from 'react'
import Layout from '../components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import "./style/Shop.css";
import { useNavigate } from 'react-router-dom';
import { removeWishlist } from '../Store/WishSlice';

const Wishlist = () => {

  const wishlist = useSelector((state)=>state.wish);
  const dispatch = useDispatch("")
  const navigate = useNavigate();

  const RemoveWishlist = (id) =>{
    dispatch(removeWishlist(id))
  } 

  return (
    <Layout>
      <div className="shop">
        {wishlist.data.map((item) => {
          return (
            <div key={item.id} className="card">
              <img
                src={item.image}
                alt={item.id}
                onClick={() => {
                  navigate(`/productCom/${item.id}`);
                }}
              />
              <p id="title">{item.title}</p>
              <span id="price">{item.price}$</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => RemoveWishlist(item.id)}
                >
                  Remove wishlist
                </button>
                <button className="btn btn-outline-success">Buy now</button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  )
}

export default Wishlist;
