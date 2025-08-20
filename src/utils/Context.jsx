import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContext = createContext();

const Context = (props) => {

    // Initialize products state from localStorage or set to null
    const [products, setproducts] = useState(
        () => JSON.parse(localStorage.getItem("products")) || null
    );

    const getproducts = async () => {
        try {
            const { data } = await axios("/products");
            setproducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    useEffect(() => {
        if (products !== null) {
            localStorage.setItem("products", JSON.stringify(products));
        }
    }, [products]);

    return (
        <ProductContext.Provider value={[products, setproducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
