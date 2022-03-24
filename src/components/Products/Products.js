import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    return (
        <div>
            <h1>All Products</h1>
            <div className="row">
                {
                    products.map(pd => <Product key={pd.id} product={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;