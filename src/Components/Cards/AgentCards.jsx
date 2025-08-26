import "./AgentCards.css"
import { useState, useEffect } from 'react';

export default function AgentCards() {
    const [agents, setAgents] = useState([]);
    const [visibleAgents, setVisibleAgents] = useState(3);
    const initialAgents = 3;

    useEffect(() => {
        fetch('https://dinmaegler.onrender.com/agents')
            .then(res => res.json())
            .then(data => setAgents(data));
    }, []);

    const handleShowMore = () => {
        setVisibleAgents(agents.length);
    };

    const handleShowLess = () => {
        setVisibleAgents(initialAgents);
        // Smooth scroll back to top of agents section
        document.querySelector('.agents-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="agents-section">
            <div className="no-columns flex flex-column txt-align-center">
                <h4 className="">Mød vores engagerede medarbejdere</h4>
                <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
            </div>
            <div className="agent-cards">
                {agents.slice(0, visibleAgents).map(agent => (
                    <div className="agent-card" key={agent.id}>
                        <figure>
                            <img src={agent.image.url} alt={agent.name} />
                        </figure>
                        <h3>{agent.name}</h3>
                        <p>{agent.title}</p>
                    </div>
                ))}
            </div>
            <div className="show-more-container">
                {visibleAgents < agents.length ? (
                    <button onClick={handleShowMore} className="show-more-button">
                        Se alle mæglere
                    </button>
                ) : visibleAgents > initialAgents && (
                    <button onClick={handleShowLess} className="show-more-button">
                        Vis færre
                    </button>
                )}
            </div>
        </section>
    );
}