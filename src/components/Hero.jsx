import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import heroSculpture from '../assets/images/hero-tl-sculpture.jpg';
import '../styles/hero.css';

const KINETIC_WORDS = ['demain.', "l'avenir.", 'votre vision.'];

export default function Hero({ onOpenUniverse }) {
  const [wordIndex, setWordIndex] = useState(0);
  const stageRef = useRef(null);
  const primaryBtnRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    const timer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % KINETIC_WORDS.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  // Direct-DOM 3D tilt (zero React re-renders!)
  const handleStageMove = (event) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;
    const rotX = (-relY * 9).toFixed(2);
    const rotY = (relX * 11).toFixed(2);
    stage.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const handleStageLeave = () => {
    if (stageRef.current) {
      stageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  // Direct-DOM magnetic pull on primary button
  const handleBtnMove = (e) => {
    const btn = primaryBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.14;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
    btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
  };

  const handleBtnLeave = () => {
    if (primaryBtnRef.current) {
      primaryBtnRef.current.style.transform = 'translate3d(0, 0, 0)';
    }
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
          <h1 id="hero-heading" className="hero__title">
            <span className="hero__line-mask">
              <span className="hero__line hero-anim hero-anim--2">Construisons ensemble</span>
            </span>
            <span className="hero__line-mask">
              <span className="hero__line hero-anim hero-anim--3">
                le digital de{' '}
                <span className="hero__word-slot" aria-live="polite">
                  <em key={KINETIC_WORDS[wordIndex]} className="hero__title-emphasis">
                    {KINETIC_WORDS[wordIndex]}
                  </em>
                </span>
              </span>
            </span>
          </h1>

          <p className="hero__description hero-anim hero-anim--4">
            Téranga Labs transforme vos idées en solutions numériques innovantes : sites web,
            applications web et mobiles, et bien plus.
          </p>

          <div className="hero__actions hero-anim hero-anim--5">
            <a
              ref={primaryBtnRef}
              href="#services"
              className="btn-primary btn-magnetic"
              onMouseMove={handleBtnMove}
              onMouseLeave={handleBtnLeave}
            >
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
          onMouseMove={handleStageMove}
          onMouseLeave={handleStageLeave}
        >
          <div ref={stageRef} className="hero__sculpture-stage">
            <div className="hero__orbit-ring" aria-hidden="true">
              <span className="hero__orbit-node" />
            </div>
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
