import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard from "./productDetailCard";
import "./style.css";
const ProductDetail = () => {
    const id = useParams().id;
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

    return <div>{data ? <ProductDetailCard {...data} /> : "Loading ..."}</div>;
};

export default ProductDetail;
