import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import useFetch from "../Data/Data";
import "./style/Shop.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import { useDispatch } from "react-redux";
import { addWishlist } from "../Store/WishSlice";

const Shop = () => {
  const data = useFetch("https://fakestoreapi.com/products");
  const location = useLocation();
  const navigate = useNavigate();
  const [searchproduct, setSearchProduct] = useState("");
  const [category, setCategory] = useState(location.state?.setcate);
  const dispatch = useDispatch();

  function getCategoryName(name) {
    setCategory(name);
  }

  function setWishlist(product) {
    dispatch(addWishlist(product));
  }

  return (
    <Layout>
      {/* search bar */}
      <input
        type="search"
        className="search-bar"
        placeholder="search product"
        onChange={(e) => setSearchProduct(e.target.value)}
      />

      {/* category section */}

      <CategoryList category={getCategoryName} />

      {/* product section */}
      <div className="shop">
        {/* filter for search and category */}
        {data
          .filter((item) => {
            if (item.title.length === 0) {
              return item;
            } else {
              return item.title
                .toLowerCase()
                .includes(searchproduct.toLowerCase());
            }
          })

          .filter((item) => {
            if (!category) return item;
            if (category === "all") return item;
            return item.category === category;
          })

          .map((item) => {
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
                <p>{item.category}</p>
                <span id="price">{item.price}$</span>
                <span id="wish" onClick={() => setWishlist(item)}>
                  <AiOutlineHeart />
                </span>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Shop;
