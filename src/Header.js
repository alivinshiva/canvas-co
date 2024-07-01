import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      {/* this is a temp text we will replace it with site logo soon */}
      <div className="header_logo">
        <Link to="/" id="header__Logolink">
          <h2>Canvas&Co.</h2>
        </Link>
        {/* <img src="E:\Projects\myWeb\canvas\canvas\src\header_logo_black.png" alt="logo"/> */}
        {/*logo*/}
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <Search className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/Login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header__optionLineOne">
              Hello, <strong>{!user ? "Guest" : user?.email }{" "}
              </strong>
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCart className="header_BasketIcon" />
            <span className=" header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
