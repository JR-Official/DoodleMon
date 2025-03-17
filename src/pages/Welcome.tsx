import '../sass/app.scss'
import { useRef, useState } from 'react';

interface Doodlemon {
    name: string;
    type: string;
    description: string;
}

function App() {
    const doodlemonContainer = useRef<HTMLDivElement>(null);
    const [selectedDoodlemon, setSelectedDoodlemon] = useState<Doodlemon | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const doodlemonData = [
        { name: "Umbralisk", type: "Dark", description: "Shadowy predator that hunts in complete darkness, absorbing light energy" },
        { name: "Phantorach", type: "Ghost", description: "Ancient spectral serpent that haunts forgotten temples" },
        { name: "Thronilla", type: "Plant", description: "Sentient thorn bush that shoots poisonous pollen clouds" },
        { name: "Verdigore", type: "Fighting", description: "Moss-covered stone golem with vine-like muscles" },
        { name: "Dager", type: "Rock", description: "Living crystal formation that refracts light into laser attacks" },
        { name: "Arachnidra", type: "Bug", description: "Six-eyed spider queen with metallic web-shooting appendages" },
        { name: "Grim", type: "Psychic", description: "Dream-eating entity that manifests nightmares into reality" },
        { name: "Cosmonis", type: "Cosmic", description: "Star-born being that manipulates gravitational fields" },
        { name: "Ember", type: "Fire", description: "Sentient wildfire core that grows hotter as it takes damage" },
        { name: "Luminaura", type: "Fairy", description: "Moonlight incarnate that heals allies with celestial dust" },
        { name: "Dracelune", type: "Dragon", description: "Meteor-forged wyrm with obsidian scales and magma blood" },
        { name: "Frostrex", type: "Ice", description: "Glacial saber-toothed predator that freezes prey mid-leap" },
        { name: "Toxiswarm", type: "Toxic", description: "Mutated hive-mind of radioactive insects" },
        { name: "Normuren", type: "Normal", description: "Adaptive mimic that copies opponents' basic abilities" },
        { name: "Ferrox", type: "Metal", description: "Living alloy being that shapeshifts its body into weapons" },
        { name: "Zephyroar", type: "Flying", description: "Supersonic storm lion with hurricane-generating wings" },
        { name: "Terrabor", type: "Ground", description: "Earthquake-generating armadillo with tectonic plate armor" },
        { name: "Voltrash", type: "Lightning", description: "Plasma-based entity that rides lightning bolts" },
        { name: "Nucleon", type: "Nuclear", description: "Unstable radioactive core surrounded by protective force fields" },
        { name: "Hydrosire", type: "Water", description: "Tidal leviathan that controls ocean currents and whirlpools" },
        { name: "Prismara", type: "Crystal", description: "A shimmering, multi-faceted creature that splits light into rainbows. Its crystalline body can absorb and redirect energy attacks." }
    ];

    function getTypeEmoji(type: string) {
        const emojiMap: Record<string, string> = {
            'plant': '🌿', 'fire': '🔥', 'water': '💧', 'ghost': '👻', 'toxic': '☣️',
            'normal': '🟤', 'metal': '🔩', 'ice': '❄️', 'flying': '?', 'rock': '🔶',
            'ground': '?', 'dark': '🌑', 'bug': '🐛', 'lightning': '⚡', 'fighting': '🥋',
            'dragon': '🐉', 'psychic': '🌀', 'nuclear': '☢️', 'cosmic': '🌌', 'fairy': '✨',
            'crystal': '💎'
        };
        return emojiMap[type.toLowerCase()] || '❓';
    }

    function showDoodlemonDetails(index: number) {
        setSelectedDoodlemon(doodlemonData[index]);
        setModalOpen(true);
    }

    return (
        <>
            <header>
                <div className="logo-container">
                    <h1 className="logo">Doodle<span>Mon</span></h1>
                </div>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#about">About</a>
                </nav>
            </header>

            <main>
                <section id="home" className="hero">
                    <h1>Welcome to the World of DoodleMon!</h1>
                    <p>
                        Collect, train, and battle with your hand-drawn creatures in this
                        exciting new game. Every DoodleMon is unique - just like your
                        imagination!
                    </p>
                    <button className="btn">Play Now</button>
                </section>

                <section id="features" className="features">
                    <div className="feature-card">
                        <h3>Collect</h3>
                        <p>Discover and collect over 100 unique DoodleMon species throughout your journey.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Train</h3>
                        <p>Level up your DoodleMon through battles and special training exercises.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Battle</h3>
                        <p>Challenge other trainers in strategic turn-based battles to prove your skills.</p>
                    </div>
                </section>

                <section id="gallery" className="doodlemon-gallery">
                    <div className="gallery-title">
                        <h2>Gallery</h2>
                    </div>
                    <div className="gallery-container" ref={doodlemonContainer}>
                        {doodlemonData.map((doodlemon, index) => (
                            <div
                                key={index}
                                className="doodlemon-card"
                                onClick={() => showDoodlemonDetails(index)}
                            >
                                <div className="doodlemon-img">
                                    <div>{getTypeEmoji(doodlemon.type)}</div>
                                </div>
                                <div className="doodlemon-info">
                                    <h4>{doodlemon.name}</h4>
                                    <p>{doodlemon.type} Type</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 DoodleMon. All rights reserved.</p>
            </footer>

            {modalOpen && selectedDoodlemon && (
                <div className="modal open">
                    <button className="close-modal" onClick={() => setModalOpen(false)}>&times;</button>
                    <div className="modal-content">
                        <h2>{selectedDoodlemon.name}</h2>
                        <p><strong>Type:</strong> {selectedDoodlemon.type}</p>
                        <p>{selectedDoodlemon.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
