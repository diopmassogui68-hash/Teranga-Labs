import { useEffect, useRef, useState } from 'react';
import heroSculpture from '../assets/images/hero-tl-sculpture.jpg';
import '../styles/intro.css';

export default function IntroSplash() {
  const [phase, setPhase] = useState('enter'); // 'enter' | 'exit' | 'done'
  const percentRef = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setPhase('done');
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    // Lightweight DOM-only counter (zero React re-renders!)
    const start = performance.now();
    const duration = 1450;
    let rafId = 0;
    let lastShown = -1;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      const val = Math.round(eased * 100);
      if (val !== lastShown && percentRef.current) {
        lastShown = val;
        percentRef.current.textContent = `${String(val).padStart(2, '0')}%`;
      }
      if (t < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    const exitTimer = window.setTimeout(() => {
      setPhase('exit');
    }, 1600);

    const doneTimer = window.setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 2280);

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setPhase('exit');
        window.setTimeout(() => {
          setPhase('done');
          document.body.style.overflow = '';
        }, 560);
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'done') return null;

  const handleSkip = () => {
    if (phase === 'exit') return;
    setPhase('exit');
    window.setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 620);
  };

  return (
    <div
      className={`intro-splash ${phase === 'exit' ? 'intro-splash--exit' : ''}`}
      onClick={handleSkip}
      role="presentation"
      aria-hidden="true"
    >
      {/* Pure Black Split Shutters (GPU transform only) */}
      <div className="intro-splash__shutter intro-splash__shutter--top" />
      <div className="intro-splash__shutter intro-splash__shutter--bottom" />

      {/* Center Laser Ignition Beam */}
      <div className="intro-splash__beam" />

      {/* Single Crisp Impact Shockwave */}
      <div className="intro-splash__shockwave" />

      {/* Static Radial Backlight Flare */}
      <div className="intro-splash__flare" />

      {/* Top Corner Telemetry */}
      <div className="intro-splash__corners">
        <span>TL // DIGITAL STUDIO</span>
        <span>2026</span>
      </div>

      {/* Centerpiece 3D Sculpture Stage */}
      <div className="intro-splash__center">
        <div className="intro-splash__stage">
          {/* 2 Lightweight GPU-composited 3D Orbital Rings */}
          <div className="intro-splash__ring intro-splash__ring--1">
            <span className="intro-splash__ring-node" />
          </div>
          <div className="intro-splash__ring intro-splash__ring--2" />

          {/* Glowing Chrome-White 3D TL Sculpture (static filter, transform+opacity only) */}
          <div className="intro-splash__sculpture-wrap">
            <img
              src={heroSculpture}
              alt="Logo 3D Téranga Labs"
              className="intro-splash__sculpture"
              width="340"
              height="340"
              decoding="async"
            />
          </div>
        </div>

        {/* Crisp Brand Signature */}
        <div className="intro-splash__brand">
          <div className="intro-splash__title-mask">
            <span className="intro-splash__title">TÉRANGA</span>
          </div>
          <div className="intro-splash__sub">
            <span className="intro-splash__sub-line" />
            <span className="intro-splash__sub-text">LABS</span>
            <span className="intro-splash__sub-line" />
          </div>
        </div>
      </div>

      {/* Bottom Pure-CSS Progress Bar & Ref Counter */}
      <div className="intro-splash__footer">
        <span className="intro-splash__caption">Innovation · Excellence · Impact</span>
        <div className="intro-splash__meter">
          <div className="intro-splash__bar">
            <span className="intro-splash__bar-fill" />
          </div>
          <span ref={percentRef} className="intro-splash__percent">
            00%
          </span>
        </div>
      </div>
    </div>
  );
}
