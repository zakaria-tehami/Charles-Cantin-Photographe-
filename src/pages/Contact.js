import React from 'react';
import BannerImage from '../assets/homeImg.jpg';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <div className='leftSide'
            style={{backgroundImage: `url(${BannerImage})`}}></div>
            <div className='rightSide'>
                <h1>Contactez Moi</h1>
                <form id='contact-form' name='contact' action='/contact' method='POST' >
                    <input type='hidden' name='form-name' value='contact'/>
                    <label htmlFor='name'>Nom Complet</label>
                    <input type="text" name='name' placeholder='Votre Nom Complet...'required/>
                    <label htmlFor='email'>Votre mail</label>
                    <input type="email" name='email' placeholder='Email@me.fr'required/>
                    <label htmlFor='message'>Votre message</label>
                    <textarea name='message' rows='6' cols='30' placeholder='Message...' required></textarea>
                    <button type='submit'>Envoyer le Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
