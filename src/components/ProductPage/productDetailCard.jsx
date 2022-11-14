import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductDetailCard = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(cartActions.addToCart({ id: id, price: price }));
    };
    return (
        <div className="p-3">
            <h3>{title} </h3>
            <small className="text-capitalize font-weight-bold">
                {category}
            </small>
            <div className="prdc_img text-center my-3">
                <img src={image} alt="" />
            </div>
            <h4>${price}</h4>
            <small>
                Rating : {rating.rate + "⭐/"}
                From {rating.count} customers
            </small>
            <p className="py-2">{description}</p>
            <button
                className="mybtn"
                onClick={() => {
                    handleClick();
                }}
            >
                Add to Cart
            </button>
            <button className="mybtn bt2">Buy Now</button>
        </div>
    );
};

export default ProductDetailCard;
