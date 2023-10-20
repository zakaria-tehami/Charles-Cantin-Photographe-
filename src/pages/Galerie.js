
import React, { useState } from 'react';
import { MenuList } from '../components/helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Galerie.css';

function Galerie() {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    return (
        <div className='menu'>
            <h1 className='menuTitle'>Galerie</h1>
            <div className='filter'>
                <label htmlFor='filter'>Catégories:</label>
                <select id='filter' value={selectedFilter} onChange={handleFilterChange}>
                    <option value='All'>Toutes les images</option>
                    <option value='Mariage'>Mariage</option>
                    <option value='grossesse'>grossesse</option>
                    <option value='famille'>famille</option>
                    <option value='couple'>couple</option>
                    <option value='bébé'>bébé</option>
                    <option value='baptême'>baptême</option>
                </select>
            </div>
            <div className='menuList'>
                {MenuList.filter(menuItem => selectedFilter === 'All' || menuItem.name === selectedFilter).map((menuItem, Key) => {
                    return <MenuItem
                        key={Key}
                        image={menuItem.image}
                        name={menuItem.name} />
                })}
            </div>
        </div>
    )
}

export default Galerie;