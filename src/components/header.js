import React from "react";
import {Link}  from "react-router-dom";
import Home from "./home"
import Cart from "./cart";
import Register from "./register"
import About from "./about";
import './header.css'


function Header()  {
    return(
    <div>

        <div className="sticky-header">
            
            <div className="nav-bar">
            <Link to="/">HOME</Link>
            <Link to="/cart">CART</Link>
            <Link to="/product">PRODUCT</Link>
            <Link to="/about">ABOUT</Link>
            </div>

        </div>

    
        

    </div>
    )
}

export default Header;