import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { UNIVERSE_PILLARS } from '../data/content';

export default function UniverseModal({ isOpen, onClose, onStartProject }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="universe-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-panel modal-panel--wide">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fermer l'univers Téranga Labs"
        >
          <X size={18} strokeWidth={2} />
        </button>

        <span className="section-eyebrow">Notre univers</span>
        <h3 id="universe-modal-title" className="modal-title">
          La méthode Téranga Labs.
        </h3>
        <p className="modal-desc">
          Nous allions rigueur d’ingénierie, esthétique minimaliste et proximité humaine pour
          concevoir des produits numériques durables.
        </p>

        <div className="universe-grid">
          {UNIVERSE_PILLARS.map((pillar) => (
            <div key={pillar.step} className="universe-card">
              <span className="universe-card__step">{pillar.step}</span>
              <h4 className="universe-card__title">{pillar.title}</h4>
              <p className="universe-card__text">{pillar.text}</p>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              onClose();
              onStartProject();
            }}
          >
            <span>Lancer votre projet</span>
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
