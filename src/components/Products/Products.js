import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const AllProducts = ({ setCartCount }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json));
    }, []);

    return (
        <div className='my-5'>
            <h1>All Products</h1>
            <div className="row mx-auto my-5">
                {
                    products.map(pd => <Product key={pd.id} product={pd} setCartCount={setCartCount}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;