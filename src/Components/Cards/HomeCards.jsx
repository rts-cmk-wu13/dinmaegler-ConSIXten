import React, { useState, useEffect } from 'react';
import { getHomes } from '../../utilities/realEstateApi';
import './HomeCards.css';

function getEnergyColor(energyLabel) {
    switch (energyLabel) {
        case 'A':
            return 'green';
        case 'B':
            return 'lightgreen';
        case 'C':
            return 'yellow';
        case 'D':
            return 'orange';
        case 'E':
            return 'red';
        default:
            return 'gray';
    }
}

export default function HomeCards() {
    const [homes, setHomes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleHomes, setVisibleHomes] = useState(4);

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="homes-section">
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
            {visibleHomes < homes.length && (
                <div className="show-more-container">
                    <button onClick={handleShowMore} className="show-more-button">
                        Vis flere boliger
                    </button>
                </div>
            )}
        </div>
    );
}