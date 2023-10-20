import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css';


function Footer() {
    return (
        <div className='footer'> 
            <div className='socialMedia'>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
            </div>
            <p>&copy;2023 Tehami Design</p>
        </div>
    )
}

export default Footer;
