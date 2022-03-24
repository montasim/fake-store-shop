import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Product.css'

const Product = (props) => {

    const { category, description, id, image, price, rating, title } = props.product;

    const { setCartCount } = props;

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='col-10 col-md-6 col-lg-4 product-card mx-auto'>
            <div className="card p-2 border align-items-center">
                <div className=''>
                    <img className='img-fluid w-50 mb-5' src={image} alt={title + 'image'} />
                </div>
                <h3>{title.slice(0, 20)} <sub>...</sub></h3>
                <p>Price: {price}   Rating: {rating.rate}</p>
                <small>Category: {category}</small>
                <div className="d-flex justify-content-around gap-3 my-3">
                    <button className='btn btn-success' onClick={setCartCount}>Add To Cart</button>
                    <button className='btn btn-danger'>Deletet</button>
                    <ProductDetails product={props.product}></ProductDetails>
                </div>
            </div>
        </div>
    );
};

export default Product;