import React from 'react';
import './SectionGrid3.css'; // Assuming you have a CSS file for styling
import InfoCards from '../Cards/infoCards'; // Adjust the path as necessary

export default function SectionGrid3() {
    return (
        <section className="section-grid-container">
            <InfoCards />
            <InfoCards />
            <InfoCards />
        </section>
    )
}


