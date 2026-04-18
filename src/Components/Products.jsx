import React from 'react';

const Product = ({ product }) => {
    const { id, name, price, category, brand, description, image } = product;
    return (
        <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>{brand}</p>
                <p>{category}</p>
                <p>${price}</p>
                <p>{description}</p>
                <p>{image}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;