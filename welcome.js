// DoodleMon data with proper type formatting
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
    { name: "Prismara", type: "Crystal", description: "A shimmering, multi-faceted creature that splits light into rainbows. Its crystalline body can absorb and redirect energy attacks." } // Added new Crystal-type DoodleMon
];

// DOM Elements
const doodlemonContainer = document.getElementById('doodlemon-container');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');
const playBtn = document.getElementById('play-btn');

// Emoji mapping function
function getTypeEmoji(type) {
    switch (type.toLowerCase()) {
        case 'plant': return '🌿';
        case 'fire': return '🔥';
        case 'water': return '💧';
        case 'ghost': return '👻';
        case 'toxic': return '☣️';
        case 'normal': return '🟤';
        case 'metal': return '🔩';
        case 'ice': return '❄️';
        case 'flying': return '🪶';
        case 'rock': return '🔶';
        case 'ground': return '🪨';
        case 'dark': return '🌑';
        case 'bug': return '🐛';
        case 'lightning': return '⚡';
        case 'fighting': return '🥋';
        case 'dragon': return '🐉';
        case 'psychic': return '🌀';
        case 'nuclear': return '☢️';
        case 'cosmic': return '🌌';
        case 'fairy': return '✨';
        case 'crystal': return '💎';
        default: return '❓';
    }
}

// Generate DoodleMon cards
function generateDoodlemonCards() {
    doodlemonContainer.innerHTML = '';
    doodlemonData.forEach((doodlemon, index) => {
        const card = document.createElement('div');
        card.className = 'doodlemon-card';
        card.dataset.index = index;

        const emoji = getTypeEmoji(doodlemon.type);
        const formattedType = `${doodlemon.type} Type`;

        card.innerHTML = `
            <div class="doodlemon-img">
                <div>${emoji}</div>
            </div>
            <div class="doodlemon-info">
                <h4>${doodlemon.name}</h4>
                <p>${formattedType}</p>
            </div>
        `;

        card.addEventListener('click', () => showDoodlemonDetails(index));
        doodlemonContainer.appendChild(card);
    });
}

// Show DoodleMon details in modal
function showDoodlemonDetails(index) {
    const doodlemon = doodlemonData[index];
    const emoji = getTypeEmoji(doodlemon.type);

    modalContent.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">${emoji}</div>
        <h2 style="color: var(--accent-green);">${doodlemon.name}</h2>
        <p><strong>Type:</strong> ${doodlemon.type}</p>
        <p>${doodlemon.description}</p>
        <button class="btn" style="margin-top: 1rem;">Add to Team</button>
    `;

    modal.style.display = 'flex';
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Play button action
playBtn.addEventListener('click', () => {
    alert('Game launching soon! Stay tuned for the release.');
});

// Initialize the page
generateDoodlemonCards();