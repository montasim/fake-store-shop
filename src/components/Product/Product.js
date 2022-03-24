import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { category, description, id, image, price, rating, title } = props.product;

    return (
        <div className='col-8 col-md-6 col-lg-4 product-card mx-auto'>
            <div className="card p-2 border align-items-center">
                <div className=''>
                    <img className='img-fluid w-50 mb-5' src={image} alt={title + 'image'} />
                </div>
                <h3>{title.slice(0, 20)}</h3>
                <p>Price: {price}   Rating: {rating.rate}</p>
                <small>Category: {category}</small>
                <div className="d-flex justify-content-around gap-3 my-3">
                    <button className='btn btn-success'>Add To Cart</button>
                    <button className='btn btn-danger'>Deletet</button>
                    <button className='btn btn-info'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;