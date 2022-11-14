import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "./cartCard";
import "./style.css";
const CartPage = () => {
    const cartList = JSON.parse(localStorage.getItem("cart")).cartItemsList;
    console.log(cartList);
    return (
        <div>
            <>
                {cartList && cartList.length > 0 ? (
                    cartList.map((item, i) => <CartCard {...item} key={i} />)
                ) : (
                    <div>No items in cart</div>
                )}
                <div className="mt-5 cntr">
                    <br />
                    <Button variant="dark" size="medium">
                        <Link to="/checkout">Checkout</Link>
                    </Button>
                </div>
            </>
        </div>
    );
};

export default CartPage;
