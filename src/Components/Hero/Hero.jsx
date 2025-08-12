import './hero.css';

export default function Hero() {
    return (
        <section className="hero fullw">
            <figure>
            <img
                src="architecture-18.jpg"
                alt="Modern architecture"
                className="hero-bg"
            />
            </figure>
            <h1>Søg efter din drømmebolig</h1>
            <div>
                <div className="search-container">
                    <h2>søg blandt tusindvis af boliger over hele landet</h2>
                    <input className="search-input" type="text" placeholder="Søg efter by, adresse..." />
                    <button className="search-button">Søg</button>
                </div>
            </div>
        </section>
    );
}
