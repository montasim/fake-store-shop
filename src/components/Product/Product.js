import React from 'react';

const Product = (props) => {
    console.log(props.product);
    const { category, description, id, image, price, title } = props.product;

    return (
        <div className='col-md-4'>
            <div className="card p-2 border">
                <img src={image} alt={title + 'image'} />
                <h3>{title.slice(0, 20)}</h3>
                <p>{price}</p>
                <div className="d-flex justify-content-around gap-1">
                    <button className='btn btn-success'>Add To Cart</button>
                    <button className='btn btn-danger'>Deletet</button>
                    <button className='btn btn-info'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Product;