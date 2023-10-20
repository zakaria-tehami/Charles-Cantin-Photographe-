import React, { useState } from 'react'
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }


    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img src={Logo} alt='logo' />
                <div className='hiddenLinks'>
                    <Link to="/">Acceuil</Link>
                    <Link to="/galerie">Galerie</Link>
                    <Link to="/pricing">Tarifs</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Acceuil</Link>
                <Link to="/galerie">Galerie</Link>
                <Link to="/pricing">Tarifs</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar;
