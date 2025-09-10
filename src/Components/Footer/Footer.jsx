import React from 'react';
import { Link } from 'react-router';
import CardsContact from '../Cards/CardsContact/CardsContact';


export default function Footer() {
    return (
        <footer className='grid5 '>
           <div className='gray-background flex-column'>
            <figure>
            <img src="logo.png" alt="" />
            </figure>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
           <div className='footer-links_container'>
            <p>Quick Links</p>
            <ul>
                <li><Link to="#">Boliger til salg</Link></li>
                <li><Link to="#">Mæglere</Link></li>
                <li><Link to="#">Mine Favoritter</Link></li>
                <li><Link to="#">Kontakt Os</Link></li>
            </ul>
        </div>
        <CardsContact />
           </div>
        </footer>
    );
}