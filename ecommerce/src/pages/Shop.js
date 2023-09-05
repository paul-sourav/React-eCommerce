import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import useFetch from "../Data/Data";
import "./style/Shop.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import CategoryList from "../components/CategoryList";

const Shop = () => {
  const data = useFetch("https://api.escuelajs.co/api/v1/products");
  const navigate = useNavigate();
  const [searchproduct, setSearchProduct] = useState("");
  const [category, setCategory] = useState("");
  
  function getCategoryName(name) {
    setCategory(name);
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

      <CategoryList category={getCategoryName}/>

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
            if (category === "all" )return item;
            return item.category.name === category;
          })

          .map((item) => {
            return (
              <div key={item.id} className="card">
                <img
                  src={item.images[0]}
                  alt={item.id}
                  onClick={() => {
                    navigate(`/productCom/${item.id}`);
                  }}
                />
                <p id="title">{item.title}</p>
                <p>{item.category.name}</p>
                <span id="price">{item.price}$</span>
                <span id="wish">
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
