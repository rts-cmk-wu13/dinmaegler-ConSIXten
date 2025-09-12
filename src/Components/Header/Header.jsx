import React from 'react';
import './header.css'; // Assuming you have a CSS file for styling
import Navigation from '../Navigation'; // Adjust the path as necessary
import { FaPaperPlane, FaPhone } from 'react-icons/fa';



const Header = () => {
    return (
        <header className='no-columns'>
            <div className="top-header">
                <div>
                    <div className='flex'>
                        <FaPaperPlane />
                        <p>4000@dinmaegler.com</p>
                    </div>
                    <div className='flex'>
                        <FaPhone/>
                        <p> +45 7070 4000</p>
                    </div>
                </div>
                <div>
                    <button>log in</button>
                </div>
            </div>
            <div className="main-header">
                <figure>
                    <img src="logo.png" alt="" />
                </figure>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;