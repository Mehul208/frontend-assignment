import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayProducts from "./displayProducts";
import "./style.css";
const Home = () => {
    const [products, setProducts] = useState();

    const getProducts = async () => {
        try {
            const { data: res } = await axios.get(
                "https://fakestoreapi.com/products"
            );
            console.log(res);
            setProducts(res);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (!products) getProducts();
    }, [products]);

    return (
        <div>
            <div>
                {products ? (
                    <DisplayProducts products={products} />
                ) : (
                    "loading .."
                )}
            </div>
        </div>
    );
};

export default Home;
