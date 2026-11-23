import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroSculpture from '../assets/images/hero-tl-sculpture.jpg';
import '../styles/hero.css';

export default function Hero({ onOpenUniverse }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Number((-relY * 8).toFixed(2)),
      y: Number((relX * 10).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="accueil" className="hero" aria-labelledby="hero-heading">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__arc hero__arc--outer" />
        <div className="hero__arc hero__arc--dark" />
        <div className="hero__horizon" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            <span>Innovation • Excellence • Impact</span>
          </div>

          <h1 id="hero-heading" className="hero__title">
            Construisons ensemble
            <br />
            le digital de <em className="hero__title-emphasis">demain.</em>
          </h1>

          <p className="hero__description">
            Téranga Labs transforme vos idées en solutions numériques innovantes : sites web,
            applications web et mobiles, et bien plus.
          </p>

          <div className="hero__actions">
            <a href="#services" className="btn-primary">
              <span>Découvrir nos services</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="hero__secondary-btn"
              onClick={onOpenUniverse}
            >
              <span className="hero__play-circle" aria-hidden="true">
                <Play size={13} fill="currentColor" strokeWidth={2} />
              </span>
              <span>Voir notre univers</span>
            </button>
          </div>
        </div>

        <div
          className="hero__visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="hero__sculpture-stage"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <img
              src={heroSculpture}
              alt="Sculpture 3D monochrome inspirée du monogramme TL de Téranga Labs"
              className="hero__sculpture-img"
              width="520"
              height="520"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
