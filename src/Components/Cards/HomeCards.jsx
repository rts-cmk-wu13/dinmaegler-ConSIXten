import React, { useState, useEffect } from 'react';

import { getHomes, } from '../../utilities/realEstateApi';
import SectionHeadliner from '../Sections/SectionHeadliner';
import './HomeCards.css';

const getEnergyColor = (label) => {
    switch (label) {
        case "A": return "#2ecc71";   // green
        case "B": return "#27ae60";   // dark green
        case "C": return "#f1c40f";   // yellow
        case "D": return "#e67e22";   // orange
        case "E": return "#e74c3c";   // light red
        case "F": return "#c0392b";   // red
        case "G": return "#96281B";   // dark red
        default: return "#7f8c8d";   // gray fallback
    }
};

export default function HomeCards() {
    const [homes, setHomes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleHomes, setVisibleHomes] = useState(6);
    const initialVisibleHomes = 6;


    useEffect(() => {
        const fetchHomes = async () => {
            try {
                const data = await getHomes();
                setHomes(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHomes();
    }, []);

    const handleShowMore = () => {
        setVisibleHomes(homes.length);
    };

    const handleShowFewer = () => {
        setVisibleHomes(initialVisibleHomes);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (

        <div className="homes-container margin-block-1">
            <SectionHeadliner />

            <div className="home-cards">
                {homes.slice(0, visibleHomes).map((home) => (
                    <div key={home.id} className="home-card">
                        <div className="home-card-image">
                            <img
                                src={home.images?.[0]?.url}
                                alt={home.address}
                            />
                            <span className="energy-label" style={{ backgroundColor: getEnergyColor(home.energylabel) }}>
                                {home.energylabel}
                            </span>
                        </div>
                        <div className="home-card-content">
                            <h3 className="price">{home.price.toLocaleString()} kr.</h3>
                            <p className="address">{home.address}</p>
                            <div className="details">
                                <span>{home.postalcode} {home.city}</span>
                                <div className="property-details">
                                    <span>{home.type} • {home.rooms} værelser</span>
                                    <span>{home.livingspace} m²</span>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
            <div className="show-more-container">
                {visibleHomes < homes.length ? (
                    <button onClick={handleShowMore} className="show-more-button">
                        Se alle boliger
                    </button>
                ) : visibleHomes > initialVisibleHomes && (
                    <button onClick={handleShowFewer} className="show-more-button">
                        Vis færre
                    </button>
                )}
            </div>

        </div>
    );
}