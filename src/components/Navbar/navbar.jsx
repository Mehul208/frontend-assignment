import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
    return (
        <div className="nvbr">
            <div className="nv_logo">E-Commerce</div>
            <div className="nv_nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="#">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
