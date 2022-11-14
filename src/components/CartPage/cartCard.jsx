import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartCard = ({ id }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(cartActions.removeFromCart());
    };
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                const { data: res } = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                console.log(res);
                setData(res);
            } catch (error) {
                console.log(error);
            }
        };
        if (!data) getData();
    }, [data, id]);
    return (
        <div className="text-center">
            {data ? (
                <div className="ccrd">
                    <h6>
                        {data.title} <img src={data.image} alt="" />
                    </h6>
                    <h5>Price - ${data.price}</h5>
                </div>
            ) : (
                "..."
            )}
            <Button className="btn-info" onClick={handleClick}>
                Remove
            </Button>
        </div>
    );
};

export default CartCard;
