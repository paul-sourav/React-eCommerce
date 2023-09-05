import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingCart, HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";

const Header = () => {
  const { data } = useSelector((state) => state.cart);
  const [search,setSearch] = useState(false);
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand">
            DevMart
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/shop"} className="nav-link">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link">
                  AboutUs
                </NavLink>
              </li>
            </ul>
            <div className="nav-item">
              {data.length > 0 && (
                <span className="cart-length">{data.length}</span>
              )}
              <NavLink to={"/cart"} className="nav-link">
                <HiShoppingCart />
              </NavLink>
            </div>
            <div className="nav-item">
              <span className="nav-link ms-2" onClick={()=>{setSearch(!search)}}>
                <HiSearch />
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="input-group " style={{display:search?"block":"none"}}>
        <input type="search" className="border text-center" placeholder="search product"/>
        <button className="btn btn-success">search</button>
      </div>
    </div>
  );
};

export default Header;
