import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/homeImg.jpg'
import '../styles/Home.css';


function Home() {
    return (
        <div className='home'  style={{backgroundImage: `url(${BannerImage})`}}>
            <div className='headerContainer'>
                <h1>Charles Cantin</h1>
                <p>Photographe</p>
                <Link to="/galerie"><button>Voir mes realisations</button></Link>
            </div>
        </div>
    )
}

export default Home;
