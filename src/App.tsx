import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

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
        <button className="btn" id="play-btn">Play Now</button>
      </section>

      <section id="features" className="features">
        <div className="feature-card">
          <h3>Collect</h3>
          <p>
            Discover and collect over 100 unique DoodleMon species throughout
            your journey.
          </p>
        </div>
        <div className="feature-card">
          <h3>Train</h3>
          <p>
            Level up your DoodleMon through battles and special training
            exercises.
          </p>
        </div>
        <div className="feature-card">
          <h3>Battle</h3>
          <p>
            Challenge other trainers in strategic turn-based battles to prove
            your skills.
          </p>
        </div>
      </section>

      <section id="gallery" className="doodlemon-gallery">
        <h2 className="gallery-title">Featured DoodleMon</h2>
        <div className="gallery-container" id="doodlemon-container">
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 DoodleMon. All rights reserved.</p>
    </footer>

    <div className="modal" id="modal">
      <button className="close-modal" id="close-modal">&times;</button>
      <div className="modal-content" id="modal-content">
      </div>
    </div>
    </>
  )}

export default App
