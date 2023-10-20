import React from 'react';

function PricingItem({ image, name, price, description }) {
    return (
        <div className='pricingItem'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className='price'>{price}</p>
            <p>{description}</p>
        </div>
    )
}

export default PricingItem;