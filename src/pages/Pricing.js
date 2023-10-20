
import React from 'react';
import { PricingList } from '../components/helpers/PricingList';
import PricingItem from '../components/PricingItem';
import '../styles/Pricing.css';


function Pricing() {
    return (
        <div className='pricing'>
            <h1 className='PricingTile'>Lites des prestations</h1>
            <div className='PricingList'> {PricingList.map((pricingItem, key) => {
                return <PricingItem 
                key={key}
                image={pricingItem.image} 
                name={pricingItem.name} 
                price={pricingItem.price} 
                description={pricingItem.description} />
            })} </div>
        </div>
    )
}

export default Pricing;