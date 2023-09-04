import React from "react";
import { NavLink } from "react-router-dom";
import { HiShoppingCart,HiSearch } from "react-icons/hi";

const Header = () => {
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
                <NavLink to={'/'} className="nav-link active" aria-current="page">
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
              <NavLink to={'/cart'} className="nav-link">
                <HiShoppingCart />
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink to={'/cart'} className="nav-link ms-2">
                <HiSearch />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
