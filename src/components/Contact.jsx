import { ArrowRight } from 'lucide-react';
import logoWhite from '../assets/logo/teranga-labs-logo-white.svg';
import { useReveal } from '../hooks/useReveal';

export default function Contact({ onOpenContact }) {
  const [sectionRef, visible] = useReveal(0.14);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <div className={`contact-banner reveal ${visible ? 'is-visible' : ''}`}>
          {/* Subtle architectural grid & abstract monochrome waves */}
          <div className="contact-banner__grid" aria-hidden="true" />
          <svg
            className="contact-banner__waves"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ctaWave1" x1="0.2" y1="0" x2="0.8" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
                <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="ctaWave2" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 620 220 C 710 70, 860 -20, 1080 12 L 1200 40 L 1200 220 Z"
              fill="url(#ctaWave1)"
            />
            <path
              d="M 760 220 C 860 115, 980 78, 1200 105 L 1200 220 Z"
              fill="url(#ctaWave2)"
            />
            <path
              d="M 620 220 C 710 70, 860 -20, 1080 12"
              stroke="#FFFFFF"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          </svg>

          <div className="contact-banner__brand">
            <img src={logoWhite} alt="Téranga Labs" width="188" height="40" />
          </div>

          <div className="contact-banner__copy">
            <h2 id="contact-heading" className="contact-banner__title">
              Prêt à donner vie à votre idée ?
            </h2>
            <p className="contact-banner__desc">
              Parlons de votre projet et construisons ensemble une solution unique.
            </p>
          </div>

          <div className="contact-banner__action">
            <button
              type="button"
              className="btn-white btn-magnetic"
              onClick={() => onOpenContact()}
            >
              <span>Nous contacter</span>
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
