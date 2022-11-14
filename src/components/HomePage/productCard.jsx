import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductCard = ({ id, title, image }) => {
    const [inCart, setInCart] = useState(0);
    const handleClick = () => {
        setInCart(inCart + 1);
    };

    return (
        <div className="border p-2 productCard">
            <div className="_pcid">
                <div className="text-center">
                    <img src={image} alt="" width="100px" height="100px" />
                </div>
                <div className="px-2 overflow-hidden">
                    <Link to={`/product/${id}`}>
                        {title.length > 40
                            ? title.slice(0, 40).concat("...")
                            : title}
                    </Link>
                </div>
            </div>
            <Button
                variant="warning"
                onClick={handleClick}
                className="btn-sm mx-2 mt-2"
            >
                {inCart ? inCart + " in Cart" : "Add to Cart"}
            </Button>
        </div>
    );
};

export default ProductCard;
