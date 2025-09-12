import React from 'react';
import { Link } from 'react-router';
import CardsContact from '../Cards/CardsContact/CardsContact';

export default function Footer() {
    return (
        <footer>
            <div className="gray-background">
                {/* Left section - Logo + text */}
                <div className="footer-info span-2-columns ">
                    <figure className='margin-1'>
                        <img src="logo.png" alt="Din Mægler logo" />
                    </figure>
                    <div className='span-2-columns margin-1'>
                        <p className='line-height-2'>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form, by injected
                            humour, or randomised words.
                        </p>
                    </div>
                </div>

                <CardsContact />

                {/* Right section - Links */}
                <div className="footer-links_container grid-columns-2 margin-inline-4 margin-1">
                    <p>Quick Links</p>
                    <ul>
                        <li>
                            <Link to="#">Boliger til salg</Link>
                        </li>
                        <li>
                            <Link to="#">Mæglere</Link>
                        </li>
                        <li>
                            <Link to="#">Kontakt os</Link>
                        </li>
                        <li>
                            <Link to="#">Log ind / bliv bruger</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
