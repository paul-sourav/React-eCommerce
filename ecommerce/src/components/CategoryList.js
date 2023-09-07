import React, { useState } from "react";
import useFetch from "../Data/Data";

const CategoryList = ({ category }) => {
  const categories = useFetch("https://fakestoreapi.com/products/categories");
  const [activeCategory, setActiveCategory] = useState(null);

  //passing category name from child to parent com to shop page
  const getCate = (catname) => {
    setActiveCategory(catname);
    category(catname);
  };

  return (
    <div className="category-list d-flex justify-content-center flex-wrap">
       {/* button for perticular category */}
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            type="checkbox"
            value={item}
            onClick={() => {
              getCate(item);
            }}
            className={`btn btn-outline-success shadow-sm ms-1 ${
              activeCategory === item.name ? "active" : ""
            }`}
          >
            <h6>{item}</h6>
          </button>
        );
      })}
       {/* button for all category */}
      <button
        onClick={() => {
          getCate("all");
        }}
        className={`btn btn-outline-success shadow-sm ms-1 ${
          activeCategory === "all"? "active" : ""
        }`}
      >
        All
      </button>
    </div>
  );
};

export default CategoryList;
