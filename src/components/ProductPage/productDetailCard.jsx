import React from "react";

const ProductDetailCard = ({
    category,
    description,
    id,
    image,
    price,
    rating,
    title,
}) => {
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
            <button className="mybtn">Add to Cart</button>
            <button className="mybtn bt2">
                Buy Now
            </button>
        </div>
    );
};

export default ProductDetailCard;
